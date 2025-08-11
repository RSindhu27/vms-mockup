import {
  Button,
  ButtonGroup,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

function LifecycleSettings() {
  const [reviewPeriod, setReviewPeriod] = useState("yes");
  const [retentionPeriod, setRetentionPeriod] = useState("yes");
  const [periodDuration, setPeriodDuration] = useState("days");
  const [retentionPeriodDuration, setRetentionPeriodDuration] = useState("");
  const [reminderStarts, setReminderStarts] = useState("days");
  const [scheduleInDaily, setScheduleInDaily] = useState("");
  const [scheduleInWeekly, setScheduleInWeekly] = useState("");
  const [scheduleInMonthly, setScheduleInMonthly] = useState("");

  const handleReviewPeriod = (value) => {
    if (value === "yes") return "Yes";
    else return "No";
  };

  const handleRetentionPeriod = (value) => {
    if (value === "yes") return "Yes";
    else return "No";
  };

  const handlePeriodDuration = (value) => {
    if (value === "days") return "Days";
    else return "Months";
  };

  const handleReminderStarts = (value) => {
    if (value === "days") return "Days";
    else return "Weeks";
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <Typography variant="body1" gutterBottom>
          Review Period Applicable/Not:{" "}
          <b>{handleReviewPeriod(reviewPeriod)}</b>
        </Typography>
        <ButtonGroup
          disableElevation
          variant="contained"
          color="secondary"
          size="small"
        >
          <Button
            sx={{
              bgcolor: reviewPeriod === "yes" ? "secondary.main" : "grey.200",
              color:
                reviewPeriod === "yes"
                  ? "secondary.contrastText"
                  : "text.secondary",
              "&:hover": {
                color: "secondary.contrastText",
              },
            }}
            onClick={() => setReviewPeriod("yes")}
          >
            Yes
          </Button>
          <Button
            sx={{
              bgcolor: reviewPeriod === "no" ? "secondary.main" : "grey.200",
              color:
                reviewPeriod === "no"
                  ? "secondary.contrastText"
                  : "text.secondary",
              "&:hover": {
                color: "secondary.contrastText",
              },
            }}
            onClick={() => setReviewPeriod("no")}
          >
            No
          </Button>
        </ButtonGroup>
      </Grid>
      {reviewPeriod === "no" ? (
        <>
          <Grid item xs={12} sm={6} md={8}>
            <Typography variant="body1" gutterBottom>
              Retention Period Applicable:{" "}
              <b>{handleRetentionPeriod(retentionPeriod)}</b>
            </Typography>
            <ButtonGroup
              disableElevation
              variant="contained"
              color="secondary"
              size="small"
            >
              <Button
                sx={{
                  bgcolor:
                    retentionPeriod === "yes" ? "secondary.main" : "grey.200",
                  color:
                    retentionPeriod === "yes"
                      ? "secondary.contrastText"
                      : "text.secondary",
                  "&:hover": {
                    color: "secondary.contrastText",
                  },
                }}
                onClick={() => setRetentionPeriod("yes")}
              >
                Yes
              </Button>
              <Button
                sx={{
                  bgcolor:
                    retentionPeriod === "no" ? "secondary.main" : "grey.200",
                  color:
                    retentionPeriod === "no"
                      ? "secondary.contrastText"
                      : "text.secondary",
                  "&:hover": {
                    color: "secondary.contrastText",
                  },
                }}
                onClick={() => setRetentionPeriod("no")}
              >
                No
              </Button>
            </ButtonGroup>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="body1" gutterBottom>
              Retention Period Duration:{" "}
              <b>{handlePeriodDuration(periodDuration)}</b>
            </Typography>
            <ButtonGroup
              disableElevation
              variant="contained"
              color="secondary"
              size="small"
            >
              <Button
                sx={{
                  bgcolor:
                    periodDuration === "days" ? "secondary.main" : "grey.200",
                  color:
                    periodDuration === "days"
                      ? "secondary.contrastText"
                      : "text.secondary",
                  "&:hover": {
                    color: "secondary.contrastText",
                  },
                }}
                onClick={() => setPeriodDuration("days")}
              >
                Days
              </Button>
              <Button
                sx={{
                  bgcolor:
                    periodDuration === "months" ? "secondary.main" : "grey.200",
                  color:
                    periodDuration === "months"
                      ? "secondary.contrastText"
                      : "text.secondary",
                  "&:hover": {
                    color: "secondary.contrastText",
                  },
                }}
                onClick={() => setPeriodDuration("months")}
              >
                Months
              </Button>
            </ButtonGroup>
          </Grid>
          <Grid item xs={12} sm={6} md={8}>
            <Typography variant="body2" gutterBottom>
              Retention Period Duration
            </Typography>
            <TextField
              id="doc-type-retention-period-duration"
              placeholder={
                periodDuration === "days" ? "Enter Days" : "Enter Months"
              }
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              value={retentionPeriodDuration}
              onChange={(event) => {
                setRetentionPeriodDuration(event.target.value);
              }}
            />
          </Grid>
        </>
      ) : (
        <>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <Typography variant="body1" gutterBottom>
                  Review Period Duration:{" "}
                  <b>{handlePeriodDuration(periodDuration)}</b>
                </Typography>
                <ButtonGroup
                  disableElevation
                  variant="contained"
                  color="secondary"
                  size="small"
                >
                  <Button
                    sx={{
                      bgcolor:
                        periodDuration === "days"
                          ? "secondary.main"
                          : "grey.200",
                      color:
                        periodDuration === "days"
                          ? "secondary.contrastText"
                          : "text.secondary",
                      "&:hover": {
                        color: "secondary.contrastText",
                      },
                    }}
                    onClick={() => setPeriodDuration("days")}
                  >
                    Days
                  </Button>
                  <Button
                    sx={{
                      bgcolor:
                        periodDuration === "months"
                          ? "secondary.main"
                          : "grey.200",
                      color:
                        periodDuration === "months"
                          ? "secondary.contrastText"
                          : "text.secondary",
                      "&:hover": {
                        color: "secondary.contrastText",
                      },
                    }}
                    onClick={() => setPeriodDuration("months")}
                  >
                    Months
                  </Button>
                </ButtonGroup>
              </Grid>
              <Grid item xs={12} sm={6} md={8}>
                <Typography variant="body2" gutterBottom>
                  Review Period Duration
                </Typography>
                <TextField
                  id="doc-type-retention-period-duration"
                  placeholder={
                    periodDuration === "days" ? "Enter Days" : "Enter Months"
                  }
                  color="secondary"
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={retentionPeriodDuration}
                  onChange={(event) => {
                    setRetentionPeriodDuration(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Typography variant="body1" gutterBottom>
                  Prior Reminder Starts from:{" "}
                  <b>{handleReminderStarts(reminderStarts)}</b>
                </Typography>
                <ButtonGroup
                  disableElevation
                  variant="contained"
                  color="secondary"
                  size="small"
                >
                  <Button
                    sx={{
                      bgcolor:
                        reminderStarts === "days"
                          ? "secondary.main"
                          : "grey.200",
                      color:
                        reminderStarts === "days"
                          ? "secondary.contrastText"
                          : "text.secondary",
                      "&:hover": {
                        color: "secondary.contrastText",
                      },
                    }}
                    onClick={() => setReminderStarts("days")}
                  >
                    Days
                  </Button>
                  <Button
                    sx={{
                      bgcolor:
                        reminderStarts === "weeks"
                          ? "secondary.main"
                          : "grey.200",
                      color:
                        reminderStarts === "weeks"
                          ? "secondary.contrastText"
                          : "text.secondary",
                      "&:hover": {
                        color: "secondary.contrastText",
                      },
                    }}
                    onClick={() => setReminderStarts("weeks")}
                  >
                    Weeks
                  </Button>
                </ButtonGroup>
              </Grid>
              <Grid item xs={12} sm={6} md={8}>
                <Typography variant="body2" gutterBottom>
                  Prior Reminder Starts from in{" "}
                  {reminderStarts === "days" ? "Days" : "Weeks"}
                </Typography>
                <TextField
                  id="doc-type-retention-period-duration"
                  placeholder={
                    reminderStarts === "days" ? "Enter Days" : "Enter Weeks"
                  }
                  color="secondary"
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={retentionPeriodDuration}
                  onChange={(event) => {
                    setRetentionPeriodDuration(event.target.value);
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" gutterBottom>
              Reminder Recurrence Schedule
            </Typography>
            <FormGroup row>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Daily"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Weekly"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Monthly"
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="body2" gutterBottom>
              Reminder Recurrence Schedule in Daily
            </Typography>
            <TextField
              id="doc-type-schedule-in-Daily"
              placeholder="Daily"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              value={scheduleInDaily}
              onChange={(event) => {
                setScheduleInDaily(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="body2" gutterBottom>
              Reminder Recurrence Schedule in Weekly
            </Typography>
            <TextField
              id="doc-type-schedule-in-weekly"
              placeholder="Weekly"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              value={scheduleInWeekly}
              onChange={(event) => {
                setScheduleInWeekly(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="body2" gutterBottom>
              Reminder Recurrence Schedule in Monthly
            </Typography>
            <TextField
              id="doc-type-schedule-in-monthly"
              placeholder="Monthly"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              value={scheduleInMonthly}
              onChange={(event) => {
                setScheduleInMonthly(event.target.value);
              }}
            />
          </Grid>
        </>
      )}
    </Grid>
  );
}

export default LifecycleSettings;
