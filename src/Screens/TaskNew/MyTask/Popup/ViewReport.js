import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { Typography } from "@mui/material";
import { PopupContainer } from "../../../../Components/Page";
import ExecutionReportTable from "../Table/ExecutionReportTable";

function ViewReport() {
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
        <b>View Report</b>
      </Typography>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xl">
        <DialogTitle sx={{ borderBottom: 1, borderColor: "divider" }}>
          Execution Summary Report
        </DialogTitle>
        <PopupContainer>
          <ExecutionReportTable />
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

export default ViewReport;
