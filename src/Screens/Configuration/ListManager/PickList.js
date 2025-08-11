import React, { useState } from "react";
import { IconButton, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Table, TableDeleteRow } from "../../../Components/Table";
import { TabWrapper } from "../../../Components/Page";
import Data from "./DataOne.json";
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
          to="/app/configuration/list-manager/edit-pick-list"
        >
          <VisibilityIcon fontSize="small" />
        </IconButton>
        <IconButton
          size="small"
          color="info"
          component={Link}
          to="/app/configuration/list-manager/edit-pick-list"
        >
          <InfoOutlinedIcon fontSize="small" />
        </IconButton>
        <IconButton
          size="small"
          color="primary"
          component={Link}
          to="/app/configuration/list-manager/edit-pick-list"
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
    field: "pickListCategory",
    headerName: "Pick List Category",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "pickListName",
    headerName: "Pick List Name",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "valueShortForm",
    headerName: "Value Short Form",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "dependedOn",
    headerName: "Depended On",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "dependedItems",
    headerName: "Depended Items",
    minWidth: 150,
    flex: 1,
  },
];

function PickList() {
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

export default PickList;
