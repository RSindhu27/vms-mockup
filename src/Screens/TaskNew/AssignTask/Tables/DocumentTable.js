import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconButton, Stack, Typography } from "@mui/material";
import { Table } from "../../../../Components/Table";
import Data from "./DataSix.json";
import VisibilityIcon from "@mui/icons-material/Visibility";

const handleColor = (e) => {
  if (e === "Mapped") return "#0DD08B";
  else return "#D32F2F";
};

const columns = [
  {
    field: "edit",
    headerName: "Action",
    width: 80,
    renderCell: (params) => (
      <Stack direction="row">
        <IconButton size="small" color="info" component={Link} to="#">
          <VisibilityIcon fontSize="small" />
        </IconButton>
      </Stack>
    ),
    sortable: false,
    filterable: false,
    hideable: false,
  },
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "table_number",
    headerName: "Table Number",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "column_number",
    headerName: "Column Number",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "header_title",
    headerName: "Header Title",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "description",
    headerName: "Description",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "status",
    headerName: "Status",
    renderCell: (params) => (
      <Typography
        variant="body2"
        color={handleColor(params.row.status)}
        sx={{ textAlign: "right" }}
      >
        {params.row.status}
      </Typography>
    ),
    minWidth: 100,
    flex: 1,
  },
];

function DocumentTable() {
  const dataBase = Data.activities;
  const [tableData, setTableData] = useState(dataBase);

  return (
    <>
      <Table
        data={tableData}
        columns={columns}
        columnVisibilityModel={{
          id: false,
        }}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </>
  );
}

export default DocumentTable;
