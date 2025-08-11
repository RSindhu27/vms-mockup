import React, { useState } from "react";
import { IconButton, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Table, TableDeleteRow, ViewMore } from "../../../Components/Table";
import { TabWrapper } from "../../../Components/Page";
import Data from "./DataOne.json";
import TableFilters from "../../../Containers/TableFilter";
import VisibilityIcon from "@mui/icons-material/Visibility";

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
          to="/app/admin/user-group/edit-user-group"
        >
          <VisibilityIcon fontSize="small" />
        </IconButton>
        <IconButton
          size="small"
          color="info"
          component={Link}
          to="/app/admin/user-group/edit-user-group"
        >
          <InfoOutlinedIcon fontSize="small" />
        </IconButton>
        <IconButton
          size="small"
          color="primary"
          component={Link}
          to="/app/admin/user-group/edit-user-group"
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
    field: "users",
    headerName: "Users",
    renderCell: (params) => (
      <ViewMore primaryText="View All" dataList={params.row.users} />
    ),
    minWidth: 150,
    flex: 1,
  },
];

function UserGroupList() {
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

export default UserGroupList;
