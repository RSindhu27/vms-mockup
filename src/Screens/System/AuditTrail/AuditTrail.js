import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import {
  CustomTab,
  CustomTabs,
  CustomTabPanel,
  CustomTabsRight,
} from "../../../Components/Tabs";
import { CompoWrapper } from "../../../Components/Page/Containers";
import { PageButton } from "../../../Components/Page";
import Department from "./Department/Department";
import Division from "./Division";
import AddNewEventCategory from "./AddNewEventCategory";
import RemoveEventCategory from "./RemoveEventCategory";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

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

const eventCategoryList = [
  { label: "Category 1" },
  { label: "Category 2" },
  { label: "Category 3" },
  { label: "Category 4" },
  { label: "Category 5" },
];

function AuditTrail() {
  const [eventCategory, setEventCategory] = useState("");
  const [selectEvent, setSelectEvent] = useState("");
  const [selectConditionEvent, setSelectConditionEvent] = useState("");
  const [selectCondition, setSelectCondition] = useState("");
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState(dayjs());
  const [value, setValue] = useState(0);

  const [allDay, setAllDay] = useState(false);

  const handleAddDay = (event) => {
    setAllDay(event.target.checked);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <CompoWrapper>
        <Grid container spacing={2}>
          <Grid item xs={12} sm>
            <Typography variant="body2" gutterBottom>
              Enter Category Name
            </Typography>
            <Autocomplete
              id="audit_trail_event_category"
              size="small"
              fullWidth
              disablePortal
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
          <Grid item xs={12} sm>
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
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <Grid container spacing={2} alignItems="end">
              <Grid item xs={12} sm>
                <Typography variant="body2" gutterBottom>
                  Select Date
                </Typography>
                <DatePicker
                  value={startDate}
                  onChange={(newValue) => setStartDate(newValue)}
                  disabled={allDay}
                  slotProps={{
                    textField: {
                      size: "small",
                      fullWidth: true,
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm>
                <Typography variant="body2" gutterBottom>
                  Select Date
                </Typography>
                <DatePicker
                  value={startDate}
                  onChange={(newValue) => setStartDate(newValue)}
                  disabled={allDay}
                  slotProps={{
                    textField: {
                      size: "small",
                      fullWidth: true,
                    },
                  }}
                />
              </Grid>
              <Grid item>
                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  spacing={2}
                >
                  <Typography>
                    <b>Or</b>
                  </Typography>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox checked={allDay} onChange={handleAddDay} />
                      }
                      label="All Day"
                    />
                  </FormGroup>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box p={1} />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md>
            <Typography variant="body2" gutterBottom>
              Select User
            </Typography>
            <Autocomplete
              id="audit_trail_user"
              multiple
              limitTags={1}
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
          <Grid item xs={12} sm={6} md>
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
          <Grid item xs={12} sm={6} md>
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
          <Grid item xs={12} sm={6} md>
            <Typography variant="body2" gutterBottom>
              Enter Name
            </Typography>
            <TextField
              id="audit_trail_enter_name"
              variant="outlined"
              size="small"
              fullWidth
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </Grid>
        </Grid>
        <Box p={1} />
        <Grid
          container
          spacing={2}
          alignItems="end"
          justifyContent="space-between"
        >
          <Grid item>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Show Identification ID"
              />
            </FormGroup>
          </Grid>
          <Grid item>
            <Grid container spacing={2}>
              <Grid item>
                <AddNewEventCategory />
              </Grid>
              <Grid item>
                <PageButton variant="contained" color="primary">
                  Generate
                </PageButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CompoWrapper>
      <Box p={1} />
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <Typography>
            Audit Report- <b>18978888</b>
          </Typography>
        </Grid>
        <Grid item>
          <Stack direction="row" spacing={2}>
            <Button color="info">
              <u>Reset All Filters</u>
            </Button>
            <RemoveEventCategory />
          </Stack>
        </Grid>
      </Grid>
      <Box p={1} />
      <Box width={100 + "%"}>
        <Box position="relative">
          <CustomTabsRight>
            <Grid
              container
              spacing={2}
              justifyContent="flex-end"
              alignItems="center"
            >
              <Grid item>
                <Typography variant="body2" color="text.secondary">
                  <b>23rd Oct 2023 | 15:23 42 (GMT+5:30)</b>
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  color="secondary"
                  variant="text"
                  startIcon={<FileDownloadIcon />}
                >
                  Download
                </Button>
              </Grid>
            </Grid>
          </CustomTabsRight>
          <CustomTabs value={value} onChange={handleChange}>
            <CustomTab label="Department" />
            <CustomTab label="Division" />
          </CustomTabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Department />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Division />
        </CustomTabPanel>
      </Box>
    </>
  );
}

export default AuditTrail;
