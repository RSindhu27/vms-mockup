import { Box, Grid, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { CompoWrapper } from "../../../../Components/Page";
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <CompoWrapper sx={{ p: 0 + "!important" }}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab label="Task Dependency" />
              <Tab label="Framework 1" />
              <Tab label="Framework 2" />
            </Tabs>
          </Grid>
          <Grid item xs={12}>
            <CustomTabPanel value={value} index={0}>
              <TaskList />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <FrameworkList />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <FrameworkList />
            </CustomTabPanel>
          </Grid>
        </Grid>
      </CompoWrapper>
    </>
  );
}

export default Framework;
