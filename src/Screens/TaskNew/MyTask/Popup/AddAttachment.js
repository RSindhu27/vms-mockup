import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { PopupContainer } from "../../../../Components/Page";
import { VisBox, VisuallyHiddenInput } from "../../../../Components/Page";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import { TableDeleteRow } from "../../../../Components/Table";

function AddAttachment() {
  const [open, setOpen] = useState(false);
  const [documentTitle, setDocumentTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleChange(e) {
    console.log();
    setFile(URL.createObjectURL(e.target.files[0]));
    setFileName(e.target.files[0].name);
  }

  const handleDelete = () => {
    setFile(null);
    setFileName(null);
  };

  return (
    <>
      <Button
        color="secondary"
        variant="contained"
        disableElevation
        onClick={handleClickOpen}
        startIcon={<AddIcon />}
        size="small"
      >
        Add Attachment
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle sx={{ borderBottom: 1, borderColor: "divider" }}>
          Add Attachment
        </DialogTitle>
        <PopupContainer>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12}>
              <Typography variant="body2" gutterBottom>
                Document Title
                <Typography
                  component="span"
                  variant="body2"
                  color="error.main"
                  gutterBottom
                >
                  *
                </Typography>
              </Typography>
              <TextField
                id="assign_document_title"
                placeholder="Enter Document Title"
                color="secondary"
                variant="outlined"
                size="small"
                fullWidth
                value={documentTitle}
                onChange={(event) => {
                  setDocumentTitle(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Typography variant="body2" gutterBottom>
                Description
                <Typography
                  component="span"
                  variant="body2"
                  color="error.main"
                  gutterBottom
                >
                  *
                </Typography>
              </Typography>
              <TextField
                id="assign_description"
                placeholder="Enter Description"
                color="secondary"
                variant="outlined"
                size="small"
                fullWidth
                multiline
                minRows={5}
                value={description}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Grid
                container
                spacing={1}
                justifyContent="left"
                alignItems="flex-end"
              >
                <Grid item>
                  <Typography variant="body2" gutterBottom>
                    Select Document
                  </Typography>
                  <Button
                    color="info"
                    variant="outlined"
                    startIcon={<InsertLinkIcon />}
                    component="label"
                  >
                    Browse
                    <VisuallyHiddenInput type="file" onChange={handleChange} />
                  </Button>
                </Grid>
                <Grid item>
                  {file && (
                    <>
                      <VisBox>
                        <Typography variant="body1" color="text.secondary">
                          {fileName}
                        </Typography>{" "}
                        <TableDeleteRow onDelete={() => handleDelete()} />
                      </VisBox>
                    </>
                  )}
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

export default AddAttachment;
