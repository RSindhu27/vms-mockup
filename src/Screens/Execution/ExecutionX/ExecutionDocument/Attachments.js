import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Grid,
} from "@mui/material";
import { PopupContainer } from "../../../../Components/Page";
import AttachmentIcon from "@mui/icons-material/Attachment";
import UploadedDocumentTable from "./UploadedDocumentTable";

function Attachments() {
  const [open, setOpen] = useState(false);
  const [update, setUpdate] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdate = () => {
    setUpdate(!update);
  };

  return (
    <>
      <Button
        variant="outlined"
        startIcon={<AttachmentIcon />}
        onClick={handleClickOpen}
        color="secondary"
      >
        Attachment
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle sx={{ borderBottom: 1, borderColor: "divider" }}>
          Attachments
        </DialogTitle>
        <PopupContainer>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <UploadedDocumentTable />
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
            onClick={handleUpdate}
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

export default Attachments;
