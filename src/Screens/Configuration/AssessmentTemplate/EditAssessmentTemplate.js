import React, { useState } from "react";
import { PageButton, TabWrapper } from "../../../Components/Page";
import {
  Box,
  Grid,
  Stack,
  TextField,
  Typography,
  IconButton,
  MenuItem,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddSection from "./AddSection";
import AddedSections from "./AddedSections";
import AddBusinessRule from "./Forms/AddBusinessRule";
import AddWorkflow from "./Forms/AddWorkflow";
import BusinessRuleSection from "./Forms/BusinessRuleSection";
import BusinessAndTask from "./BusinessAndTask";

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

function EditAssessmentTemplate() {
  const [name, setName] = useState("");
  const [comments, setComments] = useState("");
  const [documentType, setDocumentType] = useState(1);
  const [assessmentRequired, setAssessmentRequired] = useState("new");

  const handleAssessmentRequired = (event, newType) => {
    setAssessmentRequired(newType);
  };
  const navigate = useNavigate();

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
              Edit Assessment Template
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <TabWrapper>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Stack spacing={2} direction="row" alignItems="center">
              <Typography variant="body1">
                <b>Task Type:</b>
              </Typography>
              <ToggleButtonGroup
                exclusive
                value={assessmentRequired}
                onChange={handleAssessmentRequired}
                size="small"
              >
                <ToggleButton color="secondary" value="new" sx={{ width: 60 }}>
                  New
                </ToggleButton>
                <ToggleButton color="info" value="no" sx={{ width: 90 }}>
                  Revision
                </ToggleButton>
              </ToggleButtonGroup>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" gutterBottom>
              Assessment Template Name
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
              id="assessment_template_name"
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
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" gutterBottom>
              Inherit Assessment Template
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
              id="assessment_template_inherit"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              select
              value={documentType}
              onChange={(event) => {
                setDocumentType(event.target.value);
              }}
            >
              {optionList.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Typography variant="body1">
                  <strong>Add Section:</strong>
                </Typography>
              </Grid>
              <Grid item>
                <AddSection key="add_section" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs>
            <Typography variant="body2" gutterBottom>
              Comments
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
              id="assessment_template_comments"
              placeholder="Enter Name"
              color="secondary"
              multiline
              variant="outlined"
              size="small"
              fullWidth
              value={comments}
              onChange={(event) => {
                setComments(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Added Sections</Typography>
          </Grid>
          <Grid item xs={12}>
            <AddedSections />
          </Grid>
          <Grid item xs={12}>
            <BusinessRuleSection />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2} justifyContent="flex-end">
              <Grid item>
                <AddBusinessRule />
              </Grid>
              <Grid item>
                <AddWorkflow />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <BusinessAndTask />
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

export default EditAssessmentTemplate;
