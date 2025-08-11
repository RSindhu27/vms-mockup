import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { PopupContainer } from "../../../../Components/Page";
import RemoveIcon from "@mui/icons-material/Remove";
import UpdateValidationRule from "./UpdateValidationRule";

function DeleteDeliverables() {
  const [open, setOpen] = useState(false);
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
        color="error"
        variant="contained"
        disableElevation
        onClick={handleClickOpen}
        startIcon={<RemoveIcon />}
      >
        Delete
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle sx={{ borderBottom: 1, borderColor: "divider" }}>
          Delete Selected Deliverables?
        </DialogTitle>
        <PopupContainer>
          <Grid container spacing={2}>
            {/* Basic Delete */}
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
            {/*  Cannot Delete 1 */}
            <Grid item xs={12}>
              <Typography variant="body1" color="error">
                Deliverable 04 & Deliverable cannot be deleted, Remove the
                dependency
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Deliverable 04, Deliverable 06 are depended to Deliverable 01 &
                Deliverable 02 respectively
              </Typography>
            </Grid>
            {/*  Cannot Delete 2 */}
            <Grid item xs={12}>
              <Typography variant="body1" color="error">
                Deliverable 04 cannot be deleted, Remove the validation rule
              </Typography>
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
            color="error"
          >
            Delete
          </Button>
          <Button
            onClick={handleClose}
            autoFocus
            variant="contained"
            disableElevation
            size="large"
            color="secondary"
          >
            Go to Task Dependency
          </Button>
          <UpdateValidationRule />
        </DialogActions>
      </Dialog>
    </>
  );
}

export default DeleteDeliverables;
