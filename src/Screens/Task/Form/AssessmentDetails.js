import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Typography,
} from "@mui/material";
import { PopupContainer } from "../../../Components/Page";
import { useState } from "react";
import { Table } from "../../../Components/Table";
import Data from "./DataFour.json";

const columns = [
  { field: "id", headerName: "Order", width: 90 },
  {
    field: "prefix",
    headerName: "Prefix",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "question",
    headerName: "Question",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "answer",
    headerName: "Answer",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "justification",
    headerName: "Justification",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "decision",
    headerName: "Decision",
    minWidth: 150,
    flex: 1,
  },
];

function AssessmentDetails() {
  const [open, setOpen] = useState(false);
  const [tableData, setTableData] = useState(Data.activities);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        color="info"
        variant="text"
        disableElevation
        onClick={handleClickOpen}
        sx={{ textDecoration: "underline" }}
      >
        View
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle sx={{ borderBottom: 1, borderColor: "divider" }}>
          Assessment Details
        </DialogTitle>
        <PopupContainer>
          <Table data={tableData} columns={columns} />
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

export default AssessmentDetails;
