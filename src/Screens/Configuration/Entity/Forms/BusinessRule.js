import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { PopupContainer } from "../../../../Components/Page";
import { useState } from "react";

import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import BusinessRuleList from "./BusinessRuleList";

function BusinessRule() {
  const [open, setOpen] = useState(false);

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
        startIcon={<RemoveRedEyeIcon />}
      >
        View Business Rule List
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle sx={{ borderBottom: 1, borderColor: "divider" }}>
          Business Rule List
        </DialogTitle>
        <PopupContainer>
          <BusinessRuleList />
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

export default BusinessRule;
