import { useState } from "react";
import Data from "./DataOne.json";
import { Table, TableDeleteRow } from "../../Components/Table";
import { Box, Grid, Link, Typography } from "@mui/material";

const columns = [
  { field: "step", headerName: "Step", width: 50 },

  {
    field: "test_procedure",
    headerName: "Test Procedure",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "expected_result",
    headerName: "Expected Result",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "actual_result",
    headerName: "Actual Result",
    minWidth: 100,
    flex: 1,
    renderCell: (params) => (
      <Box>
        <Typography variant="body2">{params.row.actual_result}</Typography>
        <Typography variant="body2" component={Link} to="" color="info.main">
          <b>Files</b>
        </Typography>
      </Box>
    ),
  },
  {
    field: "result",
    headerName: "Result-Pass/Fail",
    minWidth: 50,
    flex: 1,
  },
  {
    field: "remarks",
    headerName: "Remarks",
    minWidth: 50,
    flex: 1,
  },
  {
    field: "test_by",
    headerName: "Tested By",
    minWidth: 100,
    flex: 1,
    renderCell: (params) => (
      <Box
        sx={{
          wordBreak: "break-word",
          whiteSpace: "normal",
          overflowWrap: "break-word",
        }}
      >
        <Typography variant="body2">
          <b>Executed By:</b>
        </Typography>
        <Typography variant="body2">{params.row.test_by}</Typography>
      </Box>
    ),
  },
];

function DiscrepancyTables() {
  const dataBase = Data.picklist;

  const [tableData, setTableData] = useState(dataBase);

  return (
    <>
      <Grid container mt={4} mb={2}>
        <Grid item xs={6}>
          <Typography variant="body1">
            <b>1.0 Test Results</b>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography
            variant="body1"
            sx={{
              color: "info.main",
              textAlign: "right",
            }}
          >
            <b>Table: 01, Row: 01, Column: 4</b>
          </Typography>
        </Grid>
      </Grid>
      <Table
        data={tableData}
        columns={columns}
        getRowHeight={() => 80}
        height={200}
      />
    </>
  );
}

export default DiscrepancyTables;
