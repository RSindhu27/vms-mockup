import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  Chip,
} from "@mui/material";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { TabWrapper } from "../../../../Components/Page";
import { Table, TableDeleteRow } from "../../../../Components/Table";
import TableFilters from "../../../../Containers/TableFilter";
import Data from "./DataTwo.json";

function ActiveInactive() {
  const [value, setValue] = useState("active");

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
    field: "edit",
    headerName: "",
    width: 110,
    renderCell: (params) => (
      <Stack direction="row">
        <IconButton
          size="small"
          color="info"
          component={Link}
          to="/app/configuration/entity/edit-entity"
        >
          <VisibilityIcon fontSize="small" />
        </IconButton>

        <IconButton
          size="small"
          color="primary"
          component={Link}
          to="/app/configuration/entity/edit-entity"
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
  { field: "id", headerName: "ID", width: 90 },
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

function ActiveList() {
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

export default ActiveList;
