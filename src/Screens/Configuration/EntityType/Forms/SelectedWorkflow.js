import React, { useState } from "react";
import {
  Box,
  Grid,
  MenuItem,
  Paper,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { TableDeleteRow } from "../../../../Components/Table";

const optionList = [
  {
    value: 1,
    label: "Option 1",
  },
  {
    value: 2,
    label: "Option 2",
  },
  {
    value: 3,
    label: "Option 3",
  },
];

function Workflow({ id }) {
  const [assessmentRequired, setAssessmentRequired] = useState("yes");
  const [reviews, setReviews] = useState(1);
  const [functionalRole, setFunctionalRole] = useState(1);
  const [duration, setDuration] = useState();
  const [alertDays, setAlertDays] = useState();

  const handleAssessmentRequired = (event, newType) => {
    setAssessmentRequired(newType);
  };

  return (
    <Paper elevation={2} sx={{ p: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs>
              <Typography variant="body2" color="info.main">
                Review
              </Typography>
            </Grid>
            <Grid item>
              <ToggleButtonGroup
                exclusive
                value={assessmentRequired}
                onChange={handleAssessmentRequired}
                size="small"
              >
                <ToggleButton color="secondary" value="yes" sx={{ width: 80 }}>
                  Parallel
                </ToggleButton>
                <ToggleButton color="info" value="no" sx={{ width: 60 }}>
                  Serial
                </ToggleButton>
              </ToggleButtonGroup>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    p: 0.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: 5,
                    borderRadius: 50 + "%",
                  }}
                >
                  <Typography variant="h4">
                    <b>{id}</b>
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs>
                <Grid container spacing={1} alignItems="center">
                  <Grid item xs={8}>
                    <Typography variant="body2" gutterBottom>
                      Reviews
                      <Typography
                        component="span"
                        color="error.main"
                        gutterBottom
                      >
                        *
                      </Typography>
                    </Typography>
                    <TextField
                      id="workflow_reviews"
                      color="secondary"
                      variant="outlined"
                      size="small"
                      fullWidth
                      select
                      value={reviews}
                      onChange={(event) => {
                        setReviews(event.target.value);
                      }}
                    >
                      {optionList.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="body2" gutterBottom>
                      Duration
                      <Typography
                        component="span"
                        color="error.main"
                        gutterBottom
                      >
                        *
                      </Typography>
                    </Typography>
                    <TextField
                      id="workflow_durations"
                      color="secondary"
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={duration}
                      onChange={(event) => {
                        setDuration(event.target.value);
                      }}
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <Typography variant="body2" gutterBottom>
                      Functional Role
                      <Typography
                        component="span"
                        color="error.main"
                        gutterBottom
                      >
                        *
                      </Typography>
                    </Typography>
                    <TextField
                      id="workflow_functional_role"
                      color="secondary"
                      variant="outlined"
                      size="small"
                      fullWidth
                      select
                      value={functionalRole}
                      onChange={(event) => {
                        setFunctionalRole(event.target.value);
                      }}
                    >
                      {optionList.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="body2" gutterBottom>
                      Alerts/Day
                      <Typography
                        component="span"
                        color="error.main"
                        gutterBottom
                      >
                        *
                      </Typography>
                    </Typography>
                    <TextField
                      id="workflow_alerts_days"
                      color="secondary"
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={alertDays}
                      onChange={(event) => {
                        setAlertDays(event.target.value);
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <TableDeleteRow onDelete={() => {}} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

function SelectedWorkflow() {
  return (
    <>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Selected Workflow:
          </Typography>
        </Grid>
        {/* Work Flow  */}
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <Workflow id="01" />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <Workflow id="02" />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <Workflow id="03" />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <Workflow id="04" />
        </Grid>
      </Grid>
    </>
  );
}

export default SelectedWorkflow;
