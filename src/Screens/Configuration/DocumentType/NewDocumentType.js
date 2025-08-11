import React from "react";
import { Box, Button, Grid, Stack } from "@mui/material";
import { PageButton, TabWrapper } from "../../../Components/Page";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import GeneralDetails from "./GeneralDetails";
import LifecycleSettings from "./LifecycleSettings";
import Notification from "./Notification";
import SystemDataField from "./SystemDataField";
import Workflow from "./Workflow";
import Templates from "./Templates";

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

function NewDocumentType() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleBack = (newValue) => {
    setValue(newValue);
  };

  const handleNext = (newValue) => {
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
              <Tab label="General Details" />
              <Tab label="Templates" />
              <Tab label="System Data Field" />
              <Tab label="Workflow" />
              <Tab label="Lifecycle Settings" />
              <Tab label="Notification" />
            </Tabs>
          </Grid>
          <Grid xs={12}>
            <CustomTabPanel value={value} index={0}>
              <GeneralDetails />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <Templates />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <SystemDataField />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
              <Workflow />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
              <LifecycleSettings />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={5}>
              <Notification />
            </CustomTabPanel>
          </Grid>
        </Grid>
        <Box p={1} />
        <Stack
          spacing={2}
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
        >
          {value !== 0 ? (
            <Button
              variant="outlined"
              color="inherit"
              disableElevation
              onClick={() => handleBack(value - 1)}
            >
              Back
            </Button>
          ) : (
            ""
          )}
          {value !== 4 ? (
            <Button
              variant="contained"
              color="inherit"
              disableElevation
              onClick={() => handleNext(value + 1)}
            >
              Next
            </Button>
          ) : (
            ""
          )}
        </Stack>
      </TabWrapper>
      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        py={2}
        spacing={2}
      >
        <Box>
          <PageButton color="error">Cancel</PageButton>
        </Box>
        <Box>
          <PageButton color="primary">Save</PageButton>
        </Box>
      </Stack>
    </>
  );
}

export default NewDocumentType;
