import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Box,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { PopupContainer } from "../../../Components/Page";
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
      {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function Questions({ addQuestion }) {
  const [justification, setJustification] = useState("");
  const [value, setValue] = useState("yes");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="body1">
            <b>{addQuestion}</b>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <RadioGroup row value={value} onChange={handleChange}>
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" gutterBottom>
            Justification
          </Typography>
          <TextField
            id="q1_justification"
            fullWidth
            size="small"
            value={justification}
            placeholder="Enter Justification"
            onChange={(event) => {
              setJustification(event.target.value);
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}

function PerformanceAssessment() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);

  const handleChange = (valueX) => {
    var newValue = 0;
    if (valueX === "next") {
      newValue = value + 1;
    } else if (valueX === "previous") {
      newValue = value - 1;
    }
    setValue(newValue);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        color="secondary"
        variant="text"
        disableElevation
        onClick={handleClickOpen}
        sx={{ textDecoration: "underline" }}
      >
        Performance Assessment
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle sx={{ borderBottom: 1, borderColor: "divider" }}>
          CSV Decision Tree - Select Answer
        </DialogTitle>
        <PopupContainer>
          <CustomTabPanel value={value} index={0}>
            <Questions key="0" addQuestion="Q1. Is this right question?" />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Questions key="1" addQuestion="Q2. Is this right question?" />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <Questions key="2" addQuestion="Q3. Is this right question?" />
          </CustomTabPanel>
          {value === 2 && (
            <>
              <Box sx={{ p: 1, boxSizing: "border-box" }}></Box>
              <Typography variant="body1" color="success.main">
                Questionnaire has been completed, are you sure to submit?
              </Typography>
            </>
          )}
        </PopupContainer>

        <DialogActions>
          <Button
            onClick={handleClose}
            variant="outlined"
            disableElevation
            size="large"
            color="error"
          >
            Cancel
          </Button>
          <Button
            onClick={handleClose}
            autoFocus
            variant="contained"
            disableElevation
            size="large"
            color="info"
          >
            Save
          </Button>
          {value !== 0 && (
            <Button
              onClick={() => handleChange("previous")}
              autoFocus
              variant="outlined"
              disableElevation
              size="large"
              color="success"
            >
              Previous
            </Button>
          )}
          {value !== 2 && (
            <Button
              onClick={() => handleChange("next")}
              autoFocus
              variant="outlined"
              disableElevation
              size="large"
              color="success"
            >
              Next
            </Button>
          )}
          {value === 2 && (
            <Button
              onClick={() => handleChange("next")}
              autoFocus
              variant="contained"
              disableElevation
              size="large"
              color="success"
            >
              Complete
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
}

export default PerformanceAssessment;
