import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Grid, IconButton, TextField, Typography } from "@mui/material";
import TableColumn from "./TableColumn";
import DraggableList from "react-draggable-list";
import { PopupContainer } from "../../../Components/Page";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";

const CheckpointList = [
  { id: 1, label: "1", type: 1 },
  { id: 2, label: "2", type: 2 },
  { id: 3, label: "3", type: 3 },
];

function EditCheckpoint() {
  const [open, setOpen] = useState(false);
  const [checkPoint, setCheckPoint] = useState("");
  const [cpList, setCPList] = useState(CheckpointList);

  const _onListChange = (newList) => {
    setCPList(newList);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddColumn = () => {
    const newId = cpList.length + 1;
    let newList = [...cpList, { id: newId, label: `${newId}`, type: 1 }];
    setCPList(newList);
  };

  return (
    <>
      <IconButton size="small" color="primary" onClick={handleClickOpen}>
        <DriveFileRenameOutlineOutlinedIcon fontSize="small" />
      </IconButton>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle sx={{ borderBottom: 1, borderColor: "divider" }}>
          Add Checkpoint
        </DialogTitle>
        <PopupContainer>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Enter Checkpoint
              </Typography>
              <TextField
                id="checkpoint_text"
                fullWidth
                size="small"
                value={checkPoint}
                onChange={(event) => {
                  setCheckPoint(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              {/* This Button Will Help To Add Column*/}
              <Button
                color="success"
                variant="outlined"
                onClick={() => handleAddColumn()}
              >
                Add Table Column
              </Button>
            </Grid>
          </Grid>
          <Box p={1} />
          <DraggableList
            itemKey="id"
            template={TableColumn}
            list={cpList}
            onMoveEnd={(newList) => _onListChange(newList)}
          />
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

export default EditCheckpoint;
