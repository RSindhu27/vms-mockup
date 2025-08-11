import React, { useState } from "react";
import {
  Box,
  Grid,
  Stack,
  TextField,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
  MenuItem,
  Autocomplete,
} from "@mui/material";
import EntityForm from "./Forms/EntityForm";
import { PageButton, TabWrapper } from "../../../Components/Page";
import Framework from "./Forms/Framework";
import SelectedWorkflow from "./Forms/SelectedWorkflow";
import ValidationRule from "./Forms/ValidationRule";

const entityFormList = [
  {
    value: 1,
    label: "Form 1",
  },
  {
    value: 2,
    label: "Form 2",
  },
  {
    value: 3,
    label: "Form 3",
  },
];

const assessmentTemplateList = [
  {
    value: 1,
    label: "Assessment TemplateList 1",
  },
  {
    value: 2,
    label: "Assessment TemplateList 2",
  },
  {
    value: 3,
    label: "Assessment TemplateList 3",
  },
];

const workflowList = [
  {
    value: 1,
    label: "Workflow 1",
  },
  {
    value: 2,
    label: "Workflow 2",
  },
  {
    value: 3,
    label: "Workflow 3",
  },
];

const frameworkList = [
  {
    value: 1,
    label: "Framework 1",
  },
  {
    value: 2,
    label: "Framework 2",
  },
  {
    value: 3,
    label: "Framework 3",
  },
];

function NewEntityType() {
  const [typeName, setTypeName] = useState("");
  const [prefix, setPrefix] = useState("");
  const [description, setDescription] = useState("");
  const [assessmentRequired, setAssessmentRequired] = useState("yes");
  const [buildingRequired, setBuildingRequired] = useState("yes");
  const [roomRequired, setRoomRequired] = useState("yes");
  const [approvalRequired, setApprovalRequired] = useState("yes");
  const [taskDependency, setTaskDependency] = useState("yes");
  const [entityForm, setEntityForm] = useState(1);
  const [assessmentTemplate, setAssessmentTemplate] = useState(1);
  const [workflow, setWorkflow] = useState(1);
  const [framework, setFramework] = useState();

  const handleAssessmentRequired = (event, newType) => {
    setAssessmentRequired(newType);
  };

  const handleBuildingRequired = (event, newType) => {
    setBuildingRequired(newType);
  };

  const handleRoomRequired = (event, newType) => {
    setRoomRequired(newType);
  };

  const handleApprovalRequired = (event, newType) => {
    setApprovalRequired(newType);
  };

  const handleTaskDependency = (event, newType) => {
    setTaskDependency(newType);
  };

  return (
    <>
      <TabWrapper>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" gutterBottom>
              Type Name
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
              id="entity_type_name"
              placeholder="Enter Type Name"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              value={typeName}
              onChange={(event) => {
                setTypeName(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" gutterBottom>
              Prefix
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
              id="entity_prefix"
              placeholder="Enter Prefix"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              value={prefix}
              onChange={(event) => {
                setPrefix(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
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
              id="entity_description"
              color="secondary"
              value={description}
              fullWidth
              multiline
              rows={4}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6} lg={3}>
                <Typography variant="body1" gutterBottom>
                  <b>Assessment required?</b>
                  <Typography
                    component="span"
                    variant="body2"
                    color="error.main"
                    gutterBottom
                  >
                    *
                  </Typography>
                </Typography>
                <ToggleButtonGroup
                  exclusive
                  value={assessmentRequired}
                  onChange={handleAssessmentRequired}
                  size="small"
                >
                  <ToggleButton
                    color="secondary"
                    value="yes"
                    sx={{ width: 60 }}
                  >
                    Yes
                  </ToggleButton>
                  <ToggleButton color="error" value="no" sx={{ width: 60 }}>
                    No
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={3}>
                <Typography variant="body1" gutterBottom>
                  <b>Is building required?</b>
                  <Typography
                    component="span"
                    variant="body2"
                    color="error.main"
                    gutterBottom
                  >
                    *
                  </Typography>
                </Typography>
                <ToggleButtonGroup
                  exclusive
                  value={buildingRequired}
                  onChange={handleBuildingRequired}
                  size="small"
                >
                  <ToggleButton
                    value="yes"
                    color="secondary"
                    sx={{ width: 60 }}
                  >
                    Yes
                  </ToggleButton>
                  <ToggleButton value="no" color="error" sx={{ width: 60 }}>
                    No
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={3}>
                <Typography variant="body1" gutterBottom>
                  <b>Is room required?</b>
                  <Typography
                    component="span"
                    variant="body2"
                    color="error.main"
                    gutterBottom
                  >
                    *
                  </Typography>
                </Typography>
                <ToggleButtonGroup
                  exclusive
                  value={roomRequired}
                  onChange={handleRoomRequired}
                  size="small"
                >
                  <ToggleButton
                    value="yes"
                    color="secondary"
                    sx={{ width: 60 }}
                  >
                    Yes
                  </ToggleButton>
                  <ToggleButton value="no" color="error" sx={{ width: 60 }}>
                    No
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={3}>
                <Typography variant="body1" gutterBottom>
                  <b>Approval required?</b>
                  <Typography
                    component="span"
                    variant="body2"
                    color="error.main"
                    gutterBottom
                  >
                    *
                  </Typography>
                </Typography>
                <ToggleButtonGroup
                  exclusive
                  value={approvalRequired}
                  onChange={handleApprovalRequired}
                  size="small"
                >
                  <ToggleButton
                    value="yes"
                    color="secondary"
                    sx={{ width: 60 }}
                  >
                    Yes
                  </ToggleButton>
                  <ToggleButton value="no" color="error" sx={{ width: 60 }}>
                    No
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="body2" gutterBottom>
              Select Entity Form
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
              id="entity_form"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              select
              value={entityForm}
              onChange={(event) => {
                setEntityForm(event.target.value);
              }}
            >
              {entityFormList.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          {assessmentRequired === "yes" ? (
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="body2" gutterBottom>
                Select Assessment Template
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
                id="entity_assessment_template"
                color="secondary"
                variant="outlined"
                size="small"
                fullWidth
                select
                value={assessmentTemplate}
                onChange={(event) => {
                  setAssessmentTemplate(event.target.value);
                }}
              >
                {assessmentTemplateList.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          ) : (
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="body2" gutterBottom>
                Select Framework
                <Typography
                  component="span"
                  variant="body2"
                  color="error.main"
                  gutterBottom
                >
                  *
                </Typography>
              </Typography>
              <Autocomplete
                multiple
                size="small"
                id="entity_framework"
                options={frameworkList}
                getOptionLabel={(option) => option.label}
                filterSelectedOptions
                value={framework}
                onChange={(event, newValue) => {
                  setFramework(newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Enter Framework" />
                )}
              />
            </Grid>
          )}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="body2" gutterBottom>
              Select Workflow
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
              id="entity_workflow"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              select
              value={workflow}
              onChange={(event) => {
                setWorkflow(event.target.value);
              }}
            >
              {workflowList.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          {/* Entity Form */}
          <EntityForm />
          {/* Selected Framework */}
          <Grid item xs={12}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs>
                <Typography variant="h5" gutterBottom>
                  Selected Entity Form
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" gutterBottom>
                  <b>Task dependency required?</b>
                  <Typography
                    component="span"
                    variant="body2"
                    color="error.main"
                    gutterBottom
                  >
                    *
                  </Typography>
                </Typography>
              </Grid>
              <Grid item>
                <ToggleButtonGroup
                  exclusive
                  value={taskDependency}
                  onChange={handleTaskDependency}
                  size="small"
                >
                  <ToggleButton
                    color="secondary"
                    value="yes"
                    sx={{ width: 60 }}
                  >
                    Yes
                  </ToggleButton>
                  <ToggleButton color="error" value="no" sx={{ width: 60 }}>
                    No
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Framework />
          </Grid>
          <Grid item xs={12}>
            <ValidationRule />
          </Grid>
          <Grid item xs={12}>
            <SelectedWorkflow />
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
          <PageButton color="secondary">Save</PageButton>
        </Box>
      </Stack>
    </>
  );
}

export default NewEntityType;
