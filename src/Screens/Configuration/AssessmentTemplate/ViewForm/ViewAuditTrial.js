import React, { useState } from "react";
import Data from "./DataTwo.json";
import { Table } from "../../../../Components/Table";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "review_order",
    headerName: "Review Order",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "reviewers",
    headerName: "Reviewers",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "target_date",
    headerName: "Target Date",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "reviewed_date",
    headerName: "Reviewed Date",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "sequence",
    headerName: "Sequence",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "approval_order",
    headerName: "Approval Order",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "approvers",
    headerName: "Approvers",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "approved_target_date",
    headerName: "Target Date",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "approved_date",
    headerName: "Approved Date and Time",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "approved_sequence",
    headerName: "Approved Sequence",
    minWidth: 150,
    flex: 1,
  },
];

function ViewAuditTrial() {
  const dataBase = Data.activities;
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

export default ViewAuditTrial;
