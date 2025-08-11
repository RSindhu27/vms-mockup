import { Box, Checkbox } from "@mui/material";
import { Table } from "../../../../Components/Table";
import Data from "./DataThree.json";

const columns = [
  {
    field: "doc_type",
    headerName: "Document Type",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "all",
    headerName: "ALL",
    renderCell: (params) => (
      <Box>
        <Checkbox />
      </Box>
    ),
    minWidth: 150,
    flex: 1,
  },
  {
    field: "view",
    headerName: "View",
    renderCell: (params) => (
      <Box>
        <Checkbox />
      </Box>
    ),
    minWidth: 150,
    flex: 1,
  },
  {
    field: "create",
    headerName: "Create",
    renderCell: (params) => (
      <Box>
        <Checkbox />
      </Box>
    ),
    minWidth: 150,
    flex: 1,
  },
  {
    field: "edit",
    headerName: "Edit",
    renderCell: (params) => (
      <Box>
        <Checkbox />
      </Box>
    ),
    minWidth: 150,
    flex: 1,
  },
  {
    field: "delete",
    headerName: "Delete",
    renderCell: (params) => (
      <Box>
        <Checkbox />
      </Box>
    ),
    minWidth: 150,
    flex: 1,
  },
  {
    field: "others",
    headerName: "Others",
    renderCell: (params) => (
      <Box>
        <Checkbox />
      </Box>
    ),
    minWidth: 150,
    flex: 1,
  },
];

function PrivilegesTable() {
  return (
    <>
      <Table
        data={Data.picklist}
        columns={columns}
        disableRowSelectionOnClick
      />
    </>
  );
}

export default PrivilegesTable;
