import React from "react";
import { TabWrapper } from "../../../../Components/Page";
import { Box, Grid, Tab, Tabs } from "@mui/material";
import PropTypes from "prop-types";
import AllDiscrepancies from "./Tables/AllDiscrepancies";
import WipDiscrepancies from "./Tables/WipDiscrepancies";

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

function Discrepancies() {
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
              <Tab label="All - (21)" />
              <Tab label="WIP - (04)" />
              <Tab label="Re-Execution - (15)" />
              <Tab label="Completed - (16)" />
            </Tabs>
          </Grid>
          <Grid xs={12}>
            <CustomTabPanel value={value} index={0}>
              <AllDiscrepancies />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <WipDiscrepancies />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              3
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
              4
            </CustomTabPanel>
          </Grid>
        </Grid>
      </TabWrapper>
    </>
  );
}

export default Discrepancies;
