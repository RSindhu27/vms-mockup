import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";
import { Link } from "react-router-dom";

function DocPreview() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <IconButton onClick={handleOpen} size="small" color="secondary">
        <VisibilityIcon fontSize="small" />
      </IconButton>
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>Document Preview</DialogTitle>
        <DialogContent>
          <Box
            sx={{
              bgcolor: "grey.400",
              width: 100 + "%",
              height: 500,
              boxSizing: "border-box",
              p: 2,
            }}
          >
            This is a Box for view Document
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            disableElevation
            color="secondary"
            onClick={handleClose}
          >
            close
          </Button>
          <Button
            variant="contained"
            disableElevation
            color="secondary"
            component={Link}
            to="/app/repository/repository/document-view"
          >
            Edit Document
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default DocPreview;
