import React, { useState } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { Table } from "../../Components/Table";
import { TabWrapper } from "../../Components/Page";
import TableFilters from "../../Containers/TableFilter";
import Data from "./DataOne.json";
import { red, blue, green, amber, yellow } from "@mui/material/colors";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

const handleColor = (e) => {
  if (e === "New") return blue[500];
  if (e === "Pending") return red[500];
  if (e === "Completed") return amber[800];
  else return green[500];
};

const handleTaskStatus = (e) => {
  if (e === "Assigned") return yellow[700];
  if (e === "Pending") return red[500];
  if (e === "In Progress") return blue[800];
  if (e === "Completed - Delayed") return amber[800];
  else return green[500];
};

const columns = [
  {
    field: "edit",
    headerName: "Task ID",
    renderCell: (params) => (
      <>
        <Box sx={{ p: 0.5 }}>
          <Grid container spacing={0}>
            <Grid xs={12}>
              <Stack
                direction="row"
                spacing={1}
                justifyContent="flex-start"
                alignItems="center"
              >
                <PictureAsPdfIcon sx={{ color: red[500] }} />
                <Typography variant="body2">{params.row.taskId}</Typography>
                <Box
                  sx={{
                    px: 0.5,
                    py: 0.1,
                    border: 1,
                    color: handleColor(params.row.status),
                    borderColor: handleColor(params.row.status),
                    borderRadius: 1,
                  }}
                >
                  {params.row.status}
                </Box>
              </Stack>
            </Grid>
            <Grid xs={12}>
              <Typography variant="caption" color="text.secondary">
                Assigned On {params.row.assignedOn}
              </Typography>
            </Grid>
            <Grid xs={12}>
              <Typography variant="caption" color="text.secondary">
                {params.row.email}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </>
    ),
    minWidth: 150,
    flex: 1,
  },
  {
    field: "taskType",
    headerName: "Task Type",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "targetDate",
    headerName: "Target Date",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "completedDate",
    headerName: "Completed Date",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "taskStatus",
    headerName: "Task Status",
    minWidth: 150,
    flex: 1,
    headerAlign: "right",
    align: "right",
    renderCell: (params) => (
      <Typography
        noWrap
        variant="body2"
        style={{ color: handleTaskStatus(params.row.taskStatus) }}
      >
        {params.row.taskStatus}
      </Typography>
    ),
  },
];

function RecentOpened() {
  const dataBase = Data.picklist.filter((e) => e.status === "Recent");
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
        <Table data={tableData} columns={columns} rowHeight={80} />
      </TabWrapper>
    </>
  );
}

export default RecentOpened;
