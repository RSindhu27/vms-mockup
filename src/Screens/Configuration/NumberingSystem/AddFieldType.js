import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Autocomplete,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import { PopupContainer, PageCircleButton } from "../../../Components/Page";

const listManagerList = [
  {
    label: "List Manager 1",
    value: 1,
  },
  {
    label: "List Manager 2",
    value: 2,
  },
  {
    label: "List Manager 3",
    value: 3,
  },
  {
    label: "List Manager 4",
    value: 4,
  },
  {
    label: "List Manager 5",
    value: 5,
  },
];

const departmentList = [
  {
    label: "Department 1",
    value: 1,
  },
  {
    label: "Department 2",
    value: 2,
  },
  {
    label: "Department 3",
    value: 3,
  },
  {
    label: "Department 4",
    value: 4,
  },
  {
    label: "Department 5",
    value: 5,
  },
];

const fieldTypeList = [
  { label: "List Manager" },
  { label: "System Data Field Type" },
  { label: "Document Type" },
  { label: "Constant String" },
  { label: "Year" },
];

function AddFieldType() {
  const [open, setOpen] = useState(false);
  const [selectListManager, setSelectListManager] = useState("");
  const [selectFieldType, setSelectFieldType] = useState(fieldTypeList[0]);
  const [selectDepartment, setSelectDepartment] = useState("");
  const [year, setYear] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
        Add Field Type
      </PageCircleButton>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle sx={{ borderBottom: 1, borderColor: "divider" }}>
          Add Field Type
        </DialogTitle>
        <PopupContainer>
          <Grid container spacing={2}>
            <Grid item xs={12} sm>
              <Typography variant="body2" gutterBottom>
                Select Field Type
              </Typography>
              <Autocomplete
                id="add_field_type_select"
                size="small"
                fullWidth
                disableClearable
                options={fieldTypeList}
                value={selectFieldType}
                onChange={(event, newValue) => {
                  setSelectFieldType(newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Search Picklist" />
                )}
              />
            </Grid>
            {selectFieldType.label === "Year" ? (
              <>
                <Grid item xs={12}>
                  <Typography variant="body2" gutterBottom>
                    Enter Year
                  </Typography>
                  <TextField
                    id="add_field_year"
                    placeholder="Enter Year"
                    color="secondary"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={year}
                    onChange={(event) => {
                      setYear(event.target.value);
                    }}
                  />
                </Grid>
              </>
            ) : (
              <>
                <Grid item xs={12}>
                  <Typography variant="body2" gutterBottom>
                    Select List Manager
                  </Typography>
                  <TextField
                    id="add_field_list_manager"
                    select
                    fullWidth
                    size="small"
                    value={selectListManager}
                    onChange={(event) => {
                      setSelectListManager(event.target.value);
                    }}
                  >
                    {listManagerList.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" gutterBottom>
                    Select Department
                  </Typography>
                  <TextField
                    id="add_field_select_department"
                    select
                    fullWidth
                    size="small"
                    value={selectDepartment}
                    onChange={(event) => {
                      setSelectDepartment(event.target.value);
                    }}
                  >
                    {departmentList.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </>
            )}
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

export default AddFieldType;
