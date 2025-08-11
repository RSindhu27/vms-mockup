import { useState } from "react";
import { Button, Dialog, DialogActions, Grid, Typography } from "@mui/material";
import { PopupContainer } from "../../../../../Components/Page";

function Initiate() {
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
        color="success.main"
        onClick={handleClickOpen}
        style={{ cursor: "pointer", textDecoration: "underline" }}
        variant="body2"
      >
        Initiate
      </Typography>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
        <PopupContainer>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              Confirm, You want to Initiate?
            </Grid>
          </Grid>
        </PopupContainer>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="contained"
            disableElevation
            size="small"
            color="inherit"
          >
            No
          </Button>
          <Button
            onClick={handleClose}
            autoFocus
            variant="contained"
            disableElevation
            size="small"
            color="success"
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Initiate;
