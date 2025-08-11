import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Typography,
} from "@mui/material";
import { PopupContainer } from "../../../Components/Page";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Table } from "../../../Components/Table";
import Data from "./DataThree.json";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Section Name",
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
    field: "performed_by",
    headerName: "Performed By",
    renderCell: (params) => (
      <Typography
        variant="body2"
        color="info.main"
        noWrap
        component={Link}
        to="#"
      >
        {params.row.performed_by}
      </Typography>
    ),
    minWidth: 150,
    flex: 1,
  },
  {
    field: "performed_on",
    headerName: "Performed On",
    minWidth: 150,
    flex: 1,
  },
];

function AssessmentSummaryResults() {
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
      >
        Assessment Summary Results
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle sx={{ borderBottom: 1, borderColor: "divider" }}>
          Assessment Summary Results
        </DialogTitle>
        <PopupContainer>
          <Table
            data={tableData}
            columns={columns}
            columnVisibilityModel={{
              id: false,
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

export default AssessmentSummaryResults;
