import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import { PopupContainer } from "../../../../Components/Page";
import HistoryUpdate from "./HistoryUpdate";

function WorkflowHistory() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button color="info" onClick={handleClickOpen}>
        History
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Grid container spacing={1}>
            <Grid item xs>
              <Typography variant="h6">
                Workflow History: CSV WORKFLOW
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6">Sequence: SERIAL</Typography>
            </Grid>
          </Grid>
        </DialogTitle>
        <PopupContainer>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container spacing={1}>
                <Grid item xs>
                  <Typography variant="body1">
                    <b>CSV Workflow: V02-</b>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1" sx={{ color: "info.main" }}>
                    Status:
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1" sx={{ color: "success.main" }}>
                    In Progress
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <HistoryUpdate
                key="review"
                process="Review"
                sequence="Serial"
                state="01"
                status="Rejected"
                checklist="Checklist 1"
              />
            </Grid>
            <Grid item xs={12}>
              <HistoryUpdate
                key="workflow_initiated"
                process="Workflow Initiated"
                sequence="Serial"
                state="01"
                status="Done"
                checklist="Checklist 1"
              />
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={1}>
                <Grid item xs>
                  <Typography variant="body1">
                    <b>CSV Workflow: V01-</b>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1" sx={{ color: "info.main" }}>
                    Status:
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1" sx={{ color: "error.main" }}>
                    Canceled
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <HistoryUpdate
                key="review"
                process="Review"
                sequence="Serial"
                state="01"
                status="Cancelled"
                reason="Timeline Expired"
                checklist="Checklist 1"
              />
            </Grid>
            <Grid item xs={12}>
              <HistoryUpdate
                key="workflow_initiated"
                process="Workflow Initiated"
                sequence="Serial"
                state="01"
                status="Done"
                checklist="Checklist 1"
              />
            </Grid>
          </Grid>
        </PopupContainer>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="contained"
            disableElevation
            size="large"
            color="inherit"
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="info"
            disableElevation
            size="large"
          >
            Download as PDF
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default WorkflowHistory;
