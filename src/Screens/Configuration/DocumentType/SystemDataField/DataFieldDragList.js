import React, { useState } from "react";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Paper,
  Switch,
  Typography,
} from "@mui/material";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { TableDeleteRow } from "../../../../Components/Table";

const Item = ({ itemData, provided, snapshot, refX }) => {
  const [editLifecycle, setEditLifecycle] = useState(itemData.edit);

  const handleChange = (event) => {
    setEditLifecycle(event.target.checked);
  };

  return (
    <Box ref={refX}>
      <Paper
        sx={{
          p: 1,
          mb: 1,
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
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Checkbox />
              </Grid>
              <Grid item xs>
                <Typography variant="body1">{itemData.label}</Typography>
              </Grid>
              <Grid item xs>
                <Typography variant="body1">{itemData.type}</Typography>
              </Grid>
              <Grid item xs>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch checked={editLifecycle} onChange={handleChange} />
                    }
                    label={editLifecycle ? "Yes" : "No"}
                  />
                </FormGroup>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <TableDeleteRow onDelete={() => {}} />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

const NumberingSystemList = [
  {
    id: "item-1",
    label: "Data field 01",
    type: "List Manager",
    edit: true,
  },
  {
    id: "item-2",
    label: "Data field 02",
    type: "Integer",
    edit: false,
  },
  { id: "item-3", label: "Data field 03", type: "Flex", edit: true },
];

function DataFieldDragList() {
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
      <Box sx={{ overflow: "auto", px: 1 }}>
        <Box sx={{ minWidth: 700 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box px={0.5}>
                <Grid
                  container
                  spacing={1}
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Grid item xs>
                    <Grid container spacing={1}>
                      <Grid item>
                        <Box sx={{ width: 24 }} />
                      </Grid>
                      <Grid item>
                        <Box sx={{ width: 54 }} />
                      </Grid>
                      <Grid item xs>
                        <Typography variant="body1">Name</Typography>
                      </Grid>
                      <Grid item xs>
                        <Typography variant="body1">Type</Typography>
                      </Grid>
                      <Grid item xs>
                        <Typography variant="body1">
                          Edit During Lifecycle state
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Box sx={{ width: 24 }} />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
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
        </Box>
      </Box>
    </>
  );
}

export default DataFieldDragList;
