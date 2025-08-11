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
import { PageButton, PopupContainer } from "../../../../Components/Page";

function Reject() {
  const [open, setOpen] = useState(false);
  const [comments, setComment] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <PageButton color="error" onClick={handleClickOpen}>
        Reject
      </PageButton>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle sx={{ borderBottom: 1, borderColor: "divider" }}>
          Are you sure?
        </DialogTitle>
        <PopupContainer>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Email-ID
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
                id="reject_email_id"
                placeholder="Enter"
                color="secondary"
                variant="outlined"
                size="small"
                fullWidth
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Password
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
                id="reject_password"
                placeholder="Enter"
                color="secondary"
                variant="outlined"
                size="small"
                fullWidth
                type="password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Comments
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
                id="reject_comment"
                placeholder="Enter your comments here..."
                color="secondary"
                variant="outlined"
                size="small"
                fullWidth
                multiline
                minRows={3}
                value={comments}
                onChange={(event) => {
                  setComment(event.target.value);
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
            color="error"
          >
            Reject
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Reject;
