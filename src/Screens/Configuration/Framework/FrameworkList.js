import React, { useState } from "react";
import Data from "./DataOne.json";
import { Link } from "react-router-dom";
import { IconButton, Stack, Typography } from "@mui/material";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { TabWrapper } from "../../../Components/Page";
import { Table, TableDeleteRow } from "../../../Components/Table";
import TableFilters from "../../../Containers/TableFilter";
import VisibilityIcon from "@mui/icons-material/Visibility";

const handleColor = (e) => {
  if (e === "New") return "#0DD08B";
  else return "#D32F2F";
};

const columns = [
  {
    field: "edit",
    headerName: "",
    width: 140,
    renderCell: (params) => (
      <Stack direction="row">
        <IconButton
          size="small"
          color="info"
          component={Link}
          to="/app/configuration/framework/edit-framework"
        >
          <VisibilityIcon fontSize="small" />
        </IconButton>
        <IconButton
          size="small"
          color="info"
          component={Link}
          to="/app/configuration/framework/edit-framework"
        >
          <InfoOutlinedIcon fontSize="small" />
        </IconButton>
        <IconButton
          size="small"
          color="primary"
          component={Link}
          to="/app/configuration/framework/edit-framework"
        >
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
    headerName: "Framework Name",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "type",
    headerName: "Framework Type",
    renderCell: (params) => (
      <Typography variant="body2" color={handleColor(params.row.type)}>
        {params.row.type}
      </Typography>
    ),
    minWidth: 90,
    flex: 1,
  },
  {
    field: "form",
    headerName: "Framework Form",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "more",
    headerName: "View",
    renderCell: (params) => (
      <Typography
        variant="body2"
        color="info.main"
        component={Link}
        to="/app/configuration/framework/edit-framework"
      >
        more..
      </Typography>
    ),
    minWidth: 90,
    flex: 1,
    headerAlign: "right",
    align: "right",
  },
];

function FrameworkList() {
  const dataBase = Data.checklist;
  const [tableData, setTableData] = useState(dataBase);

  const searchItems = (array, criterion, value) => {
    if (criterion === "all") {
      return array.filter((item) => {
        for (const key in item) {
          if (item.hasOwnProperty(key)) {
            const lowerCaseValue = item[key].toString().toLowerCase();
            if (lowerCaseValue.includes(value.toLowerCase())) {
              return true;
            }
          }
        }
        return false;
      });
    } else
      return array.filter((item) => {
        const lowerCaseCriterion = item[criterion].toString().toLowerCase();
        const lowerCaseValue = value.toLowerCase();

        return lowerCaseCriterion.includes(lowerCaseValue);
      });
  };

  const handleFilter = (column, search) => {
    const searchResults = searchItems(dataBase, column, search);
    setTableData(searchResults);
  };

  return (
    <>
      <TabWrapper>
        <TableFilters
          dataBase={dataBase}
          dataFilter={tableData}
          setData={handleFilter}
        />
        <Table data={tableData} columns={columns} />
      </TabWrapper>
    </>
  );
}

export default FrameworkList;
