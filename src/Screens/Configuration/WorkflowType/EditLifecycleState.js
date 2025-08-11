import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Box,
  Grid,
  IconButton,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { PopupContainer } from "../../../Components/Page";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";

const countryList = [
  {
    value: 1,
    label: "Status 1",
  },
  {
    value: 2,
    label: "Status 2",
  },
  {
    value: 3,
    label: "Status 3",
  },
  {
    value: 4,
    label: "Status 4",
  },
  {
    value: 5,
    label: "Status 5",
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
];

const departmentList = [
  {
    value: 1,
    label: "Department 1",
  },
  {
    value: 2,
    label: "Department 2",
  },
  {
    value: 3,
    label: "Department 3",
  },
];

const actionActivityList = [
  {
    value: 1,
    label: "Action 1",
  },
  {
    value: 2,
    label: "Action 2",
  },
  {
    value: 3,
    label: "Action 3",
  },
];

const checkListList = [
  {
    value: 1,
    label: "Checklist 1",
  },
  {
    value: 2,
    label: "Checklist 2",
  },
  {
    value: 3,
    label: "Checklist 3",
  },
];

const notificationTypeList = [
  {
    value: 1,
    label: "Notification Type 1",
  },
  {
    value: 2,
    label: "Notification Type 2",
  },
  {
    value: 3,
    label: "Notification Type 3",
  },
];

const incrementTypeList = [
  {
    value: 1,
    label: "Increment Type 1",
  },
  {
    value: 2,
    label: "Increment Type 2",
  },
];

const printTypeList = [
  {
    value: 1,
    label: "Print Type 1",
  },
  {
    value: 2,
    label: "Print Type 2",
  },
];

function EditLifecycleState() {
  const [open, setOpen] = useState(false);
  const [lifecycleStatus, setLifecycleStatus] = useState("");
  const [role, setRole] = useState("");
  const [department, setDepartment] = useState("");
  const [actionActivity, setActionActivity] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [signature, setSignature] = useState(
    "Signature texts will be displayed"
  );
  const [checklist, setChecklist] = useState("");
  const [userCount, setUserCount] = useState(1);
  const [notificationType, setNotificationType] = useState("");
  const [incrementType, setIncrementType] = useState("");
  const [printType, setPrintType] = useState("");
  const [days, setDays] = useState(1);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        aria-label="edit"
        color="primary"
        size="small"
        onClick={handleClickOpen}
      >
        <BorderColorOutlinedIcon fontSize="small" color="secondary" />
      </IconButton>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle sx={{ borderBottom: 1, borderColor: "divider" }}>
          Add Lifecycle State
        </DialogTitle>
        <PopupContainer>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Select Lifecycle State
              </Typography>
              <TextField
                id="add_lifecycle_state"
                select
                fullWidth
                size="small"
                value={lifecycleStatus}
                onChange={(event) => {
                  setLifecycleStatus(event.target.value);
                }}
              >
                {countryList.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" gutterBottom>
                Select Role
              </Typography>
              <TextField
                id="add_lifecycle_role"
                select
                fullWidth
                size="small"
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
            <Grid item xs={6}>
              <Typography variant="body2" gutterBottom>
                Select Department
              </Typography>
              <TextField
                id="add_lifecycle_department"
                select
                fullWidth
                size="small"
                value={department}
                onChange={(event) => {
                  setDepartment(event.target.value);
                }}
              >
                {departmentList.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" gutterBottom>
                Select Action/Activity
              </Typography>
              <TextField
                id="add_lifecycle_department"
                select
                fullWidth
                size="small"
                value={actionActivity}
                onChange={(event) => {
                  setActionActivity(event.target.value);
                }}
              >
                {actionActivityList.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" gutterBottom>
                Meaning of Signature
              </Typography>
              <TextField
                id="add_lifecycle_signature"
                fullWidth
                size="small"
                color="info"
                value={signature}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" gutterBottom>
                Select Checklist
              </Typography>
              <TextField
                id="add_lifecycle_checklist"
                select
                fullWidth
                size="small"
                value={checklist}
                onChange={(event) => {
                  setChecklist(event.target.value);
                }}
              >
                {checkListList.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" gutterBottom>
                Minimum User Count
              </Typography>
              <TextField
                id="add_lifecycle_user_count"
                fullWidth
                size="small"
                color="info"
                type="number"
                value={userCount}
                onChange={(event) => {
                  setUserCount(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" gutterBottom>
                Select Notification Type
              </Typography>
              <TextField
                id="add_lifecycle_notification_type"
                select
                fullWidth
                size="small"
                value={notificationType}
                onChange={(event) => {
                  setNotificationType(event.target.value);
                }}
              >
                {notificationTypeList.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" gutterBottom>
                Increment Type
              </Typography>
              <TextField
                id="add_lifecycle_increment_type"
                select
                fullWidth
                size="small"
                value={incrementType}
                onChange={(event) => {
                  setIncrementType(event.target.value);
                }}
              >
                {incrementTypeList.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" gutterBottom>
                Select Print Type
              </Typography>
              <TextField
                id="add_lifecycle_print_type"
                select
                fullWidth
                size="small"
                value={printType}
                onChange={(event) => {
                  setPrintType(event.target.value);
                }}
              >
                {printTypeList.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" gutterBottom>
                SLA/Days:
              </Typography>
              <TextField
                id="add_lifecycle_user_count"
                fullWidth
                size="small"
                color="info"
                type="number"
                value={days}
                onChange={(event) => {
                  setDays(event.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Box p={1} />
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
            Map
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default EditLifecycleState;
