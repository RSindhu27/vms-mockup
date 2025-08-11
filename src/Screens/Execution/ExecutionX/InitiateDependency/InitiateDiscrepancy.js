import { useState } from "react";
import {
  Autocomplete,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Grid,
  MenuItem,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { PopupContainer } from "../../../../Components/Page";
import TableView from "./TableView";

const discrepancyTemplateList = [
  {
    value: 1,
    label: "Discrepancy 1",
  },
  {
    value: 2,
    label: "Discrepancy 2",
  },
  {
    value: 3,
    label: "Discrepancy 3",
  },
];

const userList = [
  {
    label: "msangster0@dropbox.com",
    name: "Mace Sangster",
    value: 1,
  },
  {
    label: "sdenys1@yelp.com",
    name: "Sharla Denys",
    value: 2,
  },
  {
    label: "abashford2@cloudflare.com",
    name: "Archaimbaud Bashford",
    value: 3,
  },
  {
    label: "rexroll3@springer.com",
    name: "Ricky Exroll",
    value: 4,
  },
  {
    label: "lbarg4@networksolutions.com",
    name: "Lionel Barg",
    value: 5,
  },
];

function InitiateDiscrepancy() {
  const [open, setOpen] = useState(false);
  const [update, setUpdate] = useState(false);
  const [routeFor, setRouteFor] = useState(1);
  const [userEmail, setUserEmail] = useState([]);
  const [assignTo, setAssignTo] = useState("user");
  const [description, setDescription] = useState("");
  const [targetDate, setTargetDate] = useState(dayjs());

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdate = () => {
    setUpdate(!update);
  };

  const handleAssignTo = (event, newType) => {
    setAssignTo(newType);
  };

  return (
    <>
      <Typography
        variant="body2"
        sx={{ color: "info.main", cursor: "pointer" }}
        onClick={handleClickOpen}
        noWrap
      >
        <b>Initiate Discrepancy</b>
      </Typography>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle sx={{ borderBottom: 1, borderColor: "divider" }}>
          Initiate Discrepancy
        </DialogTitle>
        <PopupContainer>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TableView />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" gutterBottom>
                Select Discrepancy Template
                <Typography
                  component="span"
                  variant="body2"
                  color="error.main"
                  gutterBottom
                >
                  *
                </Typography>
              </Typography>
              <TextField
                id="id_discrepancy_template"
                color="secondary"
                variant="outlined"
                size="small"
                fullWidth
                select
                value={routeFor}
                onChange={(event) => {
                  setRouteFor(event.target.value);
                }}
              >
                {discrepancyTemplateList.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Description
              </Typography>
              <TextField
                id="id_description"
                color="secondary"
                value={description}
                fullWidth
                multiline
                rows={4}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Stack
                spacing={0.5}
                direction="column"
                alignItems="left"
                sx={{ mb: 1.3 }}
              >
                <Typography variant="body2">Assign To:</Typography>
                <ToggleButtonGroup
                  exclusive
                  value={assignTo}
                  onChange={handleAssignTo}
                  size="small"
                >
                  <ToggleButton
                    color="secondary"
                    value="user"
                    sx={{ width: 90, height: 30, lineHeight: 0.75 }}
                  >
                    User
                  </ToggleButton>
                  <ToggleButton
                    color="secondary"
                    value="group"
                    sx={{ width: 90, height: 30, lineHeight: 0.75 }}
                  >
                    Group
                  </ToggleButton>
                  <ToggleButton
                    color="secondary"
                    value="to_me"
                    sx={{ width: 90, height: 30, lineHeight: 0.75 }}
                  >
                    To me
                  </ToggleButton>
                </ToggleButtonGroup>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="body2" gutterBottom>
                Select Users
                <Typography
                  component="span"
                  variant="body2"
                  color="error.main"
                  gutterBottom
                >
                  *
                </Typography>
              </Typography>
              <Autocomplete
                multiple
                id="assessment_user"
                options={userList}
                getOptionLabel={(option) => option.label}
                size="small"
                value={userEmail}
                onChange={(event, newValue) => {
                  setUserEmail(newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Select User" />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="body2" gutterBottom>
                Target Date
                <Typography
                  component="span"
                  variant="body2"
                  color="error.main"
                  gutterBottom
                >
                  *
                </Typography>
              </Typography>
              <DatePicker
                id="assign_target_date"
                value={targetDate}
                onChange={(newValue) => setTargetDate(newValue)}
                slotProps={{
                  textField: {
                    size: "small",
                    fullWidth: true,
                  },
                }}
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
            color="error"
          >
            Cancel
          </Button>
          <Button
            onClick={handleUpdate}
            autoFocus
            variant="contained"
            disableElevation
            size="large"
            color="inherit"
          >
            Reset
          </Button>
          <Button
            onClick={handleUpdate}
            autoFocus
            variant="contained"
            disableElevation
            size="large"
            color="success"
          >
            Initiate
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default InitiateDiscrepancy;
