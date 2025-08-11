import React, { useState } from "react";
import Data from "./DataOne.json";
import { Link } from "react-router-dom";
import { IconButton, Stack, Typography } from "@mui/material";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { TabWrapper } from "../../../../Components/Page";
import { Table, TableDeleteRow } from "../../../../Components/Table";
import TableFilters from "../../../../Containers/TableFilter";
import VisibilityIcon from "@mui/icons-material/Visibility";

const handleColor = (e) => {
  if (e === "Assigned") return "#4DC476";
  if (e === "Reviewing") return "#FFA302";
  if (e === "Rejected") return "#D32F2F";
  else return "#0099FF";
};

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
          to="/app/task-new/assign-task/edit-assign-task"
        >
          <VisibilityIcon fontSize="small" />
        </IconButton>
        <IconButton
          size="small"
          color="info"
          component={Link}
          to="/app/task-new/assign-task/edit-assign-task"
        >
          <InfoOutlinedIcon fontSize="small" />
        </IconButton>
        <IconButton
          size="small"
          color="primary"
          component={Link}
          to="/app/task-new/assign-task/edit-assign-task"
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
    field: "task_id",
    headerName: "Task ID",
    renderCell: (params) => (
      <Typography variant="body2" component={Link} to="#" color="info.main">
        {params.row.task_id}
      </Typography>
    ),
    minWidth: 150,
    flex: 1,
  },
  {
    field: "task_type",
    headerName: "Task Type",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "content_function",
    headerName: "Content Function",
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
    field: "status",
    headerName: "Status",
    renderCell: (params) => (
      <Typography variant="body2" color={handleColor(params.row.status)}>
        {params.row.status}
      </Typography>
    ),
    minWidth: 150,
    flex: 1,
  },
];

function WipAssignedTask() {
  const dataBase = Data.activities.filter(
    (e) => e.status === "Assigned" || e.status === "Reviewing"
  );
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

export default WipAssignedTask;
