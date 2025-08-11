import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Grid, TextField, Typography } from "@mui/material";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import TableColumn from "./TableColumn";
import { PopupContainer, PageCircleButton } from "../../../Components/Page";

const CheckpointList = [
  { id: "1", label: "1", type: 1 },
  { id: "2", label: "2", type: 2 },
  { id: "3", label: "3", type: 3 },
];

function AddCheckpoint() {
  const [open, setOpen] = useState(false);
  const [checkPoint, setCheckPoint] = useState("");
  const [cpList, setCPList] = useState(CheckpointList);

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

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const updatedItems = reorder(
      cpList,
      result.source.index,
      result.destination.index
    );

    setCPList(updatedItems);
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
        Add Checkpoint
      </PageCircleButton>
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
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <Box {...provided.droppableProps} ref={provided.innerRef}>
                  {cpList.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <TableColumn
                          itemData={item}
                          provided={provided}
                          snapshot={snapshot}
                          refX={provided.innerRef}
                        />
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </Box>
              )}
            </Droppable>
          </DragDropContext>
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

export default AddCheckpoint;
