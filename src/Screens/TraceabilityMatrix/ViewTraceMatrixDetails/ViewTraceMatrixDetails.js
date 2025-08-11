import React, { useMemo, useState } from "react";
import { useParams, Link as RouterLink } from "react-router-dom";
import {
  Box,
  Button,
  Chip,
  Grid,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import SearchIcon from "@mui/icons-material/Search";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";

import { Table } from "../../../Components/Table";
import Data from "./DataOne.json";

/** ---------- helpers ---------- */
const StatusChip = ({ value }) => {
  const map = {
    Pass: { color: "success" },
    Pending: { color: "warning" },
    Fail: { color: "error" },
    "In Progress": { color: "info" },
    "N/A": { color: "default" },
  };
  const m = map[value] || { color: "default" };
  return <Chip size="small" label={value} color={m.color} variant="filled" />;
};

const DiscrepancyCell = ({ row }) =>
  row.discrepancy ? (
    <Chip
      size="small"
      color="error"
      variant="outlined"
      label={`DIS-${String(row.id).padStart(3, "0")}`}
    />
  ) : (
    <Typography variant="body2" color="text.secondary">
      -
    </Typography>
  );

/** ---------- columns (no Actions) ---------- */
const makeColumns = () => [
  {
    field: "urs_id",
    headerName: "URS ID",
    minWidth: 120,
    renderCell: (p) => (
      <Stack
        direction="row"
        spacing={0.75}
        alignItems="center"
        sx={{ py: 0.5 }}
      >
        {p.row.warning && (
          <WarningAmberRoundedIcon
            sx={{ color: "warning.main", fontSize: 16 }}
          />
        )}
        <Typography variant="body2">{p.row.urs_id}</Typography>
      </Stack>
    ),
  },
  {
    field: "urs_desc",
    headerName: "URS DESCRIPTION",
    minWidth: 280,
    flex: 1,
    renderCell: (p) => (
      <Typography
        variant="body2"
        sx={{
          pr: 2,
          py: 0.5,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
        title={p.row.urs_desc}
      >
        {p.row.urs_desc}
      </Typography>
    ),
  },
  {
    field: "frs",
    headerName: "FRS ID",
    minWidth: 180,
    renderCell: (p) => (
      <Stack spacing={0.25} sx={{ py: 0.5 }}>
        <Typography variant="body2" sx={{ color: "info.main" }}>
          {p.row.frs?.id}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {p.row.frs?.note}
        </Typography>
      </Stack>
    ),
  },
  {
    field: "fqa",
    headerName: "FQA ID",
    minWidth: 180,
    renderCell: (p) => (
      <Stack spacing={0.25} sx={{ py: 0.5 }}>
        <Typography variant="body2" sx={{ color: "info.main" }}>
          {p.row.fqa?.id}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {p.row.fqa?.note}
        </Typography>
      </Stack>
    ),
  },
  {
    field: "iq",
    headerName: "IQ ID",
    minWidth: 180,
    renderCell: (p) => {
      const isDisc = !!p.row.discrepancy;
      const idNode = (
        <Typography
          variant="body2"
          sx={{
            color: isDisc ? "error.main" : "info.main",
            textDecoration: isDisc ? "underline" : "none",
          }}
        >
          {p.row.iq?.id}
        </Typography>
      );

      return (
        <Stack spacing={0.25} sx={{ py: 0.5 }}>
          {/* Only IQ with discrepancy is clickable */}
          {isDisc ? (
            <RouterLink to="#" style={{ textDecoration: "none" }}>
              {idNode}
            </RouterLink>
          ) : (
            idNode
          )}
          <Typography variant="caption" color="text.secondary">
            {p.row.iq?.note}
          </Typography>
        </Stack>
      );
    },
  },
  {
    field: "status",
    headerName: "STATUS",
    minWidth: 140,
    renderCell: (p) => (
      <Box sx={{ py: 0.5 }}>
        <StatusChip value={p.row.status} />
      </Box>
    ),
  },
  {
    field: "discrepancy",
    headerName: "DISCREPANCY",
    minWidth: 150,
    renderCell: (p) => (
      <Box sx={{ py: 0.5 }}>
        <DiscrepancyCell row={p.row} />
      </Box>
    ),
  },
  {
    field: "comments",
    headerName: "COMMENTS",
    minWidth: 260,
    flex: 1,
    renderCell: (p) => (
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          py: 0.5,
          gap: 1,
        }}
      >
        <Typography
          variant="body2"
          sx={{
            flex: 1,
            minWidth: 0,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
          title={p.row.comments}
        >
          {p.row.comments}
        </Typography>
        {/* Right-aligned, vertically consistent edit icon */}
        <IconButton
          size="small"
          color="primary"
          aria-label={`Edit comment for ${p.row.urs_id}`}
          onClick={() => alert(`Edit comment for ${p.row.urs_id}`)}
          sx={{ ml: "auto" }}
        >
          <DriveFileRenameOutlineOutlinedIcon fontSize="small" />
        </IconButton>
      </Box>
    ),
  },
];

/** ---------- page ---------- */
function ViewTraceMatrixDetails() {
  const { matrix_id } = useParams();
  const details =
    (Data.matrixDetails && Data.matrixDetails[matrix_id]) ||
    (Data.matrixDetails && Data.matrixDetails["TM-0001"]);

  const [query, setQuery] = useState("");
  const [filterBy, setFilterBy] = useState("all"); // all | urs | frs | iq
  const [statusFilter, setStatusFilter] = useState("all");
  const [groups, setGroups] = useState(details?.groups || []);

  const columns = useMemo(() => makeColumns(), []);

  const filteredGroups = useMemo(() => {
    const q = query.trim().toLowerCase();
    return groups.map((g) => {
      let rows = g.rows;
      if (q) {
        rows = rows.filter((r) => {
          const hay = {
            all: `${r.urs_id} ${r.urs_desc} ${r.frs?.id} ${r.fqa?.id} ${r.iq?.id}`.toLowerCase(),
            urs: `${r.urs_id} ${r.urs_desc}`.toLowerCase(),
            frs: `${r.frs?.id} ${r.frs?.note}`.toLowerCase(),
            iq: `${r.iq?.id} ${r.iq?.note}`.toLowerCase(),
          };
          return hay[filterBy].includes(q);
        });
      }
      if (statusFilter !== "all") {
        rows = rows.filter((r) => r.status === statusFilter);
      }
      return { ...g, rows };
    });
  }, [groups, query, filterBy, statusFilter]);

  const handleAddManualRow = () => {
    setGroups((prev) => {
      if (!prev.length) return prev;
      const first = prev[0];
      const newRow = {
        id: Date.now(),
        warning: false,
        urs_id: `URS-${Math.floor(Math.random() * 900 + 100)}`,
        urs_desc: "Manual row — edit to update details.",
        frs: { id: "FRS-NEW", note: "—" },
        fqa: { id: "FQA-NEW", note: "—" },
        iq: { id: "IQ-NEW", note: "—" },
        status: "Pending",
        discrepancy: false,
        comments: "-",
      };
      return [{ ...first, rows: [newRow, ...first.rows] }, ...prev.slice(1)];
    });
  };

  const handleAddWorkflow = () =>
    alert("Open workflow assignment drawer… (stub)");
  const handleExport = () => {
    console.log("Export payload:", groups);
    alert("Exported selection (see console).");
  };

  if (!details) {
    return (
      <Box p={2}>
        <Typography variant="h6">Trace Matrix not found</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 2 }}>
      {/* header */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 1 }}
      >
        <Typography variant="h6" color="success.main">
          {details.title} – {matrix_id || "TM-0001"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {details.project}
        </Typography>
      </Stack>

      {/* toolbar */}
      <Paper variant="outlined" sx={{ p: 1.5, borderRadius: 2, mb: 2 }}>
        <Grid container spacing={1.5} alignItems="center">
          <Grid item xs={12} md>
            <TextField
              fullWidth
              size="small"
              placeholder="Search URS / FRS / IQ …"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <SearchIcon
                    fontSize="small"
                    sx={{ mr: 1, color: "text.secondary" }}
                  />
                ),
              }}
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <TextField
              select
              fullWidth
              size="small"
              label="Select Filter By"
              value={filterBy}
              onChange={(e) => setFilterBy(e.target.value)}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="urs">URS</MenuItem>
              <MenuItem value="frs">FRS</MenuItem>
              <MenuItem value="iq">IQ</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <TextField
              select
              fullWidth
              size="small"
              label="Select Status"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="Pending">Pending</MenuItem>
              <MenuItem value="Pass">Pass</MenuItem>
              <MenuItem value="Fail">Fail</MenuItem>
              <MenuItem value="In Progress">In Progress</MenuItem>
              <MenuItem value="N/A">N/A</MenuItem>
            </TextField>
          </Grid>
        </Grid>
      </Paper>

      {/* groups */}
      <Stack spacing={2}>
        {filteredGroups.map((group) => (
          <Paper
            key={group.spec_doc_id}
            variant="outlined"
            sx={{ p: 1.25, borderRadius: 2 }}
          >
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{ px: 0.5, pb: 0.5 }}
            >
              <Typography variant="subtitle2">{group.spec_doc_id}</Typography>
            </Stack>
            <Table
              data={group.rows}
              columns={columns}
              // in case your Table supports rowHeight/size props
              rowHeight={52}
            />
          </Paper>
        ))}
      </Stack>

      {/* footer buttons */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "stretch", sm: "center" }}
        spacing={1.5}
        sx={{ mt: 2 }}
      >
        <Stack direction="row" spacing={1}>
          <Button
            variant="contained"
            color="success"
            startIcon={<AddOutlinedIcon />}
            onClick={handleAddManualRow}
          >
            Add Manual Row
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={handleAddWorkflow}
          >
            Add Workflow
          </Button>
        </Stack>
        <Button
          variant="contained"
          color="info"
          startIcon={<FileDownloadOutlinedIcon />}
          onClick={handleExport}
        >
          Export to Excel
        </Button>
      </Stack>
    </Box>
  );
}

export default ViewTraceMatrixDetails;
