import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { Grid, Typography } from "@mui/material";
import { CompoWrapper, PopupContainer } from "../../../../Components/Page";
import SelectedUser from "../Table/SelectedUser";
import StepperX from "../Forms/Stepper";

function CsvWorkflowDetails() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Typography
        variant="body1"
        color="info.main"
        onClick={handleClickOpen}
        sx={{ cursor: "pointer" }}
      >
        <b>Details</b>
      </Typography>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle sx={{ borderBottom: 1, borderColor: "divider" }}>
          CSV Execution Workflow Status
        </DialogTitle>
        <PopupContainer>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body1">
                Current Status:
                <Typography component="span" color="error.main">
                  {" "}
                  Approval Rejected
                </Typography>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <StepperX activeStep={2} />
            </Grid>
            <Grid item xs={12}>
              <CompoWrapper>
                <SelectedUser role="Reviewer" order="01" key="reviewer" />
              </CompoWrapper>
            </Grid>
            <Grid item xs={12}>
              <CompoWrapper>
                <SelectedUser role="Approver" order="02" key="approver" />
              </CompoWrapper>
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
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default CsvWorkflowDetails;
