import { useState } from "react";
import {
  Box,
  Grid,
  Tab,
  Tabs,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { CompoWrapper } from "../../../../Components/Page";
import FrameworkList from "./FrameworkList";
import TaskList from "./TaskList";
import Data from "./DataTwo.json";

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

function AssociatedFrameworks() {
  const [taskDependency, setTaskDependency] = useState("yes");
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleTaskDependency = (event, newType) => {
    console.log(newType);
    if (newType === "no" && value === 2) {
      setValue(0);
      setTaskDependency(newType);
    } else {
      setTaskDependency(newType);
    }
  };

  return (
    <>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Typography variant="body1" gutterBottom>
            <b>Associated Frameworks:</b>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" gutterBottom>
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
            value={taskDependency}
            onChange={handleTaskDependency}
            size="small"
          >
            <ToggleButton
              color="secondary"
              value="yes"
              sx={{ width: 60, height: 30, lineHeight: 0.75 }}
            >
              Yes
            </ToggleButton>
            <ToggleButton
              color="error"
              value="no"
              sx={{ width: 60, height: 30, lineHeight: 0.75 }}
            >
              No
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
        <Grid item xs={12}>
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
                  {taskDependency === "yes" && <Tab label="Task Dependency" />}
                </Tabs>
              </Grid>
              <Grid item xs={12}>
                <CustomTabPanel value={value} index={0}>
                  <FrameworkList data={Data.one} />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                  <FrameworkList data={Data.two} />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                  <TaskList />
                </CustomTabPanel>
              </Grid>
            </Grid>
          </CompoWrapper>
        </Grid>
      </Grid>
    </>
  );
}

export default AssociatedFrameworks;
