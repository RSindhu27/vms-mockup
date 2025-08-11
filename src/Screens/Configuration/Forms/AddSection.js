import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Grid, TextField, Typography } from "@mui/material";
import GridOnIcon from "@mui/icons-material/GridOn";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import {
  PopupContainer,
  PageCircleButton,
  PageIconSecondaryButtonBox,
} from "../../../Components/Page";

function AddSection() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [row, setRow] = useState(1);
  const [column, setColumn] = useState(1);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleGrid = (a, b) => {
    setRow(a);
    setColumn(b);
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
        Add
      </PageCircleButton>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg">
        <DialogTitle sx={{ borderBottom: 1, borderColor: "divider" }}>
          Add Section
        </DialogTitle>
        <PopupContainer>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Section Name
                <Typography color="error.main" component="span">
                  *
                </Typography>
              </Typography>
              <TextField
                id="section_name"
                fullWidth
                size="small"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm>
                  <Typography variant="body2" gutterBottom>
                    Select Grid
                  </Typography>
                  <Box>
                    <Grid container spacing={1}>
                      <Grid item>
                        <PageIconSecondaryButtonBox
                          onClick={() => handleGrid(1, 1)}
                        >
                          <GridOnIcon fontSize="large" color="secondary" />
                          <Typography>
                            <b>1x1</b>
                          </Typography>
                        </PageIconSecondaryButtonBox>
                      </Grid>
                      <Grid item>
                        <PageIconSecondaryButtonBox
                          onClick={() => handleGrid(1, 2)}
                        >
                          <GridOnIcon fontSize="large" color="secondary" />
                          <Typography>
                            <b>1x2</b>
                          </Typography>
                        </PageIconSecondaryButtonBox>
                      </Grid>
                      <Grid item>
                        <PageIconSecondaryButtonBox
                          onClick={() => handleGrid(1, 3)}
                        >
                          <GridOnIcon fontSize="large" color="secondary" />
                          <Typography>
                            <b>1x3</b>
                          </Typography>
                        </PageIconSecondaryButtonBox>
                      </Grid>
                      <Grid item>
                        <PageIconSecondaryButtonBox
                          onClick={() => handleGrid(2, 1)}
                        >
                          <GridOnIcon fontSize="large" color="secondary" />
                          <Typography>
                            <b>2x1</b>
                          </Typography>
                        </PageIconSecondaryButtonBox>
                      </Grid>
                      <Grid item>
                        <PageIconSecondaryButtonBox
                          onClick={() => handleGrid(2, 2)}
                        >
                          <GridOnIcon fontSize="large" color="secondary" />
                          <Typography>
                            <b>2x2</b>
                          </Typography>
                        </PageIconSecondaryButtonBox>
                      </Grid>
                      <Grid item>
                        <PageIconSecondaryButtonBox
                          onClick={() => handleGrid(2, 3)}
                        >
                          <GridOnIcon fontSize="large" color="secondary" />
                          <Typography>
                            <b>2x3</b>
                          </Typography>
                        </PageIconSecondaryButtonBox>
                      </Grid>
                      <Grid item>
                        <PageIconSecondaryButtonBox
                          onClick={() => handleGrid(3, 1)}
                        >
                          <GridOnIcon fontSize="large" color="secondary" />
                          <Typography>
                            <b>3x1</b>
                          </Typography>
                        </PageIconSecondaryButtonBox>
                      </Grid>
                      <Grid item>
                        <PageIconSecondaryButtonBox
                          onClick={() => handleGrid(3, 2)}
                        >
                          <GridOnIcon fontSize="large" color="secondary" />
                          <Typography>
                            <b>3x2</b>
                          </Typography>
                        </PageIconSecondaryButtonBox>
                      </Grid>
                      <Grid item>
                        <PageIconSecondaryButtonBox
                          onClick={() => handleGrid(3, 3)}
                        >
                          <GridOnIcon fontSize="large" color="secondary" />
                          <Typography>
                            <b>3x3</b>
                          </Typography>
                        </PageIconSecondaryButtonBox>
                      </Grid>
                      <Grid item>
                        <PageIconSecondaryButtonBox
                          onClick={() => handleGrid(3, 4)}
                        >
                          <GridOnIcon fontSize="large" color="secondary" />
                          <Typography>
                            <b>3x4</b>
                          </Typography>
                        </PageIconSecondaryButtonBox>
                      </Grid>
                      <Grid item>
                        <PageIconSecondaryButtonBox
                          onClick={() => handleGrid(3, 5)}
                        >
                          <GridOnIcon fontSize="large" color="secondary" />
                          <Typography>
                            <b>3x5</b>
                          </Typography>
                        </PageIconSecondaryButtonBox>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
                <Grid item xs={6} sm="auto">
                  <Typography variant="body2" gutterBottom>
                    Rows
                  </Typography>
                  <TextField
                    id="section_row"
                    size="small"
                    sx={{ width: 100 }}
                    value={row}
                    onChange={(event) => {
                      setRow(event.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={6} sm="auto">
                  <Typography variant="body2" gutterBottom>
                    Columns-Max 3
                  </Typography>
                  <TextField
                    id="section_column"
                    size="small"
                    sx={{ width: 100 }}
                    value={column}
                    onChange={(event) => {
                      setColumn(event.target.value);
                    }}
                  />
                </Grid>
              </Grid>
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
          {/* <Button
            onClick={handleClose}
            autoFocus
            variant="contained"
            disableElevation
            size="large"
            color="success"
          >
            Create
          </Button> */}
          <Button
            onClick={handleClose}
            autoFocus
            variant="contained"
            disableElevation
            size="large"
            color="success"
          >
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddSection;
