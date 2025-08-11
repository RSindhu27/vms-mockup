import React, { useState } from "react";
import {
  Grid,
  IconButton,
  Typography,
  Button,
  Box,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import Data from "./DataOne.json";
import { Table } from "../../../../Components/Table";
import TableFilters from "../../../../Containers/TableFilter";
import { Link } from "react-router-dom";

const columns = [
  {
    field: "tempVersion",
    headerName: "Template Version",
    renderCell: (params) => (
      <Box>
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={0.5}
        >
          <InsertDriveFileIcon
            fontSize="small"
            color={
              params.row.type && params.row.type === "pdf" ? "error" : "info"
            }
          />
          <Typography
            variant="body2"
            component={Link}
            to="#"
            color={
              params.row.type && params.row.type === "pdf"
                ? "error.main"
                : "info.main"
            }
          >
            <b>{params.row.docVersion}</b>
          </Typography>
        </Stack>
      </Box>
    ),
    minWidth: 150,
    flex: 1,
  },
  {
    field: "lifecycleState",
    headerName: "Lifecycle State",
    renderCell: (params) => (
      <Typography
        variant="body2"
        sx={{
          color:
            params.row.lifecycleState === "Draft" ? "draft.main" : "info.main",
        }}
        noWrap
      >
        <b>{params.row.lifecycleState}</b>
      </Typography>
    ),
    minWidth: 120,
    flex: 1,
  },
  {
    field: "controlType",
    headerName: "Control Type",
    renderCell: (params) => (
      <Typography
        variant="body2"
        sx={{
          color:
            params.row.controlType === "Active" ? "success.main" : "error.main",
        }}
        noWrap
      >
        <b>{params.row.controlType}</b>
      </Typography>
    ),
    minWidth: 120,
    flex: 1,
  },
  {
    field: "createdBy",
    headerName: "Created By",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "updatedOn",
    headerName: "Updated On",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "action",
    headerName: "Action",
    renderCell: (params) => (
      <Button
        color="secondary"
        size="small"
        variant="contained"
        disableElevation
      >
        Open
      </Button>
    ),
    minWidth: 150,
    flex: 1,
  },
];

function TemplateHistory({ onClose }) {
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
      {/* header */}
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h5" color="secondary">
            Template History
          </Typography>
        </Grid>
        <Grid item>
          <IconButton size="large" color="error" onClick={onClose}>
            <CloseIcon fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
      {/* Body */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TableFilters
            dataBase={dataBase}
            dataFilter={tableData}
            setData={handleFilter}
          />
          <Table data={tableData} columns={columns} />
        </Grid>
      </Grid>
    </>
  );
}

export default TemplateHistory;
