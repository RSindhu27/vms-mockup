import React from "react";
import { FormControlLabel, Switch } from "@mui/material";
import { Table } from "../../../../Components/Table";
import Data from "./DataTwo.json";

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
      <FormControlLabel
        control={<Switch checked={params.row.mandatory} />}
        label={params.row.mandatory ? "Yes" : "No"}
      />
    ),
    minWidth: 150,
    flex: 1,
  },
];

function FrameworkList() {
  return (
    <>
      <Table data={Data.picklist} columns={columns} />
    </>
  );
}

export default FrameworkList;
