import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DocumentX from "./DocumentX";
import { PageButton, TabWrapper } from "../../../../Components/Page";
import PropTypes from "prop-types";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function DocumentView() {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const [showMessage, setShowMessage] = useState(true);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handelShowMessage = () => {
    setShowMessage(!showMessage);
  };

  return (
    <>
      <Box mb={2}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <IconButton onClick={() => navigate(-1)} color="secondary">
              <ArrowBackIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography variant="h5" component="p">
              CSV-Document ARCODMC00023
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <TabWrapper>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12}>
            <Stack direction="row" spacing={2} justifyContent="flex-end">
              <Button color="info" variant="contained" disableElevation>
                System Data Field
              </Button>
              <Button color="secondary" variant="contained" disableElevation>
                Task Details
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <DocumentX />
          </Grid>
        </Grid>
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
      </Stack>
    </>
  );
}

export default DocumentView;
