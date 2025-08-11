import React, { useState } from "react";
import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import Data from "./DataTwo.json";
import { Link } from "react-router-dom";
import { Table, TableDeleteRow } from "../../../../Components/Table";
import DocPreview from "./DocPreview";

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
  {
    field: "edit",
    headerName: "",
    width: 120,
    renderCell: (params) => (
      <Stack direction="row">
        <DocPreview />
        <IconButton size="small" color="primary" component={Link} to="#">
          <DriveFileRenameOutlineOutlinedIcon fontSize="small" />
        </IconButton>
        <TableDeleteRow key={`${params.row.id}_Delete`} onDelete={() => {}} />
      </Stack>
    ),
    sortable: false,
    filterable: false,
    hideable: false,
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
            <Table data={tableData} columns={columns} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default FileView;
