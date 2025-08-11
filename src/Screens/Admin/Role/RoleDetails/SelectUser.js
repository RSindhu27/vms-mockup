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

const handleColor = (e) => {
  if (e === "active") return "#0DD08B";
  if (e === "inactive") return "#FFA200";
  else return "black";
};

function SelectUser() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const columns = [
    {
      field: "username",
      headerName: "User Name",
      minWidth: 150,
      flex: 1,
    },
    {
      field: "domain",
      headerName: "Domain",
      minWidth: 150,
      flex: 1,
    },
    {
      field: "job_title",
      headerName: "Job Title",
      minWidth: 150,
      flex: 1,
    },
    {
      field: "employee_no",
      headerName: "Employee No",
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
      field: "email",
      headerName: "Email",
      minWidth: 150,
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      renderCell: (params) => (
        <Typography variant="body2" color={handleColor(params.row.status)}>
          {params.row.status}
        </Typography>
      ),
      minWidth: 150,
      flex: 1,
    },
  ];

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
        Select User
      </PageCircleButton>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle sx={{ borderBottom: 1, borderColor: "divider" }}>
          Select User
        </DialogTitle>
        <PopupContainer>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="role-search-user"
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
          <Button
            variant="contained"
            color="info"
            disableElevation
            size="large"
          >
            Clear Selected Users
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

export default SelectUser;
