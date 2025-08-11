import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { PopupContainer } from "../../../Components/Page";
import { Autocomplete, Chip, Grid, TextField, Typography } from "@mui/material";

const optionList = [
  {
    value: 1,
    label: "Option 1",
  },
  {
    value: 2,
    label: "Option 2",
  },
  {
    value: 3,
    label: "Option 3",
  },
  {
    value: 4,
    label: "Option 4",
  },
  {
    value: 5,
    label: "Option 5",
  },
];

function EditRecipients() {
  const [open, setOpen] = useState(false);
  const [role, setRole] = useState([]);
  const [department, setDepartment] = useState([]);
  const [user, setUser] = useState([]);
  const [groupEmailID, setGroupEmailID] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {};

  return (
    <>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        color="info"
        disableElevation
      >
        Edit Recipients
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle sx={{ borderBottom: 1, borderColor: "divider" }}>
          Edit Recipients
        </DialogTitle>
        <PopupContainer>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Select Roles
              </Typography>
              <Autocomplete
                id="recipients-role"
                size="small"
                value={role}
                onChange={(event, newValue) => {
                  setRole(newValue);
                }}
                getOptionLabel={(option) => option.label}
                fullWidth
                multiple
                options={optionList}
                renderInput={(params) => <TextField {...params} />}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Select Department
              </Typography>
              <Autocomplete
                id="recipients-department"
                size="small"
                value={department}
                onChange={(event, newValue) => {
                  setDepartment(newValue);
                }}
                getOptionLabel={(option) => option.label}
                fullWidth
                multiple
                options={optionList}
                renderInput={(params) => <TextField {...params} />}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Select User
              </Typography>
              <Autocomplete
                id="recipients-user-group"
                size="small"
                value={user}
                onChange={(event, newValue) => {
                  setUser(newValue);
                }}
                getOptionLabel={(option) => option.label}
                fullWidth
                multiple
                options={optionList}
                renderInput={(params) => <TextField {...params} />}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Group Email ID
              </Typography>
              <TextField
                id="recipients-group-email-iD"
                color="secondary"
                variant="outlined"
                size="small"
                fullWidth
                value={groupEmailID}
                onChange={(event) => {
                  setGroupEmailID(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                <b>Added Recipients</b>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={1}>
                <Grid item>
                  <Chip label="Role-Admin" onDelete={handleDelete} />
                </Grid>
                <Grid item>
                  <Chip label="IT Department" onDelete={handleDelete} />
                </Grid>
                <Grid item>
                  <Chip label="someone@arcolab.com" onDelete={handleDelete} />
                </Grid>
                <Grid item>
                  <Chip label="QA Department" onDelete={handleDelete} />
                </Grid>
              </Grid>
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
            onClick={handleClose}
            autoFocus
            variant="contained"
            disableElevation
            size="large"
            color="success"
          >
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default EditRecipients;
