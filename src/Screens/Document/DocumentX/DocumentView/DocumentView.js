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
import DocumentDetails from "./DocumentDetails";
import CommentBox from "./CommentBox";
import PropTypes from "prop-types";
import DocumentHistory from "./DocumentHistory";
import DocumentChanges from "./DocumentChanges";
import PrintDoc from "./PrintDoc";

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
                <Button
                  color="secondary"
                  size="small"
                  onClick={() => handleChange(0)}
                >
                  Hide Document Details
                </Button>
              ) : (
                <Button
                  color="secondary"
                  size="small"
                  onClick={() => handleChange(1)}
                >
                  Show Document Details
                </Button>
              )}
            </Grid>
            <Grid item>
              {value === 2 ? (
                <Button
                  color="secondary"
                  size="small"
                  onClick={() => handleChange(0)}
                >
                  Hide History
                </Button>
              ) : (
                <Button
                  color="secondary"
                  size="small"
                  onClick={() => handleChange(2)}
                >
                  Show History
                </Button>
              )}
            </Grid>
            <Grid item>
              {value === 3 ? (
                <Button
                  color="secondary"
                  size="small"
                  onClick={() => handleChange(0)}
                >
                  Hide Document Changes
                </Button>
              ) : (
                <Button
                  color="secondary"
                  size="small"
                  onClick={() => handleChange(3)}
                >
                  Show Document Changes
                </Button>
              )}
            </Grid>
            <Grid item>
              <Button
                color="secondary"
                size="small"
                onClick={handelShowMessage}
              >
                {showMessage ? "Hide Comment" : "Show Comment"}
              </Button>
            </Grid>
            <Grid item>
              <PrintDoc fileName="ARCODMC00023" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={showMessage ? 8 : 12}>
          <TabWrapper>
            <CustomTabPanel value={value} index={0}>
              <DocumentX />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <DocumentDetails onClose={() => handleChange(0)} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <DocumentHistory onClose={() => handleChange(0)} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
              <DocumentChanges onClose={() => handleChange(0)} />
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

export default DocumentView;
