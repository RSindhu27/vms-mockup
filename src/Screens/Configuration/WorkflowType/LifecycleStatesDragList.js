import React from "react";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { TableDeleteRow } from "../../../Components/Table";
import EditLifecycleState from "./EditLifecycleState";

const Item = ({ itemData, provided, snapshot, refX }) => {
  return (
    <Box ref={refX}>
      <Paper
        sx={{
          p: 1,
          mb: 2,
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
            <EditLifecycleState key={itemData.label} />
            <TableDeleteRow onDelete={() => {}} />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

const NumberingSystemList = [
  { id: "item-1", label: "Draft" },
  { id: "item-2", label: "Document Review" },
  { id: "item-3", label: "Document Approval" },
];

function LifecycleStatesDragList() {
  const [nsList, setNSList] = React.useState(NumberingSystemList);

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
      <Grid item xs={12} sm={6} md={4}>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <Box {...provided.droppableProps} ref={provided.innerRef}>
                {nsList.map((item, index) => (
                  <Draggable
                    key={item.id}
                    draggableId={item.id}
                    index={index}
                    isDragDisabled={item.id === "item-1"}
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
    </>
  );
}

export default LifecycleStatesDragList;
