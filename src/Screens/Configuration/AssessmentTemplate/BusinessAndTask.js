import {
  Box,
  Grid,
  Stack,
  Tab,
  Tabs,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { CompoWrapper } from "../../../Components/Page";
import BusinessRuleList from "./Forms/BusinessRuleList";
import TaskList from "./Forms/TaskList";

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
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function BusinessAndTask() {
  const [value, setValue] = useState(0);

  const [taskDepends, setTaskDepends] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleTaskDepends = (event, newType) => {
    setTaskDepends(newType);
  };

  return (
    <>
      <CompoWrapper sx={{ p: 0 + "!important" }}>
        <Grid container spacing={0}>
          <Grid item xs>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab label="Business Rule List" />
              {taskDepends && <Tab label="Task Dependency" />}
            </Tabs>
          </Grid>
          <Grid item>
            <Box sx={{ p: 1 }}>
              <Stack spacing={2} direction="row" alignItems="center">
                <Typography variant="body1">
                  <b>Task dependency required ?</b>
                </Typography>
                <ToggleButtonGroup
                  exclusive
                  value={taskDepends}
                  onChange={handleTaskDepends}
                  size="small"
                >
                  <ToggleButton
                    color="secondary"
                    value={true}
                    sx={{ width: 60, height: 30, lineHeight: 0.75 }}
                  >
                    Yes
                  </ToggleButton>
                  <ToggleButton
                    color="error"
                    value={false}
                    sx={{ width: 60, height: 30, lineHeight: 0.75 }}
                  >
                    No
                  </ToggleButton>
                </ToggleButtonGroup>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <CustomTabPanel value={value} index={0}>
              <BusinessRuleList />
            </CustomTabPanel>
            {taskDepends && (
              <CustomTabPanel value={value} index={1}>
                <TaskList />
              </CustomTabPanel>
            )}
          </Grid>
        </Grid>
      </CompoWrapper>
    </>
  );
}

export default BusinessAndTask;
