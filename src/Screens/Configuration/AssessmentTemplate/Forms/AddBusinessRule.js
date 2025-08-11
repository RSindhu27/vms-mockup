import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Autocomplete,
  Grid,
  MenuItem,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Table as TableX,
  Typography,
  TableBody,
} from "@mui/material";
import { PopupContainer } from "../../../../Components/Page";
import { Table } from "../../../../Components/Table";
import Data2 from "./DataFour.json";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";

const optionList = [
  {
    value: 1,
    label: "Option 1",
  },
  {
    value: 2,
    label: "Option 2",
  },
  {
    value: 3,
    label: "Option 3",
  },
  {
    value: 4,
    label: "Option 4",
  },
];

const columns1 = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "framework",
    headerName: "Framework",
    minWidth: 150,
    flex: 1,
  },
];

const columns2 = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "deliverables",
    headerName: "Deliverables",
    minWidth: 150,
    flex: 1,
  },
];

const ruleList = [
  {
    value: 1,
    label: "Framework",
  },
  {
    value: 2,
    label: "Deliverables",
  },
];

const statusList = [
  {
    value: 1,
    label: "Complete",
  },
  {
    value: 2,
    label: "Verified",
  },
];

function AddBusinessRule() {
  const [open, setOpen] = useState(false);
  const [added, setAdded] = useState(false);
  const [name, setName] = useState("");
  const [rule, setRule] = useState(1);
  const [validationStatus, setValidationStatus] = useState(1);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    setOpen(false);
    setAdded(true);
  };

  return (
    <>
      <Button
        color={added ? "info" : "secondary"}
        variant="contained"
        disableElevation
        onClick={handleClickOpen}
        startIcon={added ? <EditIcon /> : <AddIcon />}
      >
        {added ? "Edit Business Rule" : "Add Business Rule"}
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg">
        <DialogTitle sx={{ borderBottom: 1, borderColor: "divider" }}>
          Add Business Rule
        </DialogTitle>
        <PopupContainer>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Business Rule Name
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
                id="business_rule_name"
                placeholder="Enter Name"
                color="secondary"
                variant="outlined"
                size="small"
                fullWidth
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                <b>Define Rule</b>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TableContainer
                sx={{ border: 1, borderColor: "divider", borderRadius: 1 }}
              >
                <TableX
                  size="small"
                  sx={{
                    borderCollapse: "separate",
                    tableLayout: "fixed",
                    minWidth: 740,
                  }}
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>Section</TableCell>
                      <TableCell>Condition</TableCell>
                      <TableCell>Assessment Result</TableCell>
                      <TableCell>Select Framework</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {/* Row 1*/}
                    <TableRow>
                      <TableCell component="th" scope="row">
                        <TextField
                          color="secondary"
                          select
                          defaultValue={1}
                          size="small"
                          fullWidth
                        >
                          <MenuItem key={1} value={1}>
                            Section 1
                          </MenuItem>
                          <MenuItem key={2} value={2}>
                            Section 2
                          </MenuItem>
                          <MenuItem key={3} value={3}>
                            Section 3
                          </MenuItem>
                        </TextField>
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <TextField
                          color="secondary"
                          select
                          defaultValue={1}
                          size="small"
                          fullWidth
                        >
                          <MenuItem key={1} value={1}>
                            Equals To
                          </MenuItem>
                          <MenuItem key={2} value={2}>
                            Greater Than
                          </MenuItem>
                          <MenuItem key={3} value={3}>
                            Less Than
                          </MenuItem>
                        </TextField>
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <TextField
                          color="secondary"
                          select
                          defaultValue={1}
                          size="small"
                          fullWidth
                        >
                          <MenuItem key={1} value={1}>
                            Assessment 1
                          </MenuItem>
                          <MenuItem key={2} value={2}>
                            Assessment 2
                          </MenuItem>
                          <MenuItem key={3} value={3}>
                            Assessment 3
                          </MenuItem>
                        </TextField>
                      </TableCell>
                      <TableCell component="th" scope="row" rowSpan={2}>
                        <Autocomplete
                          multiple
                          id="add_business_framework"
                          options={optionList}
                          getOptionLabel={(option) => option.label}
                          size="small"
                          /* inputValue={assessorsGroup}
                            onInputChange={(event, newInputValue) => {
                            setAssessorsGroup(newInputValue);
                          }} */
                          renderInput={(params) => (
                            <TextField {...params} placeholder="Framework" />
                          )}
                        />
                      </TableCell>
                    </TableRow>
                    {/* Row 2*/}
                    <TableRow>
                      <TableCell component="th" scope="row">
                        <TextField
                          color="secondary"
                          select
                          defaultValue={1}
                          size="small"
                          fullWidth
                        >
                          <MenuItem key={1} value={1}>
                            Section 1
                          </MenuItem>
                          <MenuItem key={2} value={2}>
                            Section 2
                          </MenuItem>
                          <MenuItem key={3} value={3}>
                            Section 3
                          </MenuItem>
                        </TextField>
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <TextField
                          color="secondary"
                          select
                          defaultValue={1}
                          size="small"
                          fullWidth
                        >
                          <MenuItem key={1} value={1}>
                            Equals To
                          </MenuItem>
                          <MenuItem key={2} value={2}>
                            Greater Than
                          </MenuItem>
                          <MenuItem key={3} value={3}>
                            Less Than
                          </MenuItem>
                        </TextField>
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <TextField
                          color="secondary"
                          select
                          defaultValue={1}
                          size="small"
                          fullWidth
                        >
                          <MenuItem key={1} value={1}>
                            Assessment 1
                          </MenuItem>
                          <MenuItem key={2} value={2}>
                            Assessment 2
                          </MenuItem>
                          <MenuItem key={3} value={3}>
                            Assessment 3
                          </MenuItem>
                        </TextField>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </TableX>
              </TableContainer>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                <b>Validation Rule</b>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Typography variant="body2" gutterBottom>
                Select Type
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
                id="validation_rule"
                color="secondary"
                variant="outlined"
                size="small"
                fullWidth
                select
                value={rule}
                onChange={(event) => {
                  setRule(event.target.value);
                }}
              >
                {ruleList.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Typography variant="body2" gutterBottom>
                Entity Status based on selected{" "}
                {rule === 1 ? "framework" : "deliverables"} completion
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
                id="validation_status"
                color="secondary"
                variant="outlined"
                size="small"
                fullWidth
                select
                value={validationStatus}
                onChange={(event) => {
                  setValidationStatus(event.target.value);
                }}
              >
                {statusList.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                <b>Select Frameworks</b>
              </Typography>
            </Grid>
            {rule === 1 ? (
              <Grid item xs={12}>
                <Table
                  data={Data2.framework}
                  columns={columns1}
                  checkboxSelection
                  disableRowSelectionOnClick
                />
              </Grid>
            ) : (
              <Grid item xs={12}>
                <Table
                  data={Data2.deliverables}
                  columns={columns2}
                  checkboxSelection
                  disableRowSelectionOnClick
                />
              </Grid>
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
            onClick={handleSave}
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

export default AddBusinessRule;
