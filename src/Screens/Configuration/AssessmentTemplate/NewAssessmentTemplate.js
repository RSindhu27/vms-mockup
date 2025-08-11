import React, { useState } from "react";
import { PageButton, TabWrapper } from "../../../Components/Page";
import {
  Box,
  Grid,
  MenuItem,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import AddSection from "./AddSection";
import AddedSections from "./AddedSections";
import AddBusinessRule from "./Forms/AddBusinessRule";
import AddWorkflow from "./Forms/AddWorkflow";
import BusinessRuleSection from "./Forms/BusinessRuleSection";
import BusinessAndTask from "./BusinessAndTask";
import ESign from "./Forms/ESign";

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

function NewAssessmentTemplate() {
  const [name, setName] = useState("");
  const [comments, setComments] = useState("");
  const [documentType, setDocumentType] = useState(1);
  const [assessmentRequired, setAssessmentRequired] = useState("new");

  const handleAssessmentRequired = (event, newType) => {
    setAssessmentRequired(newType);
  };

  return (
    <>
      <TabWrapper>
        <Grid container spacing={2} alignItems="flex-end">
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
                <ToggleButton
                  color="secondary"
                  value="new"
                  sx={{ width: 60, height: 30, lineHeight: 0.75 }}
                >
                  New
                </ToggleButton>
                <ToggleButton
                  color="info"
                  value="no"
                  sx={{ width: 90, height: 30, lineHeight: 0.75 }}
                >
                  Revision
                </ToggleButton>
              </ToggleButtonGroup>
            </Stack>
            <ESign />
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
          <Grid item xs={12} sm="auto">
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Typography variant="body1">
                  <strong>Add Section:</strong>
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
                <AddSection key="add_section" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm>
            <Typography variant="body2" gutterBottom>
              Comments
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
            <BusinessAndTask />
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
          <PageButton color="info">Reset</PageButton>
        </Box>
        <Box>
          <PageButton color="secondary">Save</PageButton>
        </Box>
      </Stack>
    </>
  );
}

export default NewAssessmentTemplate;
