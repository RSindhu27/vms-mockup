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
import Data from "./DataTwo.json";

const handleColorLogin = (e) => {
  if (e === "Enable") return "#2979ff";
  if (e === "Disabled") return "#FFA200";
  else return "black";
};

const handleColorAccount = (e) => {
  if (e === "Active") return "#8bc34a";
  if (e === "Inactive") return "#FFA200";
  else return "black";
};

const columns = [
  {
    field: "username",
    headerName: "User Name",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "login_id",
    headerName: "Login ID",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "business_unit",
    headerName: "Business Unit",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "department",
    headerName: "Department",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "login_status",
    headerName: "Login Status",
    renderCell: (params) => (
      <Typography
        variant="body2"
        color={handleColorLogin(params.row.login_status)}
      >
        {params.row.login_status}
      </Typography>
    ),
    minWidth: 150,
    flex: 1,
  },
  {
    field: "account_status",
    headerName: "Account Status",
    renderCell: (params) => (
      <Typography
        variant="body2"
        color={handleColorAccount(params.row.account_status)}
      >
        {params.row.account_status}
      </Typography>
    ),
    minWidth: 150,
    flex: 1,
  },
];

function AddUsers() {
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
        Add Users
      </PageCircleButton>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle sx={{ borderBottom: 1, borderColor: "divider" }}>
          Add Users
        </DialogTitle>
        <PopupContainer>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="search-user"
                placeholder="Search User"
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

export default AddUsers;
