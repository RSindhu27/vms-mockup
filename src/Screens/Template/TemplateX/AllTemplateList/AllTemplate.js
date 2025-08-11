import React, { useState } from "react";
import {
  Box,
  Button,
  Chip,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import DescriptionIcon from "@mui/icons-material/Description";
import EditNoteIcon from "@mui/icons-material/EditNote";
import ApprovalIcon from "@mui/icons-material/Approval";
import InfoIcon from "@mui/icons-material/Info";
import TaskIcon from "@mui/icons-material/Task";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import LogoutIcon from "@mui/icons-material/Logout";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import { Table, TableDeleteRow } from "../../../../Components/Table";
import AddWorkflow from "../AddWorkflow";
import Data from "./DataOne.json";

const handleLifecycleIcon = (e) => {
  if (e === "effective") return <TaskIcon fontSize="small" />;
  if (e === "approved_and_pending_release")
    return <ApprovalIcon fontSize="small" />;
  if (e === "draft") return <EditNoteIcon fontSize="small" />;
  if (e === "external") return <LogoutIcon fontSize="small" />;
  if (e === "obsolete") return <DescriptionIcon fontSize="small" />;
  if (e === "migrated_documents") return <SendIcon fontSize="small" />;
  else return <InfoIcon />;
};

const handleLifecycleColor = (e) => {
  if (e === "effective") return "primary";
  if (e === "approved_and_pending_release") return "success";
  if (e === "draft") return "draft";
  if (e === "external") return "external";
  if (e === "obsolete") return "error";
  if (e === "migrated_documents") return "warning";
  else return "info";
};

const handleLifecycleText = (e) => {
  if (e === "effective") return "effective";
  if (e === "approved_and_pending_release") return "Approved & Pending Release";
  if (e === "draft") return "Draft";
  if (e === "external") return "External";
  if (e === "obsolete") return "Obsolete";
  if (e === "migrated_documents") return "Migrated Documents";
  else return "Nil";
};

const handleWorkflow = (e) => {
  if (e === "assigned")
    return (
      <Typography variant="body2" sx={{ color: "success.main" }} noWrap>
        <b>Assigned</b>
      </Typography>
    );
  if (e === "nil") return <AddWorkflow />;
  if (e === "approval_pending")
    return (
      <Typography variant="body2" sx={{ color: "error.main" }} noWrap>
        <b>Approval Pending</b>
      </Typography>
    );
  if (e === "expired")
    return (
      <Typography variant="body2" sx={{ color: "error.main" }} noWrap>
        <b>Expired</b>
      </Typography>
    );
};

const columns = [
  {
    field: "edit",
    headerName: "",
    width: 100,
    renderCell: (params) => (
      <Stack direction="row">
        <IconButton
          size="small"
          color="primary"
          component={Link}
          to="/app/template/template/edit-template"
        >
          <DriveFileRenameOutlineOutlinedIcon fontSize="small" />
        </IconButton>
        <TableDeleteRow key={`${params.row.id}_Delete`} onDelete={() => {}} />
        <IconButton size="small" color="info">
          <CloudDownloadOutlinedIcon fontSize="small" />
        </IconButton>
      </Stack>
    ),
    sortable: false,
    filterable: false,
    hideable: false,
  },
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "name",
    headerName: "Template Number",
    renderCell: (params) => (
      <Box>
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={0.5}
        >
          <InsertDriveFileIcon
            fontSize="small"
            color={
              params.row.type && params.row.type === "pdf" ? "error" : "info"
            }
          />
          <Typography
            variant="body2"
            component={Link}
            to="/app/template/template/template-view"
            color="info.main"
          >
            <b>{params.row.name}</b>
          </Typography>
          {params.row.new && <Chip size="small" label="new" color="info" />}
        </Stack>
        <Typography variant="caption" component="p" noWrap>
          Created On {params.row.created_on}
        </Typography>
        <Typography variant="caption" component="p" noWrap>
          {params.row.created_by}
        </Typography>
      </Box>
    ),
    minWidth: 180,
    flex: 1,
  },
  {
    field: "title",
    headerName: "Title",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "lifecycle_state",
    headerName: "Status",
    renderCell: (params) => (
      <Box
        sx={{
          border: 1,
          borderStyle: "solid",
          paddingY: 0.5,
          paddingX: 1,
          borderRadius: 4,
          color: `${handleLifecycleColor(params.row.lifecycle_state)}.main`,
          bgcolor: `${handleLifecycleColor(
            params.row.lifecycle_state
          )}.extraLight`,
          borderColor: `${handleLifecycleColor(
            params.row.lifecycle_state
          )}.main`,
          maxWidth: 100,
        }}
      >
        <Stack direction="row" spacing={0.5} alignItems="center">
          {handleLifecycleIcon(params.row.lifecycle_state)}
          <Typography variant="body2" noWrap>
            {handleLifecycleText(params.row.lifecycle_state)}
          </Typography>
        </Stack>
      </Box>
    ),
    minWidth: 140,
    flex: 1,
  },
  {
    field: "control_type",
    headerName: "Control Type",
    renderCell: (params) => (
      <Typography
        variant="body2"
        sx={{
          color:
            params.row.control_type === "active"
              ? "success.main"
              : "error.main",
        }}
        noWrap
      >
        <b>{params.row.control_type === "active" ? "Active" : "Inactive"}</b>
      </Typography>
    ),
    minWidth: 120,
    flex: 1,
  },
  {
    field: "in_workflow",
    headerName: "Status",
    renderCell: (params) => handleWorkflow(params.row.in_workflow),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "workflow_no",
    headerName: "Workflow No:",
    renderCell: (params) => (
      <Typography variant="body2" noWrap>
        <b>{params.row.workflow_no}</b>
      </Typography>
    ),
    minWidth: 120,
    flex: 1,
  },
  {
    field: "version",
    headerName: "version",
    renderCell: (params) => (
      <Typography
        variant="body2"
        sx={{ color: "info.main" }}
        noWrap
        component={Link}
        to="#"
      >
        <b>{params.row.version}</b>
      </Typography>
    ),
    minWidth: 120,
    flex: 1,
  },
  {
    field: "member_of",
    headerName: "Member Of",
    renderCell: (params) => (
      <Typography variant="body2" noWrap>
        <b>{params.row.member_of}</b>
      </Typography>
    ),
    minWidth: 120,
    flex: 1,
  },
  {
    field: "details",
    headerName: "Details",
    renderCell: (params) => (
      <Typography
        variant="body2"
        sx={{ color: "info.main" }}
        noWrap
        component={Link}
        to="#"
      >
        <b>View</b>
      </Typography>
    ),
    minWidth: 120,
    flex: 1,
  },
];

function AllTemplate() {
  const dataBase = Data.picklist;
  const [tableData, setTableData] = useState(dataBase);

  const [shortType, setShortType] = useState(null);
  const [shortAnchorEl, setShortAnchorEl] = useState(null);

  const [lifecycleType, setLifecycleType] = useState(null);
  const [lifecycleAnchorEl, setLifecycleAnchorEl] = useState(null);

  const openShort = Boolean(shortAnchorEl);
  const openLifecycle = Boolean(lifecycleAnchorEl);

  const handleShort = (event) => {
    setShortAnchorEl(event.currentTarget);
  };

  const handleLifecycle = (event) => {
    setLifecycleAnchorEl(event.currentTarget);
  };

  const handleShortClose = (e) => {
    if (e === "date_up") {
      setShortType("Date Up");
    } else if (e === "date_down") {
      setShortType("Date Down");
    } else setShortType(shortType);
    setShortAnchorEl(null);
  };

  const handleLifecycleClose = (e) => {
    if (e === "all") {
      setLifecycleType("All");
    } else if (e === "lc_1") {
      setLifecycleType("Lifecycle 1");
    } else if (e === "lc_2") {
      setLifecycleType("Lifecycle 2");
    } else setLifecycleType(lifecycleType);
    setLifecycleAnchorEl(null);
  };

  const handleClear = () => {
    setShortType(null);
    setLifecycleType(null);
  };

  return (
    <>
      <Grid container spacing={1} justifyContent="left" alignItems="center">
        <Grid item>
          <Button
            startIcon={<InsertDriveFileIcon />}
            color="info"
            variant="outlined"
          >
            WORD
          </Button>
        </Grid>
        <Grid item>
          <Button
            startIcon={<InsertDriveFileIcon />}
            color="error"
            variant="outlined"
          >
            PDF
          </Button>
        </Grid>
        <Grid item>
          <Button
            id="short_document_list"
            onClick={handleShort}
            color="secondary"
          >
            Short By: {shortType ? shortType : "N/A"}
          </Button>
          <Menu
            id="short_document_list_menu"
            anchorEl={shortAnchorEl}
            open={openShort}
            onClose={handleShortClose}
          >
            <MenuItem onClick={() => handleShortClose("date_up")}>
              Date Up
            </MenuItem>
            <MenuItem onClick={() => handleShortClose("date_down")}>
              Date Down
            </MenuItem>
          </Menu>
        </Grid>
        <Grid item>
          <Button
            id="lifecycle_document_list"
            onClick={handleLifecycle}
            color="secondary"
          >
            Lifecycle: {lifecycleType ? lifecycleType : "N/A"}
          </Button>
          <Menu
            id="lifecycle_document_list_menu"
            anchorEl={lifecycleAnchorEl}
            open={openLifecycle}
            onClose={handleLifecycleClose}
          >
            <MenuItem onClick={() => handleLifecycleClose("all")}>All</MenuItem>
            <MenuItem onClick={() => handleLifecycleClose("lc_1")}>
              Lifecycle 1
            </MenuItem>
            <MenuItem onClick={() => handleLifecycleClose("lc_2")}>
              Lifecycle 2
            </MenuItem>
          </Menu>
        </Grid>
        {shortType || lifecycleType ? (
          <Grid item>
            <Button
              color="info"
              onClick={() => handleClear()}
              startIcon={<CloseIcon />}
            >
              Clear All Filter
            </Button>
          </Grid>
        ) : (
          ""
        )}
        <Grid item xs={12}>
          <Table
            data={tableData}
            columns={columns}
            getRowHeight={() => 80}
            columnVisibilityModel={{
              control_type: false,
              workflow_no: false,
              member_of: false,
            }}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Grid>
      </Grid>
    </>
  );
}

export default AllTemplate;
