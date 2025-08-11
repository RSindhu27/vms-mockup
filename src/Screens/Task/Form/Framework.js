import {
  Box,
  Grid,
  Tab,
  Tabs,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { CompoWrapper } from "../../../Components/Page";
import FrameworkList from "./FrameworkList";
import TaskList from "./TaskList";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`new-document-type-${index}`}
      aria-labelledby={`new-document-type-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function Framework() {
  const [value, setValue] = useState(0);
  const [task, setTask] = useState("yes");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleTask = (event, newType) => {
    setTask(newType);
  };

  return (
    <>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Typography variant="h6">Selected Entity Form</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            <b>Task dependency required?</b>
            <Typography
              component="span"
              variant="body2"
              color="error.main"
              gutterBottom
            >
              *
            </Typography>
          </Typography>
        </Grid>
        <Grid item>
          <ToggleButtonGroup
            exclusive
            value={task}
            onChange={handleTask}
            size="small"
          >
            <ToggleButton
              color="secondary"
              value="yes"
              sx={{ width: 60, height: 30 }}
            >
              Yes
            </ToggleButton>
            <ToggleButton
              color="error"
              value="no"
              sx={{ width: 60, height: 30 }}
            >
              No
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
      </Grid>
      <Box sx={{ p: 1, boxSizing: "border-box" }}></Box>
      <CompoWrapper sx={{ p: 0 + "!important" }}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab label="Framework 1" />
              <Tab label="Framework 2" />
              <Tab label="Task Dependency" />
            </Tabs>
          </Grid>
          <Grid item xs={12}>
            <CustomTabPanel value={value} index={0}>
              <FrameworkList />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <FrameworkList />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <TaskList />
            </CustomTabPanel>
          </Grid>
        </Grid>
      </CompoWrapper>
    </>
  );
}

export default Framework;
