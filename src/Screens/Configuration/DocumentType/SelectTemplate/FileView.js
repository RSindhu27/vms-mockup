import React, { useState } from "react";
import {
  Box,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Data from "./DataTwo.json";
import { Table } from "../../../../Components/Table";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Name",
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
    field: "date",
    headerName: "Date",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "size",
    headerName: "Size",
    minWidth: 150,
    flex: 1,
  },
];

function FileView() {
  const dataBase = Data.files;
  const [tableData, setTableData] = useState(dataBase);
  const [search, setSearch] = useState("");
  return (
    <>
      <Box sx={{ p: 2, width: "50%", flex: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography>Folder Name</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="file-search-file"
              placeholder="Search File"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              value={search}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Table
              data={tableData}
              columns={columns}
              checkboxSelection
              disableRowSelectionOnClick
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default FileView;
