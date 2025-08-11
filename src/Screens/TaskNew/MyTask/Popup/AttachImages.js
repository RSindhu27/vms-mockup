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
import ImageIcon from "@mui/icons-material/Image";
import { UploadFromDevice, UploadFromCamera } from "./../Forms/ImageSelect";
import UploadImageTable from "../Table/UploadImageTable";

const imageTypeList = [
  {
    value: 1,
    label: "Upload from Device",
  },
  {
    value: 2,
    label: "Upload from Camera",
  },
];

function AttachImages() {
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
        startIcon={<ImageIcon />}
        onClick={handleClickOpen}
        color="secondary"
      >
        Image
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle sx={{ borderBottom: 1, borderColor: "divider" }}>
          Attach Images
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
              {imageType === 2 && <UploadFromCamera />}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5">Uploaded Images</Typography>
            </Grid>
            <Grid item xs={12}>
              <UploadImageTable />
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

export default AttachImages;
