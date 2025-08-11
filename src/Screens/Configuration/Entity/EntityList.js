import React from "react";
import { TabWrapper } from "../../../Components/Page";
import { Box, Grid, Tab, Tabs } from "@mui/material";
import PropTypes from "prop-types";
import ActiveList from "./Tables/ActiveList";
import TerminatedList from "./Tables/TerminatedList";
import RetiredList from "./Tables/RetiredList";
import InactiveList from "./Tables/InactiveList";
import WipList from "./Tables/WipList";

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

function EntityList() {
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
              <Tab label="Active - (21)" />
              <Tab label="Inactive - (16)" />
              <Tab label="WIP - (04)" />
              <Tab label="Terminated - (15)" />
              <Tab label="Retired - (09)" />
            </Tabs>
          </Grid>
          <Grid xs={12}>
            <CustomTabPanel value={value} index={0}>
              <ActiveList />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <InactiveList />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <WipList />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
              <TerminatedList />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
              <RetiredList />
            </CustomTabPanel>
          </Grid>
        </Grid>
      </TabWrapper>
    </>
  );
}

export default EntityList;
