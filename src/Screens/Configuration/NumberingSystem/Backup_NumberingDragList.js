import React, { useState } from "react";
import { Grid, IconButton, Paper, Typography } from "@mui/material";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import DraggableList from "react-draggable-list";
import { TableDeleteRow } from "../../../Components/Table";
import EditFieldType from "./EditFieldType";

const Item = ({ item, itemSelected, dragHandleProps }) => {
  const { onMouseDown, onTouchStart } = dragHandleProps;

  return (
    <Paper sx={{ p: 1 }}>
      <Grid
        container
        spacing={1}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <Grid container spacing={1} alignItems="center">
            <Grid item>
              <IconButton
                aria-label="drag"
                color="string"
                size="small"
                onTouchStart={(e) => {
                  e.preventDefault();
                  console.log("touchStart");
                  e.target.style.backgroundColor = "blue";
                  document.body.style.overflow = "hidden";
                  onTouchStart(e);
                }}
                onMouseDown={(e) => {
                  console.log("mouseDown");
                  document.body.style.overflow = "hidden";
                  onMouseDown(e);
                }}
                onTouchEnd={(e) => {
                  e.target.style.backgroundColor = "black";
                  document.body.style.overflow = "visible";
                }}
                onMouseUp={() => {
                  document.body.style.overflow = "visible";
                }}
              >
                <DragIndicatorIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                <b>{item.label}</b>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <EditFieldType />
          <TableDeleteRow onDelete={() => {}} />
        </Grid>
      </Grid>
    </Paper>
  );
};

const NumberingSystemList = [
  { id: 1, label: "QA" },
  { id: 2, label: "2022" },
];

function NumberingDragList() {
  const [nsList, setNSList] = useState(NumberingSystemList);

  const _onListChange = (newList) => {
    setNSList(newList);
  };

  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <DraggableList
          itemKey="id"
          template={Item}
          list={nsList}
          onMoveEnd={(newList) => _onListChange(newList)}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1">
          Numbering Format:{" "}
          <Typography component="span" color="primary">
            <b>{nsList.map((e) => e.label)}</b>
          </Typography>
        </Typography>
      </Grid>
    </>
  );
}

export default NumberingDragList;
