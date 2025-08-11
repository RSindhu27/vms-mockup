import React, { useState } from "react";
import { IconButton, Stack, Typography, Button, Box } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Table, TableDeleteRow } from "../../../Components/Table";
import { TabWrapper } from "../../../Components/Page";
import TableFilters from "../../../Containers/TableFilter";
import Data from "./DataOne.json";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";

const handleWorkflow = (e) => {
  if (e === "assigned")
    return (
      <Typography variant="body2" sx={{ color: "success.main" }} noWrap>
        <b>Assigned</b>
      </Typography>
    );
  if (e === "approval_pending")
    return (
      <Typography variant="body2" sx={{ color: "warning.main" }} noWrap>
        <b>Approval Pending</b>
      </Typography>
    );
  if (e === "expired")
    return (
      <Typography variant="body2" sx={{ color: "error.main" }} noWrap>
        <b>Expired</b>
      </Typography>
    );
  if (e === "nil")
    return (
      <Button variant="contained" color="info" size="small">
        Add Workflow
      </Button>
    );
  return (
    <Typography variant="body2" color="textSecondary" noWrap>
      <b>{e}</b>
    </Typography>
  );
};

// Dummy handlers for edit and delete
const handleEdit = (row) => {
  // Implement edit logic here
  alert(`Edit clicked for ID: ${row.id}`);
};

const handleDelete = (row) => {
  // Implement delete logic here
  alert(`Delete clicked for ID: ${row.id}`);
};

const columns = [
  {
    field: "action",
    headerName: "",
    width: 140,
    renderCell: (params) => (
      <Stack direction="row">
        <IconButton
          size="small"
          color="primary"
          onClick={() => handleEdit(params.row)}
        >
          <DriveFileRenameOutlineOutlinedIcon fontSize="small" />
        </IconButton>
        <TableDeleteRow
          key={`${params.row.id}_Delete`}
          onDelete={() => handleDelete(params.row)}
        />
      </Stack>
    ),
    sortable: false,
    filterable: false,
    hideable: false,
  },
  { field: "id", headerName: "SL NO:", width: 80 },
  {
    field: "inherit_from",
    headerName: "BIND FROM",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "inherit_to",
    headerName: "BIND TO",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "object_type_name",
    headerName: "OBJECT TYPE NO.",
    renderCell: (params) => (
      <Typography
        variant="body2"
        sx={{ color: "info.main" }}
        noWrap
        component={params.row.object_type_name === "REVIEWER" ? "span" : Link}
        to={
          params.row.object_type_name === "REVIEWER"
            ? undefined
            : "/app/binding/view-object"
        }
      >
        <b>{params.row.object_type_name}</b>
      </Typography>
    ),
    minWidth: 240,
    flex: 1,
  },
  {
    field: "object_type",
    headerName: "OBJECT TYPE",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "status",
    headerName: "Status",
    renderCell: (params) => handleWorkflow(params.row.status),
    minWidth: 150,
    flex: 1,
  },
  {
    field: "in_workflow",
    headerName: "Workflow Status",
    renderCell: (params) => handleWorkflow(params.row.in_workflow),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "more",
    headerName: "",
    renderCell: (params) => (
      <Typography
        variant="body2"
        noWrap
        component={Link}
        to="/app/binding/view-details"
        sx={{
          color: "info.main",
          textDecoration: "underline",
        }}
      >
        <b>View Details</b>
      </Typography>
    ),
    minWidth: 150,
    flex: 1,
  },
];

function AllBinding() {
  const dataBase = Data.picklist;
  const [tableData, setTableData] = useState(dataBase);

  // Dummy handlers for edit and delete
  const handleEdit = (row) => {
    // Implement edit logic here
    alert(`Edit clicked for ID: ${row.id}`);
  };

  const handleDelete = (row) => {
    // Implement delete logic here
    alert(`Delete clicked for ID: ${row.id}`);
  };

  return (
    <>
      <Table data={tableData} columns={columns} />
    </>
  );
}

export default AllBinding;
