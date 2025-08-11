import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { PopupContainer } from "../../../../Components/Page";
import Data from "./DataFour.json";
import { Table } from "../../../../Components/Table";

const usernameList = Data.user_list;

const columns = [
  {
    field: "checkpoint",
    headerName: "Checkpoint",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "value1",
    headerName: "value 1",
    minWidth: 150,
    flex: 1,
    editable: true,
    type: "singleSelect",
    valueOptions: ["Yes", "No", "Others"],
  },
  {
    field: "value2",
    headerName: "value 2",
    minWidth: 150,
    flex: 1,
    editable: true,
    type: "singleSelect",
    valueOptions: ["Yes", "No", "Others"],
  },
  {
    field: "value3",
    headerName: "value 3",
    minWidth: 150,
    flex: 1,
    editable: true,
    type: "singleSelect",
    valueOptions: ["Yes", "No", "Others"],
  },
  {
    field: "remarks",
    headerName: "Remarks",
    sortable: false,
    editable: true,
    minWidth: 150,
    flex: 1,
  },
];

function Checklist() {
  const [open, setOpen] = useState(false);
  const [tableData, setTableData] = useState(usernameList);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Typography
        variant="body1"
        onClick={handleClickOpen}
        sx={{
          color: "info.main",
          textDecoration: "underline",
          cursor: "pointer",
        }}
      >
        <b>Checklist 01</b>
      </Typography>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Grid container spacing={1}>
            <Grid item xs>
              <Typography variant="h6">Checklist 1</Typography>
            </Grid>
          </Grid>
        </DialogTitle>
        <PopupContainer>
          <Table
            data={tableData}
            columns={columns}
            columnVisibilityModel={{
              role: false,
              order: false,
              email: false,
            }}
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
            variant="contained"
            color="info"
            disableElevation
            size="large"
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Checklist;
