import React, { useState } from "react";
import {
  FormControlLabel,
  Switch,
  Typography,
  Grid,
  Stack,
  Box,
  FormGroup,
  Checkbox,
  TextField,
  MenuItem,
  Radio,
  RadioGroup,
  Paper,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { Table } from "../../../../Components/Table";
import Data from "./././DataTemplate.json";
import { Link } from "react-router-dom";
import { PageButton } from "../../../../Components/Page";
import AddWorkflow from "../../../Template/TemplateX/AddWorkflow";

// List options for select fields
const routeForList = [
  { value: 1, label: "Peer Review" },
  { value: 2, label: "Review" },
];
const reviewerList = [
  { value: 1, label: "adupre1@amazon.de" },
  { value: 2, label: "ljerzycowski2@multiply.com" },
  { value: 3, label: "dliggons3@cbslocal.com" },
  { value: 4, label: "sledram4@ucla.edu" },
];

// Custom section for workflow details
function WorkflowDetailsSection({
  routingReview,
  setRoutingReview,
  peerReview,
  setPeerReview,
  routeFor,
  setRouteFor,
  reviewer,
  setReviewer,
  expected,
  setExpected,
}) {
  return (
    <Grid container spacing={2} alignItems="center" mt={1}>
      <Grid item xs={12} sm={4}>
        <Typography variant="body2" gutterBottom>
          Route for{" "}
          <Typography component="span" color="error.main">
            *
          </Typography>
        </Typography>
        <TextField
          select
          fullWidth
          size="small"
          value={routeFor}
          onChange={(e) => setRouteFor(e.target.value)}
        >
          {routeForList.map((opt) => (
            <MenuItem key={opt.value} value={opt.value}>
              {opt.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Typography variant="body2" gutterBottom>
          Select Reviewer{" "}
          <Typography component="span" color="error.main">
            *
          </Typography>
        </Typography>
        <TextField
          select
          fullWidth
          size="small"
          value={reviewer}
          onChange={(e) => setReviewer(e.target.value)}
        >
          {reviewerList.map((opt) => (
            <MenuItem key={opt.value} value={opt.value}>
              {opt.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Typography variant="body2" gutterBottom>
          Target Date{" "}
          <Typography component="span" color="error.main">
            *
          </Typography>
        </Typography>
        <DatePicker
          value={expected}
          onChange={setExpected}
          slotProps={{
            textField: { size: "small", fullWidth: true },
          }}
        />
      </Grid>
    </Grid>
  );
}

const columns = [
  { field: "id", headerName: "ID", width: 120 },
  {
    field: "template_name",
    headerName: "Template Name",
    renderCell: (params) => (
      <Typography variant="body2" component={Link} to="#" color="info.main">
        {params.row.template_name}
      </Typography>
    ),
    minWidth: 150,
    flex: 1,
  },
  {
    field: "same_template_number",
    headerName: "Retain Same Template Number?",
    renderCell: (params) => (
      <FormControlLabel
        control={<Switch checked={params.row.same_template_number} />}
        label={params.row.same_template_number ? "Yes" : "No"}
      />
    ),
    minWidth: 150,
    flex: 1,
  },
  {
    field: "bind_as",
    headerName: "Bind As",
    renderCell: (params) => (
      <RadioGroup
        row
        value={params.row.bind_as ? "copy" : "link"}
        name={`bind_as_${params.row.id}`}
      >
        <FormControlLabel
          value="copy"
          control={<Radio color="primary" />}
          label="Copy"
        />
        <FormControlLabel
          value="link"
          control={<Radio color="primary" />}
          label="Link"
        />
      </RadioGroup>
    ),
    minWidth: 150,
    flex: 1,
  },
];

function TemplateList() {
  // Table selection & approval state
  const [selectedTemplates, setSelectedTemplates] = useState([]);
  const [approvalRequired, setApprovalRequired] = useState(false);
  const [comments, setComments] = useState("");

  // Workflow details state
  const [routingReview, setRoutingReview] = useState(true); // Default to checked for demo
  const [peerReview, setPeerReview] = useState(false);
  const [routeFor, setRouteFor] = useState(2); // Default to "Review"
  const [reviewer, setReviewer] = useState(1);
  const [expected, setExpected] = useState(dayjs("2022-04-17"));

  // Table row selection handler
  const handleSelectionChange = (selection) => {
    setSelectedTemplates(selection);
  };

  // Approval required checkbox handler
  const handleApprovalChange = (event) => {
    setApprovalRequired(event.target.checked);
  };

  return (
    <>
      <Grid item xs={12}>
        <Table
          data={Data.picklist}
          columns={columns}
          columnVisibilityModel={{ id: false }}
          checkboxSelection
          onRowSelectionModelChange={handleSelectionChange}
        />
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          py={2}
          spacing={2}
          width="100%"
        >
          <Box>
            <PageButton color="error">Reset</PageButton>
          </Box>
          <Box>
            <PageButton color="primary">Save</PageButton>
          </Box>
        </Stack>
      </Grid>

      <Box sx={{ width: "100%", pl: 4, pr: 2, pt: 2 }}>
        {/* Approval Required and AddWorkflow in same row */}
        <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={approvalRequired}
                onChange={handleApprovalChange}
              />
            }
            label="Approval Required?"
          />
          {approvalRequired && <AddWorkflow />}
        </Stack>

        {/* If Approval Required, show workflow details & comments below */}
        {approvalRequired && (
          <>
            <Box sx={{ mt: 2 }}>
              <WorkflowDetailsSection
                routingReview={routingReview}
                setRoutingReview={setRoutingReview}
                peerReview={peerReview}
                setPeerReview={setPeerReview}
                routeFor={routeFor}
                setRouteFor={setRouteFor}
                reviewer={reviewer}
                setReviewer={setReviewer}
                expected={expected}
                setExpected={setExpected}
              />
            </Box>
            {/* Comments below workflow section */}
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <b>Comments</b>
              </Typography>
              <TextField
                multiline
                minRows={3}
                placeholder="Enter your comments here..."
                fullWidth
                variant="outlined"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
              />
            </Box>
          </>
        )}

        {/* If Approval Required is NOT checked, show Comments under checkbox */}
        {!approvalRequired && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <b>Comments</b>
            </Typography>
            <TextField
              multiline
              minRows={3}
              placeholder="Enter your comments here..."
              fullWidth
              variant="outlined"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            />
          </Box>
        )}
      </Box>

      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        py={2}
        spacing={2}
        width="100%"
      >
        <Box>
          <PageButton color="error">Cancel</PageButton>
        </Box>

        {selectedTemplates.length > 0 && (
          <Box>
            <PageButton color="success">Submit</PageButton>
          </Box>
        )}
      </Stack>
    </>
  );
}

export default TemplateList;
