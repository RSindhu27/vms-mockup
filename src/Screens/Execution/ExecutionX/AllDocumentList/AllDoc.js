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
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import CloseIcon from "@mui/icons-material/Close";
import { Table, TableDeleteRow } from "../../../../Components/Table";
import InitiateDependency from "./../InitiateDependency";
import Data from "./DataOne.json";

const handleColor = (e) => {
  if (e === "approved") return "success";
  if (e === "re-execute") return "info";
  if (e === "suspended") return "error";
  if (e === "in-progress") return "warning";
  else return "warning";
};

const handleText = (e) => {
  if (e === "approved") return "Approved";
  if (e === "suspended") return "Suspended";
  if (e === "re-execute") return "Re-Execute";
  if (e === "in-progress") return "In-Progress";
  else return "Nil";
};

const handleAction = (e) => {
  if (e === "required") return <InitiateDependency />;
  else
    return (
      <Typography variant="body2" color="textSecondary" noWrap>
        <b>No Action Required</b>
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
          to="/app/execution/execution/edit-execution"
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
    field: "action",
    headerName: "Action",
    renderCell: (params) => handleAction(params.row.action),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "exe_no",
    headerName: "Exe-No",
    renderCell: (params) => (
      <Typography
        variant="body2"
        sx={{ color: "info.main" }}
        noWrap
        component={Link}
        to="#"
      >
        <b>{params.row.exe_no}</b>
      </Typography>
    ),
    minWidth: 120,
    flex: 1,
  },
  {
    field: "name",
    headerName: "Document Number",
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
          <Typography variant="body2" component={Link} to="#" color="info.main">
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
    field: "status",
    headerName: "Status",
    renderCell: (params) => (
      <Box
        sx={{
          border: 1,
          borderStyle: "solid",
          paddingY: 0.5,
          paddingX: 1,
          borderRadius: 4,
          color: `${handleColor(params.row.status)}.main`,
          bgcolor: `${handleColor(params.row.status)}.extraLight`,
          borderColor: `${handleColor(params.row.status)}.main`,
          maxWidth: 100,
        }}
      >
        <Stack direction="row" spacing={0.5} alignItems="center">
          <DescriptionIcon fontSize="small" />
          <Typography variant="body2" noWrap>
            {handleText(params.row.status)}
          </Typography>
        </Stack>
      </Box>
    ),
    minWidth: 140,
    flex: 1,
  },
  {
    field: "in_workflow",
    headerName: "in_workflow",
    renderCell: (params) => (
      <Typography
        variant="body2"
        sx={{
          color: "success.main",
        }}
        noWrap
      >
        <b>{params.row.in_workflow}</b>
      </Typography>
    ),
    minWidth: 120,
    flex: 1,
  },
  {
    field: "details",
    headerName: "Task Details",
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

function AllDoc() {
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
          <Table data={tableData} columns={columns} getRowHeight={() => 80} />
        </Grid>
      </Grid>
    </>
  );
}

export default AllDoc;
