import React, { useState } from "react";
import {
  Autocomplete,
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Data from "./DataTwo.json";
import { Table, TableDeleteRow } from "../../../../Components/Table";
import Collapse from "@mui/material/Collapse";

const usernameList = Data.user_list;

const columns = [
  {
    field: "edit",
    headerName: "",
    width: 50,
    renderCell: (params) => (
      <Stack direction="row">
        <TableDeleteRow key={`${params.row.id}_Delete`} onDelete={() => {}} />
      </Stack>
    ),
    sortable: false,
    filterable: false,
    hideable: false,
  },
  {
    field: "name",
    headerName: "Name",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "decision",
    headerName: "Decision",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "order",
    headerName: "Order",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "email",
    headerName: "Email",
    minWidth: 150,
    flex: 1,
  },
];

function SelectUsers({ role, sequence, order, checklist }) {
  const [tableData, setTableData] = useState(usernameList);
  const [expand, setExpand] = useState(false);
  const [usernameAdd, setUsernameAdd] = useState([]);

  const handleExpand = () => {
    setExpand(!expand);
  };

  return (
    <>
      <Box
        sx={{
          border: 2,
          borderColor: "secondary.main",
          p: 1,
          borderRadius: 2,
        }}
      >
        <Grid
          container
          spacing={2}
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="body1">
              Role:{" "}
              <Typography component="span" sx={{ color: "info.main" }}>
                {role}
              </Typography>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">
              Sequence:{" "}
              <Typography component="span" sx={{ color: "info.main" }}>
                {sequence}
              </Typography>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">
              Order:{" "}
              <Typography component="span" sx={{ color: "info.main" }}>
                {order}
              </Typography>
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="body1">
              Checklist:{" "}
              <Typography component="span" sx={{ color: "info.main" }}>
                {checklist}
              </Typography>
            </Typography>
          </Grid>
          <Grid item>
            <IconButton onClick={() => handleExpand()}>
              {expand ? <RemoveIcon /> : <AddIcon />}
            </IconButton>
          </Grid>
        </Grid>
        <Collapse in={expand}>
          <Divider sx={{ my: 2 }} />
          <Grid container spacing={2}>
            <Grid item xs>
              <Autocomplete
                multiple
                id="workflow-username-list"
                options={usernameList}
                getOptionLabel={(option) => option.name}
                value={usernameAdd}
                onChange={(event, newValue) => {
                  setUsernameAdd(newValue);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    placeholder="Search User"
                    size="small"
                  />
                )}
              />
            </Grid>
            <Grid item>
              <Button color="secondary" variant="contained" disableElevation>
                Add {usernameAdd.length === 1 ? "User" : "Users"}
              </Button>
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
        </Collapse>
      </Box>
    </>
  );
}

export default SelectUsers;
