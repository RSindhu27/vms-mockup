import { Grid, MenuItem, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const notifyUsersList = [
  {
    label: "User List 1",
    value: 1,
  },
  {
    label: "User List 2",
    value: 2,
  },
  {
    label: "User List 3",
    value: 3,
  },
  {
    label: "User List 4",
    value: 4,
  },
  {
    label: "User List 5",
    value: 5,
  },
];

const notifyDepartmentList = [
  {
    label: "Department List 1",
    value: 1,
  },
  {
    label: "Department List 2",
    value: 2,
  },
  {
    label: "Department List 3",
    value: 3,
  },
  {
    label: "Department List 4",
    value: 4,
  },
  {
    label: "Department List 5",
    value: 5,
  },
];

const notifyGroupList = [
  {
    label: "Group List 1",
    value: 1,
  },
  {
    label: "Group List 2",
    value: 2,
  },
  {
    label: "Group List 3",
    value: 3,
  },
  {
    label: "Group List 4",
    value: 4,
  },
  {
    label: "Group List 5",
    value: 5,
  },
];

const notifyRoleList = [
  {
    label: "Role List 1",
    value: 1,
  },
  {
    label: "Role List 2",
    value: 2,
  },
  {
    label: "Role List 3",
    value: 3,
  },
  {
    label: "Role List 4",
    value: 4,
  },
  {
    label: "Role List 5",
    value: 5,
  },
];

function Notification() {
  const [notifyUsers, setNotifyUsers] = useState(1);
  const [notifyDepartment, setNotifyDepartment] = useState(1);
  const [notifyGroup, setNotifyGroup] = useState(1);
  const [notifyRole, setNotifyRole] = useState(1);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="body2" gutterBottom>
            Notification Users List
          </Typography>
          <TextField
            id="doc-type-notify-users-list"
            select
            fullWidth
            size="small"
            value={notifyUsers}
            onChange={(event) => {
              setNotifyUsers(event.target.value);
            }}
          >
            {notifyUsersList.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="body2" gutterBottom>
            Notification Groups List
          </Typography>
          <TextField
            id="doc-type-notify-department-list"
            select
            fullWidth
            size="small"
            value={notifyDepartment}
            onChange={(event) => {
              setNotifyDepartment(event.target.value);
            }}
          >
            {notifyDepartmentList.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="body2" gutterBottom>
            Notification Groups List
          </Typography>
          <TextField
            id="doc-type-notify-group-list"
            select
            fullWidth
            size="small"
            value={notifyGroup}
            onChange={(event) => {
              setNotifyGroup(event.target.value);
            }}
          >
            {notifyGroupList.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="body2" gutterBottom>
            Notification Roles List
          </Typography>
          <TextField
            id="doc-type-notify-role-list"
            select
            fullWidth
            size="small"
            value={notifyRole}
            onChange={(event) => {
              setNotifyRole(event.target.value);
            }}
          >
            {notifyRoleList.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
    </>
  );
}

export default Notification;
