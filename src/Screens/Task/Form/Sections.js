import { Box, Grid, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { CompoWrapper } from "../../../Components/Page";
import SectionDetails from "./SectionDetails";

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

function Sections({ transfer }) {
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
              <Tab label="GXP Assessment" />
              <Tab label="Section 2" />
            </Tabs>
          </Grid>
          <Grid item xs={12}>
            <CustomTabPanel value={value} index={0}>
              <SectionDetails transfer={transfer} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <SectionDetails transfer={transfer} />
            </CustomTabPanel>
          </Grid>
        </Grid>
      </CompoWrapper>
    </>
  );
}

export default Sections;
