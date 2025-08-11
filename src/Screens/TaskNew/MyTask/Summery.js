import React from "react";
import { Box, Grid, Tab, Tabs } from "@mui/material";
import PropTypes from "prop-types";
import ExecutionSummary from "./Tabs/ExecutionSummary";
import Discrepancy from "./Tabs/Discrepancy";

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

function Summery() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid container>
        <Grid xs={12}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="Execution Summary" />
            <Tab label="Discrepancy Summary" />
            <Tab label="Analysis" />
            <Tab label="Conclusion" />
          </Tabs>
        </Grid>
        <Grid xs={12}>
          <CustomTabPanel value={value} index={0}>
            <ExecutionSummary />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Discrepancy />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            Analysis
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            Conclusion
          </CustomTabPanel>
        </Grid>
      </Grid>
    </>
  );
}

export default Summery;
