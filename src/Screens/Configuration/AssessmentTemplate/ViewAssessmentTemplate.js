import React, { useState } from "react";
import { PageButton, TabWrapper } from "../../../Components/Page";
import {
  Box,
  Grid,
  Stack,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ViewAddedSections from "./ViewForm/ViewAddedSections";
import ViewBusinessRuleSection from "./ViewForm/ViewBusinessRuleSection";
import ViewBusinessRuleList from "./ViewForm/ViewBusinessRuleList";
import ViewAuditTrial from "./ViewForm/ViewAuditTrial";

function ViewAssessmentTemplate() {
  const [name, setName] = useState("Assessment Template 1");
  const [action, setAction] = useState("New");
  const [documentType, setDocumentType] = useState("N/A");

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
              View Assessment Template
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <TabWrapper>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
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
                setAction(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="body2" gutterBottom>
              Action
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
              id="assessment_template_action"
              placeholder="Enter Name"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              value={action}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
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
              value={documentType}
              onChange={(event) => {
                setDocumentType(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Added Sections</Typography>
          </Grid>
          <Grid item xs={12}>
            <ViewAddedSections />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Business Rule Sections</Typography>
          </Grid>
          <Grid item xs={12}>
            <ViewBusinessRuleSection />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Business Rule List</Typography>
          </Grid>
          <Grid item xs={12}>
            <ViewBusinessRuleList />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Audit Trial</Typography>
          </Grid>
          <Grid item xs={12}>
            <ViewAuditTrial />
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

export default ViewAssessmentTemplate;
