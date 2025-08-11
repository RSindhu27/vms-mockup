import { useState } from "react";
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
import { PopupContainer } from "../../../../Components/Page";
import {
  UploadFromDevice,
  UploadFromApplication,
} from "../Forms/DocumentSelect";
import UploadDocumentTable from "../Table/UploadDocumentTable";
import AttachmentIcon from "@mui/icons-material/Attachment";

const imageTypeList = [
  {
    value: 1,
    label: "Upload from Device",
  },
  {
    value: 2,
    label: "Upload from Application",
  },
];

function AttachDocument() {
  const [open, setOpen] = useState(false);
  const [update, setUpdate] = useState(false);

  const [imageType, setImageType] = useState(1);

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
          Attach Document
        </DialogTitle>
        <PopupContainer>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Typography variant="body2" gutterBottom>
                Select
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
                id="attach_image_type"
                color="secondary"
                variant="outlined"
                size="small"
                fullWidth
                select
                value={imageType}
                onChange={(event) => {
                  setImageType(event.target.value);
                }}
              >
                {imageTypeList.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={8}>
              {imageType === 1 && <UploadFromDevice />}
              {imageType === 2 && <UploadFromApplication />}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5">Attached Documents</Typography>
            </Grid>
            <Grid item xs={12}>
              <UploadDocumentTable />
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

export default AttachDocument;
