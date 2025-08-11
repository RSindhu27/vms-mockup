import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { Grid, MenuItem, TextField, Typography } from "@mui/material";
import { PopupContainer } from "../../../../Components/Page";
import { Table } from "../../../../Components/Table";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "deliverables",
    headerName: "Deliverables",
    minWidth: 150,
    flex: 1,
  },
];

const dataTable = [
  {
    id: 1,
    deliverables: "Deliverables 01",
  },
  {
    id: 2,
    deliverables: "Deliverables 02",
  },
  {
    id: 3,
    deliverables: "Deliverables 03",
  },
  {
    id: 4,
    deliverables: "Deliverables 04",
  },
  {
    id: 5,
    deliverables: "Deliverables 05",
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

function UpdateValidationRule() {
  const [open, setOpen] = useState(false);
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
        Go to Validation Rule
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle sx={{ borderBottom: 1, borderColor: "divider" }}>
          Update Validation Rule
        </DialogTitle>
        <PopupContainer>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Table data={dataTable} columns={columns} />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Entity Status based on selected deliverables completion
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
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default UpdateValidationRule;
