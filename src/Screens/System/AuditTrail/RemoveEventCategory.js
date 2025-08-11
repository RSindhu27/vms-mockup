import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from "@mui/material";
import { PopupContainer, ScrollBox } from "../../../Components/Page";

const categoryListData = [
  { id: 1, name: "Category 1", select: false },
  { id: 2, name: "Category 2", select: false },
  { id: 3, name: "Category 3", select: false },
  { id: 4, name: "Category 4", select: false },
  { id: 5, name: "Category 5", select: false },
  { id: 6, name: "Category 6", select: false },
  { id: 7, name: "Category 7", select: false },
  { id: 8, name: "Category 8", select: false },
  { id: 9, name: "Category 9", select: false },
  { id: 10, name: "Category 10", select: false },
  { id: 11, name: "Category 11", select: false },
  { id: 12, name: "Category 12", select: false },
  { id: 13, name: "Category 13", select: false },
  { id: 14, name: "Category 14", select: false },
  { id: 15, name: "Category 15", select: false },
];

function RemoveEventCategory() {
  const [open, setOpen] = useState(false);
  const [categoryList, setCategoryList] = useState(categoryListData);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (value, idx) => {
    setCategoryList(
      categoryList.map((item) =>
        item.id === idx ? { ...item, select: !value } : item
      )
    );
  };

  return (
    <>
      <Button color="info" onClick={handleClickOpen}>
        <u>Remove Added Event Category</u>
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle sx={{ borderBottom: 1, borderColor: "divider" }}>
          Remove Event Category
        </DialogTitle>
        <PopupContainer>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs>
              <Typography variant="body1" gutterBottom>
                Select Category
              </Typography>
              <ScrollBox>
                <FormGroup>
                  {categoryList.map((e, idx) => (
                    <FormControlLabel
                      key={e.id}
                      control={
                        <Checkbox
                          checked={e.select}
                          onChange={() => handleChange(e.select, e.id)}
                        />
                      }
                      label={e.name}
                    />
                  ))}
                </FormGroup>
              </ScrollBox>
            </Grid>
            <Grid item xs={12}>
              {categoryList.filter((item) => item.select === true).length >
              0 ? (
                <Typography variant="body1" color="secondary.dark">
                  {categoryList.filter((item) => item.select === true).length}{" "}
                  Selected
                </Typography>
              ) : (
                ""
              )}
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
            Remove
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default RemoveEventCategory;
