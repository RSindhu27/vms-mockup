import { useState } from "react";
import { Button, Dialog, DialogTitle } from "@mui/material";
import { PopupContainer } from "../../../../Components/Page";
import UpdateDocumentTable from "../Forms/UpdateDocumentTable";
import EditUpdateDocumentTable from "../Forms/EditUpdateDocumentTable";

function VerifyMapping() {
  const [open, setOpen] = useState(false);
  const [update, setUpdate] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdate = () => {
    setUpdate(!update);
  };

  return (
    <>
      <Button
        color="info"
        variant="contained"
        disableElevation
        onClick={handleClickOpen}
      >
        Verify Mapping
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle sx={{ borderBottom: 1, borderColor: "divider" }}>
          Verify Mapping
        </DialogTitle>
        <PopupContainer>
          {update ? (
            <EditUpdateDocumentTable
              close={() => handleClose()}
              update={() => handleUpdate()}
            />
          ) : (
            <UpdateDocumentTable
              close={() => handleClose()}
              update={() => handleUpdate()}
            />
          )}
        </PopupContainer>
      </Dialog>
    </>
  );
}

export default VerifyMapping;
