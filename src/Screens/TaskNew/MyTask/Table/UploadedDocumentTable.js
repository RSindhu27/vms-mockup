import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { Table } from "../../../../Components/Table";
import Data from "./DataFive.json";

const columns = [
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
    field: "file_type",
    headerName: "File Type",
    renderCell: (params) => (
      <Typography variant="body2" color="info.main">
        {params.row.file_type}
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
];

function UploadedDocumentTable() {
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
      />
    </>
  );
}

export default UploadedDocumentTable;
