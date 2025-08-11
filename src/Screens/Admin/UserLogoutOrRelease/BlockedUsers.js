import React, { useState } from "react";
import { Table } from "../../../Components/Table";
import { PageButton, TabWrapper } from "../../../Components/Page";
import Data from "./DataOne.json";
import TableFilters from "../../../Containers/TableFilter";
import { Box, Stack, Typography } from "@mui/material";
import BlockUsersPopup from "./BlockUsersPopup";

const handleColorLogin = (e) => {
  if (e) return "#4388F6";
  else return "#D32F2F";
};

const handleColorAccount = (e) => {
  if (e) return "#23D978";
  else return "#D32F2F";
};

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Name",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "login_id",
    headerName: "Login ID",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "business_unit",
    headerName: "Business ID",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "department",
    headerName: "Department",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "login_status",
    headerName: "Login Status",
    renderCell: (params) => (
      <Typography
        variant="body2"
        color={handleColorLogin(params.row.login_status)}
      >
        {params.row.login_status ? "Enable" : "Disable"}
      </Typography>
    ),
    minWidth: 150,
    flex: 1,
  },
  {
    field: "account_status",
    headerName: "Account Status",
    renderCell: (params) => (
      <Typography
        variant="body2"
        color={handleColorAccount(params.row.login_status)}
      >
        {params.row.login_status ? "Active" : "Inactive"}
      </Typography>
    ),
    minWidth: 150,
    flex: 1,
  },
];

function LoggedUsers() {
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
        <Table
          data={tableData}
          columns={columns}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </TabWrapper>
      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        py={2}
        spacing={2}
      >
        <Box>
          <PageButton color="error">Cancel</PageButton>
        </Box>
        <Box>
          <BlockUsersPopup />
        </Box>
      </Stack>
    </>
  );
}

export default LoggedUsers;
