import React, { useState } from "react";
import { Table, TableDeleteRow } from "../../Components/Table";
import Data from "./DataOne.json";
import { TabWrapper } from "../../Components/Page";
import { Link } from "react-router-dom";
import { IconButton, Stack, Typography } from "@mui/material";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import TableFilters from "../../Containers/TableFilter/TableFilter";
import { Chip } from "@mui/material";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";

const columns = [
  {
    field: "edit",
    headerName: "",
    width: 140,
    renderCell: (params) => (
      <Stack direction="row">
        <IconButton size="small" color="info" component={Link} to="">
          <VisibilityIcon fontSize="small" />
        </IconButton>
        <IconButton
          size="small"
          color="primary"
          component={Link}
          to="/app/virtual-data-room/edit-room/"
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
    field: "room_number",
    headerName: "Room Number",
    minWidth: 120,
    flex: 1,
    renderCell: (params) => (
      <Typography
        variant="body2"
        sx={{ color: "info.main" }}
        noWrap
        component={Link}
        to={"/app/virtual-data-room/edit-room/"}
      >
        <b>{params.row.room_number}</b>
      </Typography>
    ),
  },
  {
    field: "name",
    headerName: "Room Name",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "owner",
    headerName: "Owner",
    minWidth: 120,
    flex: 1,
  },
  {
    field: "reason",
    headerName: "Reason",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "status",
    headerName: "Status",
    minWidth: 100,
    flex: 1,
    renderCell: (params) => (
      <Chip
        label={params.value}
        color={params.value === "Active" ? "success" : "error"}
        size="small"
        variant="contained"
        sx={{
          boxShadow: "0px 1px 4px rgba(0,0,0,0.2)",
          borderRadius: "12px",
          px: 1.5,
        }}
      />
    ),
  },
  {
    field: "expiry_date",
    headerName: "Expiry Date",
    minWidth: 120,
    flex: 1,
  },
  {
    field: "user_count",
    headerName: "Users",
    minWidth: 100,
    flex: 1,
    renderCell: (params) => (
      <Stack direction="row" alignItems="center" spacing={1}>
        <PeopleOutlineOutlinedIcon fontSize="small" color="primary" />
        <Typography variant="body2">{params.value}</Typography>
      </Stack>
    ),
  },
];
function VirtualDataRoomList() {
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

export default VirtualDataRoomList;
