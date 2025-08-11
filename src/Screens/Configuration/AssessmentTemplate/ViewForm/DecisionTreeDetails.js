import React, { useState } from "react";
import {
  Box,
  Grid,
  IconButton,
  MenuItem,
  Stack,
  InputAdornment,
  TextField,
  Typography,
  Collapse,
} from "@mui/material";
import { Table, TableDeleteRow } from "../../../../Components/Table";
import SearchIcon from "@mui/icons-material/Search";
import {
  CompoWrapper,
  PageIconPrimaryButton,
} from "../../../../Components/Page";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import Data from "./DataOne.json";

const columns = [
  {
    field: "edit",
    headerName: "",
    width: 90,
    renderCell: (params) => (
      <Stack direction="row">
        <IconButton size="small" color="primary">
          <DriveFileRenameOutlineOutlinedIcon fontSize="small" />
        </IconButton>
        <TableDeleteRow key={`${params.row.id}_Delete`} onDelete={() => {}} />
      </Stack>
    ),
    sortable: false,
    filterable: false,
    hideable: false,
  },
  { field: "id", headerName: "Order", width: 90 },
  {
    field: "prefix",
    headerName: "Prefix",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "question",
    headerName: "Question",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "answer",
    headerName: "If Answer Is",
    renderCell: (params) => (
      <Box>
        <Stack direction="column">
          {params.row.answer.map((e) => (
            <Box
              sx={{
                height: 40,
                p: 1,
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography variant="body2" color="info.main">
                {e}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Box>
    ),
    minWidth: 100,
    flex: 1,
  },
  {
    field: "next_setup",
    headerName: "Next Setup",
    renderCell: (params) => (
      <Box sx={{ pt: 1, pb: 1 }}>
        <Grid container spacing={1}>
          {params.row.answer.map((e, idx) => (
            <Grid item xs={12}>
              <TextField
                id={params.row.question.replace(/\s/g, "") + e + idx}
                color="secondary"
                defaultValue="Decision Required"
                size="small"
                fullWidth
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    ),
    minWidth: 200,
    flex: 1,
  },
  {
    field: "decision",
    headerName: "Decision",
    renderCell: (params) => (
      <Box sx={{ pt: 1, pb: 1 }}>
        <Grid container spacing={1}>
          {params.row.answer.map((e, idx) => (
            <Grid item xs={12}>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <TextField
                    id={params.row.question.replace(/\s/g, "") + e + idx}
                    color="secondary"
                    size="small"
                    fullWidth
                    defaultValue="Decision"
                    placeholder="Enter Decision"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id={params.row.question.replace(/\s/g, "") + e + idx}
                    color="secondary"
                    defaultValue="End Action"
                    size="small"
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Box>
    ),
    minWidth: 300,
    flex: 1,
  },
];

function DecisionTreeDetails({ title }) {
  const [checked, setChecked] = useState(false);
  const [search, setSearch] = useState("");

  const handleExpand = () => {
    setChecked((prev) => !prev);
  };

  return (
    <>
      <CompoWrapper>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Typography variant="body1">
                  {title}: <b>Actions</b>
                </Typography>
              </Grid>
              <Grid item xs>
                <TextField
                  id="section_details_search"
                  color="secondary"
                  variant="outlined"
                  size="small"
                  fullWidth
                  placeholder="Search"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                  value={search}
                  onChange={(event) => {
                    setSearch(event.target.value);
                  }}
                />
              </Grid>
              <Grid item>
                <PageIconPrimaryButton size="small" onClick={handleExpand}>
                  {checked ? <RemoveIcon /> : <AddIcon />}
                </PageIconPrimaryButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Collapse in={checked}>
              <Box sx={{ p: 1 }} />
              <Table
                data={Data.picklist}
                columns={columns}
                getRowHeight={() => "auto"}
                checkboxSelection
                disableRowSelectionOnClick
              />
            </Collapse>
          </Grid>
        </Grid>
      </CompoWrapper>
    </>
  );
}

export default DecisionTreeDetails;
