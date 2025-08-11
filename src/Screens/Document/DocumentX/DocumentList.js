import React from "react";
import { TabWrapper } from "../../../Components/Page";
import { AllDoc, MyDocument, Archived, PendingTask } from "./AllDocumentList";
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

function DocumentList() {
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
              <Tab label="My Documents" />
              <Tab label="Archived" />
              <Tab label="Pending Task" />
            </Tabs>
          </Grid>
          <Grid xs={12}>
            <CustomTabPanel value={value} index={0}>
              <AllDoc />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <MyDocument />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <Archived />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
              <PendingTask />
            </CustomTabPanel>
          </Grid>
        </Grid>
      </TabWrapper>
    </>
  );
}

export default DocumentList;
