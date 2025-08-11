import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { Grid, MenuItem, TextField, Typography } from "@mui/material";
import { PopupContainer } from "../../../../Components/Page";
import { Table } from "../../../../Components/Table";
import Data1 from "./DataThree.json";
import Data2 from "./DataFour.json";

const columns1 = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "framework",
    headerName: "framework",
    minWidth: 150,
    flex: 1,
  },
];

const columns2 = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "deliverables",
    headerName: "Deliverables",
    minWidth: 150,
    flex: 1,
  },
];

const ruleList = [
  {
    value: 1,
    label: "Framework",
  },
  {
    value: 2,
    label: "Deliverables",
  },
];

const statusList = [
  {
    value: 1,
    label: "Complete",
  },
  {
    value: 2,
    label: "Verified",
  },
];

function ValidationRule() {
  const [open, setOpen] = useState(false);
  const [rule, setRule] = useState(1);
  const [validationStatus, setValidationStatus] = useState(1);

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
        variant="contained"
        disableElevation
        onClick={handleClickOpen}
      >
        Set Validation Rule
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle sx={{ borderBottom: 1, borderColor: "divider" }}>
          Set Validation Rule
        </DialogTitle>
        <PopupContainer>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Select
                <Typography
                  component="span"
                  variant="body2"
                  color="error.main"
                  gutterBottom
                >
                  *
                </Typography>
              </Typography>
              <TextField
                id="validation_rule"
                color="secondary"
                variant="outlined"
                size="small"
                fullWidth
                select
                value={rule}
                onChange={(event) => {
                  setRule(event.target.value);
                }}
              >
                {ruleList.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            {rule === 1 ? (
              <Grid item xs={12}>
                <Table data={Data1.picklist} columns={columns1} />
              </Grid>
            ) : (
              <Grid item xs={12}>
                <Table data={Data2.picklist} columns={columns2} />
              </Grid>
            )}
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Entity Status based on selected{" "}
                {rule === 1 ? "framework" : "deliverables"} completion
                <Typography
                  component="span"
                  variant="body2"
                  color="error.main"
                  gutterBottom
                >
                  *
                </Typography>
              </Typography>
              <TextField
                id="validation_status"
                color="secondary"
                variant="outlined"
                size="small"
                fullWidth
                select
                value={validationStatus}
                onChange={(event) => {
                  setValidationStatus(event.target.value);
                }}
              >
                {statusList.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
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
            onClick={handleClose}
            autoFocus
            variant="contained"
            disableElevation
            size="large"
            color="success"
          >
            Set
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ValidationRule;
