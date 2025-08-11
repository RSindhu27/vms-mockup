import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import {
  Autocomplete,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { PageButton, PopupContainer } from "../../../Components/Page";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const eventCategoryList = [
  {
    value: 1,
    label: "Event Category 1",
  },
  {
    value: 2,
    label: "Event Category 2",
  },
  {
    value: 3,
    label: "Event Category 3",
  },
  {
    value: 4,
    label: "Event Category 4",
  },
  {
    value: 5,
    label: "Event Category 5",
  },
];

const eventList = [
  {
    value: 1,
    label: "Event 1",
  },
  {
    value: 2,
    label: "Event 2",
  },
  {
    value: 3,
    label: "Event 3",
  },
  {
    value: 4,
    label: "Event 4",
  },
  {
    value: 5,
    label: "Event 5",
  },
];

const userList = [
  {
    name: "Orsa Kelston",
    id: 1,
  },
  {
    name: "Ches Blaes",
    id: 2,
  },
  {
    name: "Ikey Dadd",
    id: 3,
  },
  {
    name: "Merwin Whiley",
    id: 4,
  },
  {
    name: "Ninette Ledur",
    id: 5,
  },
  {
    name: "Alon Greenhall",
    id: 6,
  },
  {
    name: "Theda Huggin",
    id: 7,
  },
  {
    name: "Analiese Cisar",
    id: 8,
  },
  {
    name: "Korrie Drewett",
    id: 9,
  },
  {
    name: "Purcell Congreve",
    id: 10,
  },
];

const conditionEventList = [
  {
    value: 1,
    label: "Condition Event 1",
  },
  {
    value: 2,
    label: "Condition Event 2",
  },
  {
    value: 3,
    label: "Condition Event 3",
  },
  {
    value: 4,
    label: "Condition Event 4",
  },
  {
    value: 5,
    label: "Condition Event 5",
  },
];

const conditionList = [
  {
    value: 1,
    label: "Condition 1",
  },
  {
    value: 2,
    label: "Condition 2",
  },
  {
    value: 3,
    label: "Condition 3",
  },
  {
    value: 4,
    label: "Condition 4",
  },
  {
    value: 5,
    label: "Condition 5",
  },
];

function AddNewEventCategory() {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const [selectEvent, setSelectEvent] = useState("");
  const [eventCategory, setEventCategory] = useState("");
  const [selectCondition, setSelectCondition] = useState("");
  const [selectConditionEvent, setSelectConditionEvent] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <PageButton color="primary" onClick={handleClickOpen}>
        Add New Event Category
      </PageButton>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle sx={{ borderBottom: 1, borderColor: "divider" }}>
          Add New Event Category
        </DialogTitle>
        <PopupContainer>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Select Event Category
              </Typography>
              <Autocomplete
                id="nec_event_category"
                size="small"
                fullWidth
                options={eventCategoryList}
                value={eventCategory}
                onChange={(event, newValue) => {
                  setEventCategory(newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Search Picklist" />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Select Event
              </Typography>
              <TextField
                id="audit_trail_event"
                variant="outlined"
                size="small"
                fullWidth
                select
                value={selectEvent}
                onChange={(event) => {
                  setSelectEvent(event.target.value);
                }}
              >
                {eventList.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Select User
              </Typography>
              <Autocomplete
                id="audit_trail_user"
                multiple
                size="small"
                options={userList}
                disableCloseOnSelect
                getOptionLabel={(option) => option.name}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8, padding: 0 }}
                      checked={selected}
                    />
                    {option.name}
                  </li>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Search User"
                    size="small"
                    fullWidth
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Show Identification ID"
                />
              </FormGroup>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Select Condition Event
              </Typography>
              <TextField
                id="audit_trail_condition_event"
                variant="outlined"
                size="small"
                fullWidth
                select
                value={selectConditionEvent}
                onChange={(event) => {
                  setSelectConditionEvent(event.target.value);
                }}
              >
                {conditionEventList.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Select Condition
              </Typography>
              <TextField
                id="audit_trail_Condition"
                variant="outlined"
                size="small"
                fullWidth
                select
                value={selectCondition}
                onChange={(event) => {
                  setSelectCondition(event.target.value);
                }}
              >
                {conditionList.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Enter Value
              </Typography>
              <TextField
                id="audit_trail_enter_value"
                variant="outlined"
                size="small"
                fullWidth
                value={value}
                onChange={(event) => {
                  setValue(event.target.value);
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

export default AddNewEventCategory;
