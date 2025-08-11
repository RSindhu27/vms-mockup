import { useState } from "react";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import { Table, TableDeleteRow } from "../../../../Components/Table";
import { Box, Chip, IconButton, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Data from "./DataOne.json";

const columns = [
  {
    field: "edit",
    headerName: "",
    width: 140,
    renderCell: (params) => (
      <Stack direction="row">
        <IconButton
          size="small"
          color="primary"
          component={Link}
          to="/app/document/document-vms/edit-document"
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
    headerName: "Document Number",
    renderCell: (params) => (
      <Box>
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={0.5}
        >
          <InsertDriveFileIcon fontSize="small" color="info" />
          <Typography
            variant="body2"
            component={Link}
            to="/app/document/document-vms/document-view"
            color="info.main"
          >
            <b>{params.row.name}</b>
          </Typography>
        </Stack>
        <Typography
          variant="caption"
          component="p"
          noWrap
          color="textSecondary"
        >
          Attached On {params.row.time}
        </Typography>
      </Box>
    ),
    minWidth: 200,
    flex: 1,
  },
  {
    field: "title",
    headerName: "Title",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "description",
    headerName: "Description",
    minWidth: 100,
    flex: 1,
  },
];

function AttachmentTable() {
  const dataBase = Data.picklist;

  const [tableData, setTableData] = useState(dataBase);

  return (
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
  );
}

export default AttachmentTable;
