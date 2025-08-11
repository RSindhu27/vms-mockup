import React from "react";
import { IconButton, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import { Table, TableDeleteRow } from "../../../../Components/Table";
import { TabWrapper } from "../../../../Components/Page";
import Data from "./DataOne.json";
import VisibilityIcon from "@mui/icons-material/Visibility";

const columns = [
  {
    field: "edit",
    headerName: "Action",
    width: 120,
    renderCell: (params) => (
      <>
        <Stack direction="row">
          <IconButton size="small" color="info" component={Link} to="#">
            <VisibilityIcon fontSize="small" />
          </IconButton>
          <IconButton size="small" color="primary" component={Link} to="#">
            <DriveFileRenameOutlineOutlinedIcon fontSize="small" />
          </IconButton>
          <TableDeleteRow key={`${params.row.id}_Delete`} onDelete={() => {}} />
        </Stack>
      </>
    ),
    sortable: false,
    filterable: false,
    hideable: false,
  },
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "date",
    headerName: "Date",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "time",
    headerName: "Time",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "login_id",
    headerName: "Initiating User Login Id",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "unique_identifiers",
    headerName: "Unique Identifiers",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "event",
    headerName: "Event",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "field",
    headerName: "Field",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "new_value",
    headerName: "New Value",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "old_value",
    headerName: "Old Value",
    minWidth: 150,
    flex: 1,
  },
];

function Department() {
  return (
    <>
      <TabWrapper>
        <Table data={Data.picklist} columns={columns} />
      </TabWrapper>
    </>
  );
}

export default Department;
