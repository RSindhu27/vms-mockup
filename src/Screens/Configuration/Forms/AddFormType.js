import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { Grid, TextField, Typography } from "@mui/material";
import { PopupContainer } from "../../../Components/Page";

function AddFormType() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [prefix, setPrefix] = useState("");

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
        <b>Add form type</b>
      </Typography>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle sx={{ borderBottom: 1, borderColor: "divider" }}>
          Add Form Type
        </DialogTitle>
        <PopupContainer>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" gutterBottom>
                Enter FormType
                <Typography color="error.main" component="span">
                  *
                </Typography>
              </Typography>
              <TextField
                id="form_type"
                fullWidth
                size="small"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" gutterBottom>
                Prefix
                <Typography color="error.main" component="span">
                  *
                </Typography>
              </Typography>
              <TextField
                id="form_prefix"
                fullWidth
                size="small"
                value={prefix}
                onChange={(event) => {
                  setPrefix(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                ID Start From
                <Typography color="error.main" component="span">
                  *
                </Typography>
              </Typography>
              <TextField
                id="form_prefix"
                fullWidth
                size="small"
                value={prefix}
                onChange={(event) => {
                  setPrefix(event.target.value);
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

export default AddFormType;
