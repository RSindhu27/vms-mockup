import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import { PopupContainer, PageCircleButton } from "../../../Components/Page";
import { Grid, Typography } from "@mui/material";
import ModuleDragList from "./ModuleDragList";
import DocumentX from "./DocumentX";

const ModuleList = [
  {
    id: "item-1",
    label: "Header",
    sub: [
      { id: "item-1-1", label: "Header 1" },
      { id: "item-1-2", label: "Header 2" },
    ],
  },
  {
    id: "item-2",
    label: "Cover Page",
    sub: [
      { id: "item-2-1", label: "Cover Page 1" },
      { id: "item-2-2", label: "Cover Page 2" },
    ],
  },
  { id: "item-3", label: "Footer" },
  {
    id: "item-4",
    label: "Back Page",
    sub: [
      { id: "item-2-1", label: "Back Page 1" },
      { id: "item-2-2", label: "Back Page 2" },
    ],
  },
  {
    id: "item-5",
    label: "Templates",
    sub: [
      { id: "item-2-1", label: "Template 1" },
      { id: "item-2-2", label: "Template 2" },
      { id: "item-2-2", label: "Template 3" },
      { id: "item-2-2", label: "Template 4" },
      { id: "item-2-2", label: "Template 5" },
    ],
  },
];

function CreateTemplate() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <PageCircleButton
        color="secondary"
        variant="contained"
        disableElevation
        startIcon={<AddCircleOutlinedIcon />}
        onClick={handleClickOpen}
      >
        Create Template
      </PageCircleButton>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg">
        <DialogTitle sx={{ borderBottom: 1, borderColor: "divider" }}>
          Create Template
        </DialogTitle>
        <PopupContainer>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={4}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Typography variant="body1">
                    <b>Select</b>
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <ModuleDragList data={ModuleList} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={8}>
              <DocumentX />
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

export default CreateTemplate;
