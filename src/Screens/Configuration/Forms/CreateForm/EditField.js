import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Grid,
  IconButton,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { PopupContainer } from "../../../../Components/Page";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import {
  TextFieldDetails,
  TextAreaDetails,
  CheckDetails,
  RadioDetails,
  DropdownDetails,
  DateDetails,
} from "./FieldSpecific";

const optionsList = [
  {
    value: 1,
    label: "Text Field",
  },
  {
    value: 2,
    label: "Text Area",
  },
  {
    value: 3,
    label: "Checkbox",
  },
  {
    value: 4,
    label: "Radio button",
  },
  {
    value: 5,
    label: "Dropdown",
  },
  {
    value: 6,
    label: "Date",
  },
];

function EditField() {
  const [open, setOpen] = useState(false);
  const [label, setLabel] = useState("");
  const [helpText, setHelpText] = useState("");
  const [type, setType] = useState(1);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton size="small" color="primary" onClick={handleClickOpen}>
        <DriveFileRenameOutlineOutlinedIcon fontSize="small" />
      </IconButton>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle sx={{ borderBottom: 1, borderColor: "divider" }}>
          Add Form Field
        </DialogTitle>
        <PopupContainer>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="body2" gutterBottom>
                Select Field Type
                <Typography color="error.main" component="span">
                  *
                </Typography>
              </Typography>
              <TextField
                id="form_type"
                color="secondary"
                variant="outlined"
                size="small"
                fullWidth
                select
                value={type}
                onChange={(event) => {
                  setType(event.target.value);
                }}
              >
                {optionsList.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" gutterBottom>
                Label
              </Typography>
              <TextField
                id="add_field_label"
                fullWidth
                size="small"
                value={label}
                onChange={(event) => {
                  setLabel(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Help Text
              </Typography>
              <TextField
                id="add_help_text"
                fullWidth
                size="small"
                value={helpText}
                onChange={(event) => {
                  setHelpText(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              {type === 1 && <TextFieldDetails />}
              {type === 2 && <TextAreaDetails />}
              {type === 3 && <CheckDetails />}
              {type === 4 && <RadioDetails />}
              {type === 5 && <DropdownDetails />}
              {type === 6 && <DateDetails />}
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
            onClick={handleAdd}
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

export default EditField;
