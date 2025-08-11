import React, { useState } from "react";
import { IconButton, Stack, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Table, TableDeleteRow } from "../../../Components/Table";
import { TabWrapper } from "../../../Components/Page";
import TableFilters from "../../../Containers/TableFilter";
import Data from "./DataOne.json";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";

const columns = [
  {
    field: "action",
    headerName: "",
    width: 150,
    renderCell: (params) => (
      <Stack direction="row">
        <IconButton
          size="small"
          color="info"
          component={Link}
          to="/app/workflow/workflow/edit-workflow"
        >
          <VisibilityIcon fontSize="small" />
        </IconButton>
        <IconButton
          size="small"
          color="info"
          component={Link}
          to="/app/workflow/workflow/edit-workflow"
        >
          <InfoOutlinedIcon fontSize="small" />
        </IconButton>
        <IconButton
          size="small"
          color="primary"
          component={Link}
          to="/app/workflow/workflow/edit-workflow"
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
    headerName: "Name",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "description",
    headerName: "Description",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "status",
    headerName: "Status",
    renderCell: (params) => (
      <Typography
        variant="body2"
        noWrap
        sx={{
          color:
            params.row.status === "Effective" ? "info.main" : "secondary.main",
        }}
      >
        <b>{params.row.status}</b>
      </Typography>
    ),
    minWidth: 150,
    flex: 1,
  },
  {
    field: "current_state",
    headerName: "Current State",
    renderCell: (params) => (
      <Typography
        variant="body2"
        noWrap
        sx={{
          color:
            params.row.current_state === "Approved"
              ? "secondary.main"
              : "info.main",
        }}
      >
        <b>{params.row.current_state}</b>
      </Typography>
    ),
    minWidth: 150,
    flex: 1,
  },
  {
    field: "document",
    headerName: "Document",
    renderCell: (params) => (
      <Typography
        variant="body2"
        noWrap
        component={Link}
        to="#"
        sx={{
          color: "info.main",
        }}
      >
        <b>View</b>
      </Typography>
    ),
    minWidth: 150,
    flex: 1,
  },
];

function WorkflowList() {
  const dataBase = Data.picklist;
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

export default WorkflowList;
