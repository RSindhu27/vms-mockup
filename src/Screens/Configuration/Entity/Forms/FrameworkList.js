import React from "react";
import { Chip } from "@mui/material";
import { Table } from "../../../../Components/Table";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "document_type",
    headerName: "Document Type",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "function_type",
    headerName: "Function Type",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "mandatory",
    headerName: "Mandatory",
    renderCell: (params) => (
      <>
        <Chip
          label={params.row.mandatory ? "Yes" : "No"}
          color={params.row.mandatory ? "success" : "error"}
        />
      </>
    ),
    minWidth: 150,
    flex: 1,
  },
];

function FrameworkList({ data }) {
  return (
    <>
      <Table
        data={data}
        columns={columns}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </>
  );
}

export default FrameworkList;
