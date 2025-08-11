import React, { useState } from "react";
import Data from "./DataFive.json";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { Table } from "../../../../Components/Table";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Business Rule Name",
    renderCell: (params) => (
      <Typography variant="body2" noWrap component={Link} to="#">
        {params.row.name}
      </Typography>
    ),
    minWidth: 150,
    flex: 1,
  },
  {
    field: "framework",
    headerName: "Framework",
    renderCell: (params) => (
      <Typography variant="body2" noWrap>
        {params.row.framework.map((e) => e + ", ")}
      </Typography>
    ),
    minWidth: 150,
    flex: 1,
  },
];

function ViewBusinessRuleList() {
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
      />
    </>
  );
}

export default ViewBusinessRuleList;
