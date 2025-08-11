import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  Chip,
} from "@mui/material";
import { TabWrapper } from "../../../../Components/Page";
import { Table } from "../../../../Components/Table";
import TableFilters from "../../../../Containers/TableFilter";
import Data from "./DataTwo.json";

function ActiveInactive() {
  const [value, setValue] = useState("inactive");

  const handleValue = (event, newType) => {
    setValue(newType);
  };

  return (
    <ToggleButtonGroup
      exclusive
      value={value}
      onChange={handleValue}
      size="small"
    >
      <ToggleButton
        color="secondary"
        value="active"
        sx={{ width: 70, height: 30, lineHeight: 0.75 }}
      >
        Active
      </ToggleButton>
      <ToggleButton
        color="error"
        value="inactive"
        sx={{ width: 90, height: 30, lineHeight: 0.75 }}
      >
        Inactive
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

const columns = [
  {
    field: "action",
    headerName: "Action",
    renderCell: (params) => (
      <>
        <ActiveInactive />
      </>
    ),
    width: 200,
  },
  { field: "id", headerName: "SL NO", width: 90 },
  {
    field: "name",
    headerName: "Entity Name",
    renderCell: (params) => (
      <Typography variant="body2" component={Link} to="#">
        {params.row.name}
      </Typography>
    ),
    minWidth: 150,
    flex: 1,
  },
  {
    field: "entity_no",
    headerName: "Entity No",
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
    field: "category",
    headerName: "Category",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "assessment",
    headerName: "Assessment(Yes/No)",
    renderCell: (params) => (
      <Chip
        size="small"
        label={params.row.assessment ? "Yes" : "No"}
        color={params.row.assessment ? "success" : "error"}
      />
    ),
    minWidth: 90,
    flex: 1,
  },
];

function InactiveList() {
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
        <Table data={tableData} columns={columns} rowHeight={50} />
      </TabWrapper>
    </>
  );
}

export default InactiveList;
