import React, { useState } from "react";
import { Table } from "../../../../Components/Table";
import Data from "./DataSeven.json";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "table_name",
    headerName: "Table Name",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "no_of_row",
    headerName: "No:oF Rows",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "row_execute_without_result",
    headerName: "Rows Execute Without Result",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "pass_rows",
    headerName: "Pass Rows",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "first_pass_failure",
    headerName: "First Pass Failure",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "no_of_na",
    headerName: "No of N/A",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "pending_tests",
    headerName: "Pending Tests",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "actual_failure",
    headerName: "Actual Failure",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "discrepancy",
    headerName: "Discrepancy",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "open_discrepancy",
    headerName: "Open Discrepancy",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "closed_discrepancy",
    headerName: "Closed Discrepancy",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "execution_rate",
    headerName: "Execution Rate",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "first_pass_failure_rate",
    headerName: "First Pass Failure Rate",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "final_pass_failed_tests",
    headerName: "Final Pass Failure Rate",
    minWidth: 100,
    flex: 1,
  },
];

function ExecutionReportTable() {
  const dataBase = Data.picklist;
  const [tableData, setTableData] = useState(dataBase);

  return (
    <>
      <Table
        data={tableData}
        columns={columns}
        columnVisibilityModel={{
          id: false,
        }}
      />
    </>
  );
}

export default ExecutionReportTable;
