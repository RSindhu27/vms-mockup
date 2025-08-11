import React, { useState } from "react";
import {
  Autocomplete,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { PopupContainer } from "../../../../Components/Page";

const printTypeList = [
  { value: 1, label: "Print Type 1" },
  { value: 2, label: "Print Type 2" },
  { value: 3, label: "Print Type 3" },
];

const userDataList = [
  { value: 1, label: "Peter Parker" },
  { value: 2, label: "Steve Roger" },
  { value: 3, label: "Tony Stark" },
  { value: 4, label: "Natasha Romanoff" },
  { value: 5, label: "Bruce Banner" },
  { value: 6, label: "Thor Odinson" },
  { value: 7, label: "Clint Barton" },
  { value: 8, label: "Wanda Maximoff" },
  { value: 9, label: "James Rhodes" },
  { value: 10, label: "Scott Lang" },
];

const printModeList = [
  { value: 1, label: "Print Mode 1" },
  { value: 2, label: "Print Mode 2" },
  { value: 3, label: "Print Mode 3" },
];

function PrintDoc({ fileName }) {
  const [open, setOpen] = useState(false);
  const [printType, setPrintType] = useState(1);
  const [name, setName] = useState("");
  const [printReason, setPrintReason] = useState("");
  const [printMode, setPrintMode] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button color="secondary" size="small" onClick={handleClickOpen}>
        Print
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle sx={{ borderBottom: 1, borderColor: "divider" }}>
          Print - {fileName}
        </DialogTitle>
        <PopupContainer>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Select Print Type*
              </Typography>
              <TextField
                id="print-type"
                color="secondary"
                variant="outlined"
                size="small"
                fullWidth
                required
                select
                value={printType}
                onChange={(event) => {
                  setPrintType(event.target.value);
                }}
              >
                {printTypeList.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Printed For*
              </Typography>
              <Autocomplete
                value={name}
                onChange={(event, newValue) => {
                  setName(newValue);
                }}
                id="printed-for"
                options={userDataList}
                getOptionLabel={(option) => option.label}
                fullWidth
                size="small"
                renderInput={(params) => (
                  <TextField {...params} color="secondary" />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Print Reason*
              </Typography>
              <TextField
                id="print-reason"
                placeholder="Enter Print Reason"
                color="secondary"
                variant="outlined"
                size="small"
                fullWidth
                value={printReason}
                onChange={(event) => {
                  setPrintReason(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Print Mode*
              </Typography>
              <TextField
                id="printed-for"
                color="secondary"
                variant="outlined"
                size="small"
                fullWidth
                required
                select
                value={printMode}
                onChange={(event) => {
                  setPrintMode(event.target.value);
                }}
              >
                {printModeList.map((option) => (
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
            variant="outlined"
            disableElevation
            color="error"
          >
            Cancel
          </Button>
          <Button
            onClick={handleClose}
            variant="outlined"
            color="info"
            disableElevation
          >
            Print
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default PrintDoc;
