import React from "react";
import { TabWrapper } from "../../../Components/Page";
import {
  AllTemplate,
  ActiveTemplate,
  InactiveTemplate,
  WipTemplate,
  TerminatedTemplate,
  SupersededTemplate,
} from "./Tables";
import { Box, Grid, Tab, Tabs } from "@mui/material";
import PropTypes from "prop-types";

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

function TemplateList() {
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
              <Tab label="All" />
              <Tab label="Active" />
              <Tab label="Inactive" />
              <Tab label="WIP" />
              <Tab label="Terminated" />
              <Tab label="Suspended" />
            </Tabs>
          </Grid>
          <Grid xs={12}>
            <CustomTabPanel value={value} index={0}>
              <AllTemplate />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <ActiveTemplate />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <InactiveTemplate />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
              <WipTemplate />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
              <TerminatedTemplate />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={5}>
              <SupersededTemplate />
            </CustomTabPanel>
          </Grid>
        </Grid>
      </TabWrapper>
    </>
  );
}

export default TemplateList;
