import React from "react";
import { Box, Button, Grid, Stack, Tab, Tabs } from "@mui/material";
import { PageButton, TabWrapper } from "../../../Components/Page";
import PropTypes from "prop-types";
import { GeneralDetails, SystemDataField } from "./NewTemplate/";

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

function NewTemplate() {
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
              <Tab label="System Data Field" />
            </Tabs>
          </Grid>
          <Grid xs={12}>
            <CustomTabPanel value={value} index={0}>
              <GeneralDetails />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <SystemDataField />
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
          {value !== 1 ? (
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

export default NewTemplate;
