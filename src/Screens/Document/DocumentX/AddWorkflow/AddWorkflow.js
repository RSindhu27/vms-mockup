import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Grid,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import {
  PopupContainer,
  VisBox,
  VisuallyHiddenInput,
} from "../../../../Components/Page";
import { Link } from "react-router-dom";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import SearchIcon from "@mui/icons-material/Search";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { TableDeleteRow } from "../../../../Components/Table";
import SelectUsers from "./SelectUsers";

const workFlowTypeList = [
  {
    value: "csv_workflow_serial",
    label: "CSV Workflow Serial",
  },
  {
    value: "csv_workflow_parallel",
    label: "CSV Workflow Parallel",
  },
];

function AddWorkflow() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [coOrdinator, setCoOrdinator] = useState("");
  const [expected, setExpected] = useState(dayjs("2022-04-17"));
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState();
  const [workflowType, setWorkflowType] = useState("csv_workflow_serial");

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
        variant="contained"
        startIcon={<AddIcon fontSize="inherit" />}
        disableElevation
        onClick={handleClickOpen}
        size="small"
      >
        Add Workflow
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle sx={{ borderBottom: 1, borderColor: "divider" }}>
          Assign Workflow
        </DialogTitle>
        <PopupContainer>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Name
              </Typography>
              <TextField
                id="workflow-name"
                placeholder="Name"
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
              <Typography variant="body2" gutterBottom>
                Description
              </Typography>
              <TextField
                id="workflow-description"
                placeholder="Description"
                color="secondary"
                variant="outlined"
                size="small"
                fullWidth
                multiline
                rows={4}
                value={description}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Select Workflow Type
              </Typography>
              <TextField
                id="workflow-type"
                placeholder="Type"
                color="secondary"
                variant="outlined"
                size="small"
                fullWidth
                select
                value={workflowType}
                onChange={(event) => {
                  setWorkflowType(event.target.value);
                }}
              >
                {workFlowTypeList.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                <b>Workflow Type Details</b>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{ p: 2, borderRadius: 2, bgcolor: "primary.extraLight" }}
              >
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <Typography variant="body2">WORKFLOW NAME:</Typography>
                    <Typography variant="body1">
                      <b>SOME WORKFLOW NAME</b>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" textAlign="right">
                      WORKFLOW NUMBER:
                    </Typography>
                    <Typography variant="body1" textAlign="right">
                      <b>564FSE5DS5V</b>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2">
                      ASSOCIATED DOCUMENT:
                    </Typography>
                    <Typography
                      variant="body1"
                      component={Link}
                      to="#"
                      sx={{ color: "info.main" }}
                    >
                      <b>DOCUMENT 01</b>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" textAlign="right">
                      VERSION:
                    </Typography>
                    <Typography
                      variant="body1"
                      textAlign="right"
                      sx={{ color: "info.main" }}
                    >
                      <b>V3</b>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2">
                      WORKFLOW DESCRIPTION:{" "}
                    </Typography>
                    <Typography
                      variant="body1"
                      component={Link}
                      to="#"
                      sx={{ color: "info.main" }}
                    >
                      <b>DESCRIPTION</b>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" textAlign="right">
                      RELEASE TYPE:{" "}
                    </Typography>
                    <Typography variant="body1" textAlign="right">
                      <b>MANUAL</b>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2">WORKFLOW SEQUENCE:</Typography>
                    <Typography variant="body1">
                      <b>PARALLEL</b>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" textAlign="right">
                      TARGET DATE:
                    </Typography>
                    <Typography variant="body1" textAlign="right">
                      <b>5/2/2024</b>
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant="body1"
                      textAlign="right"
                      component={Link}
                      to="/app/workflow/workflow/edit-workflow"
                      sx={{ color: "info.main", display: "block" }}
                    >
                      <b>More Details...</b>
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="body2" gutterBottom>
                    Choose Co-ordinator
                  </Typography>
                  <TextField
                    id="workflow-co-ordinator"
                    placeholder="Search"
                    color="secondary"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={coOrdinator}
                    onChange={(event) => {
                      setCoOrdinator(event.target.value);
                    }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" gutterBottom>
                    Expected Effective Date:
                  </Typography>
                  <DatePicker
                    value={expected}
                    onChange={(newValue) => setExpected(newValue)}
                    slotProps={{
                      textField: {
                        size: "small",
                        fullWidth: true,
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Grid container spacing={2}>
                    <Grid item>
                      <Typography variant="body2" gutterBottom>
                        Attachment
                      </Typography>
                      <Button
                        color="info"
                        variant="outlined"
                        startIcon={<InsertLinkIcon />}
                        component="label"
                      >
                        Browse
                        <VisuallyHiddenInput
                          type="file"
                          onChange={handleChange}
                        />
                      </Button>
                    </Grid>
                    <Grid item>
                      {file ? (
                        <>
                          <VisBox>
                            <Typography variant="body1" color="text.secondary">
                              {fileName}
                            </Typography>{" "}
                            <TableDeleteRow onDelete={() => handleDelete()} />
                          </VisBox>
                        </>
                      ) : (
                        ""
                      )}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Button component={Link} to="#" variant="text">
                    <u>Notification Details</u>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                <b>Select Users</b>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <SelectUsers
                key="reviewer"
                role="Reviewer"
                sequence="Serial"
                order="01"
                checklist="Checklist 1"
              />
            </Grid>
            <Grid item xs={12}>
              <SelectUsers
                key="approver"
                role="Approver"
                sequence="Serial"
                order="02"
                checklist="Checklist 1"
              />
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
            variant="contained"
            color="info"
            disableElevation
            size="large"
          >
            Map
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddWorkflow;
