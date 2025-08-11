import React from "react";
import { TabWrapper } from "../../Components/Page";
import {
  AllBinding,
  WorkInProgress,
  Completed,
  Rejected,
} from "./AllBindingList";
import { Box, Grid, Tab, Tabs } from "@mui/material";
import PropTypes from "prop-types";
import Terminated from "./AllBindingList/Terminated";

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
      {value === index && <Box sx={{ py: 2 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function BindingList() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <TabWrapper>
        <Grid container>
          <Grid xs={12}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab label="All- (21)" />
              <Tab label="WIP- (04)" />
              <Tab label="Completed- (16)" />
              <Tab label="Rejected- (01)" />
              <Tab label="Terminated- (02)" />
            </Tabs>
          </Grid>
          <Grid xs={12}>
            <CustomTabPanel value={value} index={0}>
              <AllBinding />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <WorkInProgress />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <Completed />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
              <Rejected />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
              <Terminated />
            </CustomTabPanel>
          </Grid>
        </Grid>
      </TabWrapper>
    </>
  );
}

export default BindingList;
