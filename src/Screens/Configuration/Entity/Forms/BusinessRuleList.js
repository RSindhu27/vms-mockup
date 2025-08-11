import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconButton, Stack, Typography } from "@mui/material";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import { Table, TableDeleteRow } from "../../../../Components/Table";
import Data from "./DataSix.json";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Business Rule Name",
    renderCell: (params) => (
      <Typography
        variant="body2"
        color="info.main"
        noWrap
        component={Link}
        to="#"
      >
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
  {
    field: "task_dependency",
    headerName: "Task Dependency",
    renderCell: (params) => (
      <>
        {params.row.task_dependency !== "N/A" ? (
          <Typography
            variant="body2"
            noWrap
            color="info.main"
            component={Link}
            to={params.row.task_dependency}
          >
            View Task Dependency
          </Typography>
        ) : (
          <Typography variant="body2" noWrap>
            {params.row.task_dependency}
          </Typography>
        )}
      </>
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
        columnVisibilityModel={{
          id: false,
        }}
      />
    </>
  );
}

export default BusinessRuleList;
