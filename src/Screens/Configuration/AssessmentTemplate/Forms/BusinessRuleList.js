import React, { useState } from "react";
import Data from "./DataFive.json";
import { Link } from "react-router-dom";
import { IconButton, Stack, Typography } from "@mui/material";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import { Table, TableDeleteRow } from "../../../../Components/Table";

const columns = [
  {
    field: "edit",
    headerName: "",
    width: 80,
    renderCell: (params) => (
      <Stack direction="row">
        <IconButton size="small" color="primary" component={Link} to="#">
          <DriveFileRenameOutlineOutlinedIcon fontSize="small" />
        </IconButton>
        <TableDeleteRow key={`${params.row.id}_Delete`} onDelete={() => {}} />
      </Stack>
    ),
    sortable: false,
    filterable: false,
    hideable: false,
  },
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Business Rule Name",
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

function BusinessRuleList() {
  const dataBase = Data.activities;
  const [tableData, setTableData] = useState(dataBase);

  return (
    <>
      <Table
        data={tableData}
        columns={columns}
        rowHeight={60}
        columnVisibilityModel={{
          id: false,
        }}
      />
    </>
  );
}

export default BusinessRuleList;
