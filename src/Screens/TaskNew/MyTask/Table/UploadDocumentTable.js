import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { Table, TableDeleteRow } from "../../../../Components/Table";
import Data from "./DataFour.json";

const columns = [
  {
    field: "edit",
    headerName: "Action",
    width: 80,
    renderCell: (params) => <TableDeleteRow />,
    sortable: false,
    filterable: false,
    hideable: false,
  },
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "status",
    headerName: "Status",
    renderCell: (params) => (
      <Typography
        variant="body2"
        component={Link}
        to={params.row.link}
        color="info.main"
      >
        {params.row.name}
      </Typography>
    ),
    minWidth: 100,
    flex: 1,
  },
  {
    field: "upload_from",
    headerName: "Upload From",
    renderCell: (params) => (
      <Typography variant="body2" color="info.main">
        {params.row.upload_from}
      </Typography>
    ),
    minWidth: 100,
    flex: 1,
  },
  {
    field: "table_number",
    headerName: "Table Number",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "table_row",
    headerName: "Row",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "table_column",
    headerName: "Column",
    minWidth: 100,
    flex: 1,
  },
];

function UploadDocumentTable() {
  const dataBase = Data.picklist;
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

export default UploadDocumentTable;
