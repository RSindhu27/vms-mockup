import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Box,
  Grid,
  MenuItem,
  Checkbox,
  TextField,
  FormGroup,
  Typography,
  FormControlLabel,
} from "@mui/material";
import {
  ScrollBox,
  DirectionIcon,
  PopupContainer,
} from "../../../Components/Page";

const country = [
  {
    value: "united-states",
    label: "United States",
  },
  {
    value: "australia,",
    label: "Australia",
  },
  {
    value: "canada",
    label: "Canada",
  },
  {
    value: "germany",
    label: "Germany",
  },
  {
    value: "argentina",
    label: "Argentina",
  },
];

const ItemListData = [
  { id: 1, name: "Item 1", select: false },
  { id: 2, name: "Item 2", select: false },
  { id: 3, name: "Item 3", select: false },
  { id: 4, name: "Item 4", select: false },
  { id: 5, name: "Item 5", select: false },
  { id: 6, name: "Item 6", select: false },
  { id: 7, name: "Item 7", select: false },
  { id: 8, name: "Item 8", select: false },
  { id: 9, name: "Item 9", select: false },
  { id: 0, name: "Item 10", select: false },
  { id: 11, name: "Item 11", select: false },
  { id: 12, name: "Item 12", select: false },
  { id: 13, name: "Item 13", select: false },
  { id: 14, name: "Item 14", select: false },
  { id: 15, name: "Item 15", select: false },
];

const PickListData = [
  { name: "Some Name 1", id: 1, select: false },
  { name: "Some Name  2", id: 2, select: false },
  { name: "Some Name  3", id: 3, select: false },
  { name: "Some Name  4", id: 4, select: false },
  { name: "Some Name  5", id: 5, select: false },
  { name: "Some Name  6", id: 6, select: false },
  { name: "Some Name  7", id: 7, select: false },
  { name: "Some Name  8", id: 8, select: false },
  { name: "Some Name  9", id: 9, select: false },
  { name: "Some Name  10", id: 10, select: false },
  { name: "Some Name  11", id: 11, select: false },
  { name: "Some Name  12", id: 12, select: false },
  { name: "Some Name  13", id: 13, select: false },
  { name: "Some Name  14", id: 14, select: false },
  { name: "Some Name  15", id: 15, select: false },
];

function ViewEditDependency() {
  const [open, setOpen] = useState(false);
  const [dependentOn, setDependentOn] = useState("");
  const [itemList, setItemList] = useState(ItemListData);
  const [pickList, setPickList] = useState(PickListData);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleItemList = (value, idx) => {
    setItemList(
      itemList.map((item) =>
        item.id === idx ? { ...item, select: !value } : item
      )
    );
  };

  const handlePickList = (value, idx) => {
    setPickList(
      pickList.map((item) =>
        item.id === idx ? { ...item, select: !value } : item
      )
    );
  };

  return (
    <>
      <Button variant="text" color="info" onClick={handleClickOpen}>
        <u>View/Edit Dependencies</u>
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle sx={{ borderBottom: 1, borderColor: "divider" }}>
          View/Edit Dependencies
        </DialogTitle>
        <PopupContainer>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Depended On
              </Typography>
              <TextField
                id="dependency_dependent_on"
                select
                fullWidth
                size="small"
                value={dependentOn}
                onChange={(event) => {
                  setDependentOn(event.target.value);
                }}
              >
                {country.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
          <Box p={1} />
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12} sm>
              <Typography variant="body1" gutterBottom>
                Depended On
              </Typography>
              <ScrollBox>
                <FormGroup>
                  {itemList.map((e, idx) => (
                    <FormControlLabel
                      key={e.id}
                      control={
                        <Checkbox
                          checked={e.select}
                          onChange={() => handleItemList(e.select, e.id)}
                        />
                      }
                      label={e.name}
                    />
                  ))}
                </FormGroup>
              </ScrollBox>
              <Box mt={1}>
                {itemList.filter((item) => item.select === true).length > 0 ? (
                  <Typography variant="body1" color="secondary.dark">
                    {itemList.filter((item) => item.select === true).length}{" "}
                    Selected
                  </Typography>
                ) : (
                  <>&nbsp;</>
                )}
              </Box>
            </Grid>
            <Grid item>
              <DirectionIcon />
            </Grid>
            <Grid item xs={12} sm>
              <Typography variant="body1" gutterBottom>
                Select Pick List Names for Map
              </Typography>
              <ScrollBox>
                <FormGroup>
                  {pickList.map((e, idx) => (
                    <FormControlLabel
                      key={e.id}
                      control={
                        <Checkbox
                          checked={e.select}
                          onChange={() => handlePickList(e.select, e.id)}
                        />
                      }
                      label={e.name}
                    />
                  ))}
                </FormGroup>
              </ScrollBox>
              <Box mt={1}>
                {pickList.filter((item) => item.select === true).length > 0 ? (
                  <Typography variant="body1" color="secondary.dark">
                    {pickList.filter((item) => item.select === true).length}{" "}
                    Selected
                  </Typography>
                ) : (
                  <>&nbsp;</>
                )}
              </Box>
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
            Map
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ViewEditDependency;
