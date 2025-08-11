import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import { PopupContainer, PageCircleButton } from "../../../Components/Page";
import { Grid, MenuItem, TextField, Typography } from "@mui/material";

const businessUnitList = [
  {
    value: 1,
    label: "Business Unit 1",
  },
  {
    value: 2,
    label: "Business Unit 2",
  },
  {
    value: 3,
    label: "Business Unit 3",
  },
  {
    value: 4,
    label: "Business Unit 4",
  },
  {
    value: 5,
    label: "Business Unit 5",
  },
];

const roleList = [
  {
    value: 1,
    label: "Role 1",
  },
  {
    value: 2,
    label: "Role 2",
  },
  {
    value: 3,
    label: "Role 3",
  },
  {
    value: 4,
    label: "Role 4",
  },
  {
    value: 5,
    label: "Role 5",
  },
];

const userGroupList = [
  {
    value: 1,
    label: "User Group 1",
  },
  {
    value: 2,
    label: "User Group 2",
  },
  {
    value: 3,
    label: "User Group 3",
  },
  {
    value: 4,
    label: "User Group 4",
  },
  {
    value: 5,
    label: "User Group 5",
  },
];

const viewAccessList = [
  {
    value: 1,
    label: "View Access 1",
  },
  {
    value: 2,
    label: "View Access 2",
  },
  {
    value: 3,
    label: "View Access 3",
  },
  {
    value: 4,
    label: "View Access 4",
  },
  {
    value: 5,
    label: "View Access 5",
  },
];

const createAccessList = [
  {
    value: 1,
    label: "Create Access 1",
  },
  {
    value: 2,
    label: "Create Access 2",
  },
  {
    value: 3,
    label: "Create Access 3",
  },
  {
    value: 4,
    label: "Create Access 4",
  },
  {
    value: 5,
    label: "Create Access 5",
  },
];

function AddPrivileges() {
  const [open, setOpen] = useState(false);
  const [businessUnit, setBusinessUnit] = useState(1);
  const [role, setRole] = useState(1);
  const [userGroup, setUserGroup] = useState(1);
  const [viewAccess, setViewAccess] = useState(1);
  const [createAccess, setCreateAccess] = useState(1);

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
        Add Privileges
      </PageCircleButton>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle sx={{ borderBottom: 1, borderColor: "divider" }}>
          Add Privileges
        </DialogTitle>
        <PopupContainer>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Select Business Unit
              </Typography>
              <TextField
                id="privileges-business-unit"
                color="secondary"
                variant="outlined"
                size="small"
                fullWidth
                select
                value={businessUnit}
                onChange={(event) => {
                  setBusinessUnit(event.target.value);
                }}
              >
                {businessUnitList.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Select Roles
              </Typography>
              <TextField
                id="privileges-role"
                color="secondary"
                variant="outlined"
                size="small"
                fullWidth
                select
                value={role}
                onChange={(event) => {
                  setRole(event.target.value);
                }}
              >
                {roleList.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Select User Group
              </Typography>
              <TextField
                id="privileges-user-group"
                color="secondary"
                variant="outlined"
                size="small"
                fullWidth
                select
                value={userGroup}
                onChange={(event) => {
                  setUserGroup(event.target.value);
                }}
              >
                {userGroupList.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Select Departments to View Access
              </Typography>
              <TextField
                id="privileges-view-access"
                color="secondary"
                variant="outlined"
                size="small"
                fullWidth
                select
                value={viewAccess}
                onChange={(event) => {
                  setViewAccess(event.target.value);
                }}
              >
                {viewAccessList.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Select departments to Create Access
              </Typography>
              <TextField
                id="privileges-create-access"
                color="secondary"
                variant="outlined"
                size="small"
                fullWidth
                select
                value={createAccess}
                onChange={(event) => {
                  setCreateAccess(event.target.value);
                }}
              >
                {createAccessList.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
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
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddPrivileges;
