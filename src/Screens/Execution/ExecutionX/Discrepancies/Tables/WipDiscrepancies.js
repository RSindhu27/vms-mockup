import React, { useState } from "react";
import Data from "./DataOne.json";
import { Link } from "react-router-dom";
import { Checkbox, Stack, Typography } from "@mui/material";
import { TabWrapper } from "../../../../../Components/Page";
import { Table } from "../../../../../Components/Table";
import TableFilters from "../../../../../Containers/TableFilter";
import ViewDiscrepancy from "./ViewDiscrepancy";
import Cancel from "./Cancel";
import Initiate from "./Initiate";

const handleStatusColor = (e) => {
  if (e === "initiated") return "#4081E9";
  if (e === "in-progress") return "#F6B443";
  if (e === "open") return "#AE1AE5";
  else return "#0ECA78";
};

const handleStatusText = (e) => {
  if (e === "initiated") return "Initiated";
  if (e === "in-progress") return "In-Progress";
  if (e === "open") return "Open";
  else return "completed";
};

const handleDecisionColor = (e) => {
  if (e === "no-impact-approval") return "#0ECA78";
  if (e === "re-execute") return "#F51B48";
  if (e === "defer-discrepancy") return "#0ECA78";
  if (e === "more") return "#0099FF";
  else return "#ABBCCA";
};

const handleDecisionText = (e) => {
  if (e === "no-impact-approval") return "No Impact Approval";
  if (e === "re-execute") return "Re-Execute";
  if (e === "defer-discrepancy") return "Defer Discrepancy";
  if (e === "more") return "More Information Required";
  else return "N/A";
};

const columns = [
  {
    field: "edit",
    headerName: "",
    width: 180,
    renderCell: (params) => (
      <Stack direction="row" alignItems="center" spacing={2}>
        <ViewDiscrepancy />
        <Checkbox />
        {params.row.status === "initiated" && <Cancel />}
        {params.row.status === "open" && <Initiate />}
      </Stack>
    ),
    sortable: false,
    filterable: false,
    hideable: false,
  },
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "no",
    headerName: "No",
    renderCell: (params) => (
      <Typography variant="body2" color="info.main">
        {params.row.no}
      </Typography>
    ),
    minWidth: 150,
    flex: 1,
  },
  {
    field: "table",
    headerName: "Table",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "row",
    headerName: "Row",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "column",
    headerName: "Column",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "header_title",
    headerName: "Header Title",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "discrepancies",
    headerName: "Discrepancies",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "status",
    headerName: "Status",
    renderCell: (params) => (
      <Typography variant="body2" color={handleStatusColor(params.row.status)}>
        {handleStatusText(params.row.status)}
      </Typography>
    ),
    minWidth: 150,
    flex: 1,
  },
];

function WipDiscrepancies() {
  const dataBase = Data.activities;
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
        <Table
          data={tableData}
          columns={columns}
          columnVisibilityModel={{
            id: false,
          }}
        />
      </TabWrapper>
    </>
  );
}

export default WipDiscrepancies;
