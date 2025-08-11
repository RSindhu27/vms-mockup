import React, { useState } from "react";
import { Box, IconButton, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Table } from "../../../Components/Table";
import { TabWrapper } from "../../../Components/Page";
import Data from "./DataOne.json";
import TableFilters from "../../../Containers/TableFilter";
import VisibilityIcon from "@mui/icons-material/Visibility";

const columns = [
  {
    field: "edit",
    headerName: "",
    width: 120,
    renderCell: (params) => (
      <Stack direction="row">
        <IconButton
          size="small"
          color="info"
          component={Link}
          to="/app/admin/user-creation/edit-user"
        >
          <VisibilityIcon fontSize="small" />
        </IconButton>
        <IconButton
          size="small"
          color="info"
          component={Link}
          to="/app/admin/user-creation/edit-user"
        >
          <InfoOutlinedIcon fontSize="small" />
        </IconButton>
        <IconButton
          size="small"
          color="primary"
          component={Link}
          to="/app/admin/user-creation/edit-user"
        >
          <DriveFileRenameOutlineOutlinedIcon fontSize="small" />
        </IconButton>
      </Stack>
    ),
    sortable: false,
    filterable: false,
    hideable: false,
  },
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "login_id",
    headerName: "Login Id",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "name",
    headerName: "Name",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "login_status",
    headerName: "Login Status",
    renderCell: (params) => (
      <Stack direction="row">
        <Box
          sx={{
            bgcolor:
              params.row.login_status === "active"
                ? "success.main"
                : "grey.200",
            color:
              params.row.login_status === "active"
                ? "success.contrastText"
                : "text.secondary",
          }}
          py={0.5}
          px={1}
          borderRadius="4px 0 0 4px"
        >
          Enable
        </Box>
        <Box
          sx={{
            bgcolor:
              params.row.login_status === "inactive"
                ? "error.main"
                : "grey.200",
            color:
              params.row.login_status === "inactive"
                ? "error.contrastText"
                : "text.secondary",
          }}
          py={0.5}
          px={1}
          borderRadius="0 4px 4px 0"
        >
          Disabled
        </Box>
      </Stack>
    ),
    minWidth: 150,
    flex: 1,
  },
  {
    field: "account_status",
    headerName: "Account Status",
    renderCell: (params) => (
      <Stack direction="row">
        <Box
          sx={{
            bgcolor:
              params.row.account_status === "active"
                ? "success.main"
                : "grey.200",
            color:
              params.row.account_status === "active"
                ? "secondary.contrastText"
                : "text.secondary",
          }}
          py={0.5}
          px={1}
          borderRadius="4px 0 0 4px"
        >
          Enable
        </Box>
        <Box
          sx={{
            bgcolor:
              params.row.account_status === "inactive"
                ? "error.main"
                : "grey.200",
            color:
              params.row.account_status === "inactive"
                ? "error.contrastText"
                : "text.secondary",
          }}
          py={0.5}
          px={1}
          borderRadius="0 4px 4px 0"
        >
          Disabled
        </Box>
      </Stack>
    ),
    minWidth: 150,
    flex: 1,
  },
];

function UserList() {
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

export default UserList;
