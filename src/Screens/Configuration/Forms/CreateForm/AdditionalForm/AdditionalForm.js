import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { Grid, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { PopupContainer } from "../../../../../Components/Page";
import Options from "./Options";

const optionsList = [
  {
    value: 1,
    label: "Pass",
  },
  {
    value: 2,
    label: "Fail",
  },
  {
    value: 3,
    label: "N/A",
  },
];

function AdditionalForm() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton color="info" onClick={handleClickOpen}>
        <AddIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg">
        <DialogTitle sx={{ borderBottom: 1, borderColor: "divider" }}>
          Add Additional Field
        </DialogTitle>
        <PopupContainer>
          <Grid container spacing={2}>
            {optionsList.map((e, idx) => (
              <Grid item xs={12} key={e.value}>
                <Options order={idx} name={e.label} />
              </Grid>
            ))}
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
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AdditionalForm;
