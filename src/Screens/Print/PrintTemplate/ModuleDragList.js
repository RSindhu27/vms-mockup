import React, { useState } from "react";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import {
  Box,
  Collapse,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Switch from "@mui/material/Switch";

const Item = ({ itemData, provided, snapshot, refX }) => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box ref={refX} sx={{ mb: 1 }}>
      <Paper
        sx={{
          p: 1,

          position: "relative",
          boxSizing: "border-box",
          bgcolor: snapshot.isDragging ? "grey.100" : "default.paper",
          ...provided.draggableProps.style,
        }}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <Grid
          container
          spacing={1}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <DragIndicatorIcon
              sx={{
                color: "grey.500",
              }}
            />
          </Grid>
          <Grid item xs>
            <Typography variant="body1">
              <b>{itemData.label}</b>
            </Typography>
          </Grid>
          <Grid item>
            <Switch size="small" />
          </Grid>
          {itemData.sub && itemData.sub.length && (
            <Grid item>
              <IconButton size="small" onClick={handleChange}>
                {checked ? (
                  <KeyboardArrowUpIcon fontSize="inherit" />
                ) : (
                  <KeyboardArrowDownIcon fontSize="inherit" />
                )}
              </IconButton>
            </Grid>
          )}
        </Grid>
      </Paper>
      <Collapse in={checked}>
        <Box
          sx={{
            py: 1,
            pl: 1,
            ml: 2,
            boxSizing: "border-box",
          }}
        >
          {itemData.sub && itemData.sub.length > 0 && (
            <ModuleDragList data={itemData.sub} />
          )}
        </Box>
      </Collapse>
    </Box>
  );
};

function ModuleDragList({ data }) {
  const [nsList, setNSList] = useState(data);

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
      nsList,
      result.source.index,
      result.destination.index
    );

    setNSList(updatedItems);
  };

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <Box {...provided.droppableProps} ref={provided.innerRef}>
                  {nsList.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <Item
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
        </Grid>
      </Grid>
    </>
  );
}

export default ModuleDragList;
