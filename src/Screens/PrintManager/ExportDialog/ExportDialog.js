// src/Components/ExportDialog.jsx

import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Stack,
} from "@mui/material";

const ExportDialog = ({ open, onClose, onExport }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Select Export Format</DialogTitle>
      <DialogContent>
        <Stack direction="row" spacing={2} mt={1}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => onExport("pdf")}
          >
            Export as PDF
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => onExport("excel")}
          >
            Export as Excel
          </Button>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ExportDialog;
