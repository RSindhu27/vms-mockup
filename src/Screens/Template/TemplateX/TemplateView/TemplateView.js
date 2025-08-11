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
import { PageButton, TabWrapper } from "../../../../Components/Page";
import TemplateX from "./TemplateX";
import TemplateDetails from "./TemplateDetails";
import CommentBox from "./CommentBox";
import PropTypes from "prop-types";
import TemplateHistory from "./TemplateHistory";
import TemplateChanges from "./TemplateChanges";

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

function TemplateView() {
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
              CSV-Template ARCODMC00023
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12}>
          <Grid
            container
            spacing={1}
            alignItems="center"
            justifyContent="flex-end"
          >
            <Grid item>
              {value === 1 ? (
                <Button color="secondary" onClick={() => handleChange(0)}>
                  Hide Template Details
                </Button>
              ) : (
                <Button color="secondary" onClick={() => handleChange(1)}>
                  Show Template Details
                </Button>
              )}
            </Grid>
            <Grid item>
              {value === 2 ? (
                <Button color="secondary" onClick={() => handleChange(0)}>
                  Hide History
                </Button>
              ) : (
                <Button color="secondary" onClick={() => handleChange(2)}>
                  Show History
                </Button>
              )}
            </Grid>
            <Grid item>
              {value === 3 ? (
                <Button color="secondary" onClick={() => handleChange(0)}>
                  Hide Template Changes
                </Button>
              ) : (
                <Button color="secondary" onClick={() => handleChange(3)}>
                  Show Template Changes
                </Button>
              )}
            </Grid>
            <Grid item>
              <Button color="secondary" onClick={handelShowMessage}>
                {showMessage ? "Hide Comment" : "Show Comment"}
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={showMessage ? 8 : 12}>
          <TabWrapper>
            <CustomTabPanel value={value} index={0}>
              <TemplateX />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <TemplateDetails onClose={() => handleChange(0)} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <TemplateHistory onClose={() => handleChange(0)} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
              <TemplateChanges onClose={() => handleChange(0)} />
            </CustomTabPanel>
          </TabWrapper>
        </Grid>
        {showMessage && (
          <Grid item xs={4} sm={12} md={4}>
            <TabWrapper>
              <CommentBox />
            </TabWrapper>
          </Grid>
        )}
      </Grid>
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
          <PageButton color="info">Send Back</PageButton>
        </Box>
        <Box>
          <PageButton color="primary">Approve</PageButton>
        </Box>
      </Stack>
    </>
  );
}

export default TemplateView;
