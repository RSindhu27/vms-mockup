import React, { useState } from "react";
import { IconButton, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Table, TableDeleteRow } from "../../../Components/Table";
import { TabWrapper } from "../../../Components/Page";
import Data from "./DataOne.json";
import VisibilityIcon from "@mui/icons-material/Visibility";
import TableFilters from "./../../../Containers/TableFilter";

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
          to="/app/configuration/system-data-fields-types/edit-system-data-fields-types"
        >
          <VisibilityIcon fontSize="small" />
        </IconButton>
        <IconButton
          size="small"
          color="info"
          component={Link}
          to="/app/configuration/system-data-fields-types/edit-system-data-fields-types"
        >
          <InfoOutlinedIcon fontSize="small" />
        </IconButton>
        <IconButton
          size="small"
          color="primary"
          component={Link}
          to="/app/configuration/system-data-fields-types/edit-system-data-fields-types"
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
    field: "dataFieldType",
    headerName: "Data Field Type",
    minWidth: 150,
    flex: 1,
  },
];

function SystemDataFieldTypeList() {
  const dataBase = Data.picklist;
  const [tableData, setTableData] = useState(dataBase);

  const searchItems = (array, criterion, value) => {
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

export default SystemDataFieldTypeList;
