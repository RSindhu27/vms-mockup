import React from "react";
import { Table } from "../../../../Components/Table";
import Data from "./DataOne.json";
import { Box, MenuItem, TextField } from "@mui/material";

const columns = [
  { field: "id", headerName: "Task", width: 90 },
  {
    field: "deliverables",
    headerName: "Deliverables",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "predecessor",
    headerName: "Predecessor",
    renderCell: (params) => (
      <Box sx={{ pt: 1, pb: 1, width: 100 + "%" }}>
        <TextField
          id={"predecessor_" + params.row.id}
          color="secondary"
          select
          defaultValue={params.row.predecessor}
          size="small"
          fullWidth
        >
          <MenuItem key={"predecessor_" + params.row.id + "_1"} value={1}>
            Option 1
          </MenuItem>
          <MenuItem key={"predecessor_" + params.row.id + "_2"} value={2}>
            Option 2
          </MenuItem>
          <MenuItem key={"predecessor_" + params.row.id + "_3"} value={3}>
            Option 3
          </MenuItem>
          <MenuItem key={"predecessor_" + params.row.id + "_4"} value={4}>
            Option 4
          </MenuItem>
        </TextField>
      </Box>
    ),
    minWidth: 150,
    flex: 1,
  },
  {
    field: "process",
    headerName: "Process",
    renderCell: (params) => (
      <Box sx={{ pt: 1, pb: 1, width: 100 + "%" }}>
        <TextField
          id={"process_" + params.row.id}
          color="secondary"
          select
          defaultValue={params.row.process}
          size="small"
          fullWidth
        >
          <MenuItem key={"process_" + params.row.id + "_1"} value={1}>
            Option 1
          </MenuItem>
          <MenuItem key={"process_" + params.row.id + "_2"} value={2}>
            Option 2
          </MenuItem>
          <MenuItem key={"process_" + params.row.id + "_3"} value={3}>
            Option 3
          </MenuItem>
          <MenuItem key={"process_" + params.row.id + "_4"} value={4}>
            Option 4
          </MenuItem>
        </TextField>
      </Box>
    ),
    minWidth: 150,
    flex: 1,
  },
  {
    field: "enforce_in",
    headerName: "Enforce In",
    renderCell: (params) => (
      <Box sx={{ pt: 1, pb: 1, width: 100 + "%" }}>
        <TextField
          id={"process_" + params.row.id}
          color="secondary"
          select
          defaultValue={params.row.enforce_in}
          size="small"
          fullWidth
        >
          <MenuItem key={"enforce_in_" + params.row.id + "_1"} value={1}>
            Option 1
          </MenuItem>
          <MenuItem key={"enforce_in_" + params.row.id + "_2"} value={2}>
            Option 2
          </MenuItem>
          <MenuItem key={"enforce_in_" + params.row.id + "_3"} value={3}>
            Option 3
          </MenuItem>
          <MenuItem key={"enforce_in_" + params.row.id + "_4"} value={4}>
            Option 4
          </MenuItem>
        </TextField>
      </Box>
    ),
    minWidth: 150,
    flex: 1,
  },
  {
    field: "finish_point",
    headerName: "Finish Point",
    renderCell: (params) => (
      <Box sx={{ pt: 1, pb: 1, width: 100 + "%" }}>
        <TextField
          id={"process_" + params.row.id}
          color="secondary"
          select
          defaultValue={params.row.finish_point}
          size="small"
          fullWidth
        >
          <MenuItem key={"finish_point_" + params.row.id + "_1"} value={1}>
            Option 1
          </MenuItem>
          <MenuItem key={"finish_point_" + params.row.id + "_2"} value={2}>
            Option 2
          </MenuItem>
          <MenuItem key={"finish_point_" + params.row.id + "_3"} value={3}>
            Option 3
          </MenuItem>
          <MenuItem key={"finish_point_" + params.row.id + "_4"} value={4}>
            Option 4
          </MenuItem>
        </TextField>
      </Box>
    ),
    minWidth: 150,
    flex: 1,
  },
];

function TaskList() {
  return (
    <>
      <Table
        data={Data.picklist}
        columns={columns}
        getRowHeight={() => "auto"}
      />
    </>
  );
}

export default TaskList;
