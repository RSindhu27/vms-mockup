import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import { Grid, InputAdornment, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { PopupContainer, PageCircleButton } from "../../../../Components/Page";
import { Table } from "../../../../Components/Table";
import Data from "./DataThree.json";
import { Link } from "react-router-dom";

const columns = [
  {
    field: "name",
    headerName: "User Group Name",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "description",
    headerName: "Description",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "users",
    headerName: "Users",
    renderCell: (params) => (
      <Typography component={Link} to="#" variant="body2" color="info.main">
        View All
      </Typography>
    ),
    minWidth: 150,
    flex: 1,
  },
];

function AddUsersGroup() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <PageCircleButton
        color="secondary"
        variant="contained"
        disableElevation
        startIcon={<AddCircleOutlinedIcon />}
        onClick={handleClickOpen}
      >
        Add User Groups
      </PageCircleButton>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle sx={{ borderBottom: 1, borderColor: "divider" }}>
          Add User Groups
        </DialogTitle>
        <PopupContainer>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="search-user-group"
                placeholder="Search User Group"
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
                data={Data.picklist}
                columns={columns}
                checkboxSelection
                disableRowSelectionOnClick
              />
            </Grid>
          </Grid>
        </PopupContainer>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="contained"
            disableElevation
            size="large"
            color="inherit"
          >
            Cancel
          </Button>
          <Button variant="outlined" color="info" disableElevation size="large">
            Clear
          </Button>
          <Button
            onClick={handleClose}
            autoFocus
            variant="contained"
            disableElevation
            size="large"
            color="success"
          >
            Add Users
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddUsersGroup;
