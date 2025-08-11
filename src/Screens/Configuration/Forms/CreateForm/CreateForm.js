import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import { PopupContainer, PageCircleButton } from "../../../../Components/Page";
import FormGridField from "./FormGridField";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import { IconButton } from "@mui/material";

function CreateForm({ mode }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {mode === "edit" && (
        <IconButton size="small" color="primary" onClick={handleClickOpen}>
          <DriveFileRenameOutlineOutlinedIcon fontSize="small" />
        </IconButton>
      )}
      {mode === "new" && (
        <PageCircleButton
          color="secondary"
          variant="contained"
          disableElevation
          startIcon={<AddCircleOutlinedIcon />}
          onClick={handleClickOpen}
        >
          Add
        </PageCircleButton>
      )}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg">
        <DialogTitle sx={{ borderBottom: 1, borderColor: "divider" }}>
          Create Form
        </DialogTitle>
        <PopupContainer>
          <FormGridField />
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

export default CreateForm;
