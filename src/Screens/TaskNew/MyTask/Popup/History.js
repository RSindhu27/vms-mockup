import { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { PopupContainer } from "../../../../Components/Page";

function EditReason() {
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState("");

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
        variant="text"
        disableElevation
        onClick={handleClickOpen}
      >
        History
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle sx={{ borderBottom: 1, borderColor: "divider" }}>
          History
        </DialogTitle>
        <PopupContainer>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box
                sx={{
                  bgcolor: "grey.400",
                  p: 2,
                  height: 100,
                  boxSizing: "border-box",
                }}
              >
                This is a Box for view Document
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Reason For Edit
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
                id="assign_description"
                placeholder="Enter Comment"
                color="secondary"
                variant="outlined"
                size="small"
                fullWidth
                multiline
                minRows={5}
                value={description}
                onChange={(event) => {
                  setDescription(event.target.value);
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
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default EditReason;
