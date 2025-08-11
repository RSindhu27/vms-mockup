import React, { useMemo, useState } from "react";
import {
  Box,
  Stack,
  Typography,
  IconButton,
  Chip,
  LinearProgress,
  linearProgressClasses,
  Button,
  alpha,
} from "@mui/material";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Link } from "react-router-dom";

// Reuse your shared components for consistency
import { Table, TableDeleteRow } from "../../../Components/Table";
import { TabWrapper } from "../../../Components/Page";
import TableFilters from "../../../Containers/TableFilter";

import Data from "./DataOne.json";

const StatusChip = ({ value }) => {
  const map = {
    Active: { color: "success", label: "Active" },
    Inactive: { color: "default", label: "Inactive" },
    Rejected: { color: "error", label: "Rejected" },
    Approved: { color: "success", label: "Approved" },
    Cancelled: { color: "warning", label: "Cancelled" },
  };

  const m = map[value] || { color: "default", label: value };
  return (
    <Chip size="small" color={m.color} label={m.label} variant="outlined" />
  );
};

const WorkflowChip = ({ value }) => {
  const map = {
    "In-progress": { color: "warning" },
    Pending: { color: "warning" },
    Approved: { color: "success" },
    Cancelled: { color: "default" },
    Rejected: { color: "error" },
  };
  const c = map[value]?.color || "default";
  return <Chip size="small" color={c} label={value} variant="filled" />;
};

const CompletionBar = ({ value }) => (
  <Box sx={{ minWidth: 140 }}>
    <Stack direction="row" spacing={1} alignItems="center">
      <Box
        sx={{
          flex: 1,
          height: 8,
          borderRadius: 8,
          bgcolor: (t) => alpha(t.palette.primary.main, 0.12),
          [`& .bar`]: {
            height: "100%",
            borderRadius: 8,
            bgcolor: "primary.main",
            width: `${Math.max(0, Math.min(100, Number(value) || 0))}%`,
          },
        }}
      >
        <Box className="bar" />
      </Box>
      <Typography variant="caption" sx={{ minWidth: 28 }} noWrap>
        {Math.max(0, Math.min(100, Number(value) || 0))}%
      </Typography>
    </Stack>
  </Box>
);

const makeColumns = (onEdit, onDelete) => [
  {
    field: "action",
    headerName: "",
    width: 140,
    sortable: false,
    filterable: false,
    hideable: false,
    renderCell: (params) => (
      <Stack direction="row">
        <IconButton
          size="small"
          color="primary"
          component={Link}
          to={`/app/matrix/${params.row.matrix_id}`}
          title="View"
        >
          <VisibilityIcon fontSize="small" />
        </IconButton>
        <IconButton
          size="small"
          color="primary"
          onClick={() => onEdit(params.row)}
          title="Edit"
        >
          <DriveFileRenameOutlineOutlinedIcon fontSize="small" />
        </IconButton>
        <TableDeleteRow
          key={`${params.row.id}_Delete`}
          onDelete={() => onDelete(params.row)}
        />
      </Stack>
    ),
  },
  { field: "matrix_id", headerName: "MATRIX ID", minWidth: 120 },
  {
    field: "matrix_name",
    headerName: "MATRIX NAME",
    minWidth: 220,
    flex: 1,
    renderCell: (p) => (
      <Typography
        variant="body2"
        sx={{ color: "info.main" }}
        noWrap
        component={Link}
        to={`/app/trace-matrix/view/${p.row.matrix_id}`}
      >
        <b>{p.row.matrix_name}</b>
      </Typography>
    ),
  },
  { field: "project_id", headerName: "PROJECT ID", minWidth: 120 },
  { field: "project", headerName: "PROJECT", minWidth: 120 },
  {
    field: "spec_doc",
    headerName: "REQUIREMENT DOCUMENT",
    minWidth: 220,
    renderCell: (p) => (
      <Stack direction="row" spacing={0.5} alignItems="center">
        <InfoOutlinedIcon sx={{ fontSize: 14, color: "text.secondary" }} />
        <Typography variant="body2" noWrap>
          {p.row.spec_doc}
        </Typography>
      </Stack>
    ),
  },
  {
    field: "completion",
    headerName: "COMPLETION",
    minWidth: 180,
    renderCell: (p) => <CompletionBar value={p.row.completion} />,
  },
  {
    field: "requirements",
    headerName: "REQUIREMENTS",
    minWidth: 130,
  },
  {
    field: "status",
    headerName: "STATUS",
    minWidth: 140,
    renderCell: (p) => <StatusChip value={p.row.status} />,
  },
  { field: "created_by", headerName: "CREATED BY", minWidth: 160 },
  { field: "created_on", headerName: "CREATED ON", minWidth: 130 },
  { field: "workflow_owner", headerName: "WORKFLOW", minWidth: 160 },
  {
    field: "workflow_status",
    headerName: "WORKFLOW STATUS",
    minWidth: 160,
    renderCell: (p) => <WorkflowChip value={p.row.workflow_status} />,
  },
  { field: "last_modified_on", headerName: "LAST MODIFIED", minWidth: 140 },
  { field: "modified_by", headerName: "MODIFIED BY", minWidth: 130 },
];

function AllTraceabilityMatrix() {
  const database = Data.matrices; // from DataOne.json
  const [tableData, setTableData] = useState(database);

  const handleEdit = (row) => {
    alert(`Edit clicked for Matrix: ${row.matrix_id}`);
  };

  const handleDelete = (row) => {
    if (window.confirm(`Delete ${row.matrix_id}?`)) {
      setTableData((prev) => prev.filter((r) => r.id !== row.id));
    }
  };

  const columns = useMemo(() => makeColumns(handleEdit, handleDelete), []);

  return (
    <>
      <Table data={tableData} columns={columns} />
    </>
  );
}

export default AllTraceabilityMatrix;
