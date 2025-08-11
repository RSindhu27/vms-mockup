import React, { useState } from "react";
import {
  Box,
  Grid,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { PageButton, TabWrapper } from "../../../Components/Page";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DmsForms from "./Forms/DmsForms";
import VmsFrom from "./Forms/VmsForm";

function EditWorkflowType() {
  const navigate = useNavigate();
  const [workflowFor, setWorkflowFor] = useState("vms");
  const [workflowType, setWorkflowType] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
      <Box mb={2}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <IconButton onClick={() => navigate(-1)} color="secondary">
              <ArrowBackIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography variant="h5" component="p">
              Edit Workflow Type
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <TabWrapper>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="body2" gutterBottom>
              Workflow Release Conditions
            </Typography>
            <TextField
              id="workflow_type_release_conditions"
              select
              fullWidth
              size="small"
              value={workflowFor}
              onChange={(event) => {
                setWorkflowFor(event.target.value);
              }}
            >
              <MenuItem key="DMS" value="dms">
                DMS
              </MenuItem>
              <MenuItem key="VMS" value="vms">
                VMS
              </MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="body2" gutterBottom>
              Workflow Type Name
            </Typography>
            <TextField
              id="workflow_type_name"
              placeholder="Workflow Type Name"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              value={workflowType}
              onChange={(event) => {
                setWorkflowType(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" gutterBottom>
              Description
            </Typography>
            <TextField
              id="workflow_type_Description"
              placeholder="Enter Description"
              multiline
              fullWidth
              rows={4}
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            {workflowFor === "dms" ? <DmsForms /> : <VmsFrom />}
          </Grid>
        </Grid>
      </TabWrapper>
      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        py={2}
        spacing={2}
      >
        <Box>
          <PageButton color="error">Cancel</PageButton>
        </Box>
        <Box>
          <PageButton color="primary">Save</PageButton>
        </Box>
      </Stack>
    </>
  );
}

export default EditWorkflowType;
