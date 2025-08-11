import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { PopupContainer } from "../../../../Components/Page";
import { useState } from "react";

const deliverablesList = [
  {
    value: 1,
    label: "Deliverable 1",
  },
  {
    value: 2,
    label: "Deliverable 2",
  },
  {
    value: 3,
    label: "Deliverable 3",
  },
];

const deliverablesTypeList = [
  {
    value: 1,
    label: "Deliverable Type 1",
  },
  {
    value: 2,
    label: "Deliverable Type 2",
  },
  {
    value: 3,
    label: "Deliverable Type 3",
  },
];

function AddAdditionalDeliverables() {
  const [open, setOpen] = useState(false);
  const [deliverables, setDeliverables] = useState(1);
  const [deliverablesType, setDeliverablesType] = useState(1);
  const [justification, setJustification] = useState("");

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
        startIcon={<AddIcon />}
      >
        Add Additional Deliverables
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle sx={{ borderBottom: 1, borderColor: "divider" }}>
          Add Deliverables
        </DialogTitle>
        <PopupContainer>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Select Deliverables
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
                id="deliverables_select"
                color="secondary"
                variant="outlined"
                size="small"
                fullWidth
                select
                value={deliverables}
                onChange={(event) => {
                  setDeliverables(event.target.value);
                }}
              >
                {deliverablesList.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Deliverable Type
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
                id="deliverables_type"
                color="secondary"
                variant="outlined"
                size="small"
                fullWidth
                select
                value={deliverablesType}
                onChange={(event) => {
                  setDeliverablesType(event.target.value);
                }}
              >
                {deliverablesTypeList.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Justification
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
                id="deliverables_justification"
                placeholder="Enter Justification"
                color="secondary"
                variant="outlined"
                size="small"
                fullWidth
                value={justification}
                onChange={(event) => {
                  setJustification(event.target.value);
                }}
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
            onClick={handleClose}
            autoFocus
            variant="contained"
            disableElevation
            size="large"
            color="success"
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddAdditionalDeliverables;
