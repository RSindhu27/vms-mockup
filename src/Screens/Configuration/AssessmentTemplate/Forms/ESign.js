import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { PopupContainer } from "../../../../Components/Page";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function ESign() {
  const [open, setOpen] = useState(false);
  const [loggedUser, setLoggedUser] = useState("Johndeo@comapanyname.com");
  const [password, setPassword] = useState("");
  const [reason, setReason] = useState("");
  const [passVisible, setPassVisible] = useState(false);

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
        E-sign
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle sx={{ borderBottom: 1, borderColor: "divider" }}>
          Create CSV Assessment Template?
        </DialogTitle>
        <PopupContainer>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body2" color="GrayText">
                "By executing this signature, the user acknowledges,
                understands, and accepts that the electronic signature executed
                within this system is legally binding and equivalent to a
                handwritten signature or initials."
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Logged User{" "}
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
                id="e_sign_logged_user"
                fullWidth
                size="small"
                value={loggedUser}
                onChange={(event) => {
                  setLoggedUser(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Password{" "}
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
                id="e_sign_password"
                fullWidth
                type={passVisible ? "text" : "password"}
                size="small"
                placeholder="Enter Password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setPassVisible(!passVisible)}>
                        {passVisible ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Reason for E-sign{" "}
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
                id="e_sign_reason"
                fullWidth
                size="small"
                value={reason}
                placeholder="Enter Reason for E-Sign"
                onChange={(event) => {
                  setReason(event.target.value);
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
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ESign;
