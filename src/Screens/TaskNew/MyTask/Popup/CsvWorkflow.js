import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { Grid, MenuItem, TextField, Typography } from "@mui/material";
import { CompoWrapper, PopupContainer } from "../../../../Components/Page";
import SelectUser from "../Table/SelectUser";

const workflowList = [
  {
    value: 1,
    label: "Workflow List 1",
  },
  {
    value: 2,
    label: "Workflow List 2",
  },
  {
    value: 3,
    label: "Workflow List 3",
  },
];

function CsvWorkflow() {
  const [description, setDescription] = useState("");
  const [open, setOpen] = useState(false);
  const [workflowType, setWorkflowType] = useState(1);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        onClick={handleClickOpen}
        sx={{ color: "info.main", display: "block" }}
        size="small"
      >
        <b>VIEW</b>
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg">
        <DialogTitle sx={{ borderBottom: 1, borderColor: "divider" }}>
          CSV Workflow
        </DialogTitle>
        <PopupContainer>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Description
              </Typography>
              <TextField
                id="add_workflow_description"
                color="secondary"
                value={description}
                fullWidth
                multiline
                rows={4}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Select Workflow Type
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
                id="add_workflow_type"
                color="secondary"
                variant="outlined"
                size="small"
                fullWidth
                select
                value={workflowType}
                onChange={(event) => {
                  setWorkflowType(event.target.value);
                }}
              >
                {workflowList.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <CompoWrapper>
                <SelectUser role="Reviewer" order="01" key="reviewer" />
              </CompoWrapper>
            </Grid>
            <Grid item xs={12}>
              <CompoWrapper>
                <SelectUser role="Approver" order="02" key="approver" />
              </CompoWrapper>
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
            onClick={handleSave}
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

export default CsvWorkflow;
