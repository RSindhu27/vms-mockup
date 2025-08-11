import React, { useState } from "react";
import {
  Typography,
  Grid,
  Stack,
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  MenuItem,
} from "@mui/material";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import SearchIcon from "@mui/icons-material/Search";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import TreeView from "./TreeView";
import documentFromData from "./DataBindFromDocument.json";
import documentToData from "./DataBindToDocument.json";
import { PageButton } from "../../../../Components/Page";
import AddWorkflow from "../../../Template/TemplateX/AddWorkflow";

// Static route/reviewer options
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

const DocumentList = () => {
  const [selectedDocs, setSelectedDocs] = useState([]);
  const [approvalRequired, setApprovalRequired] = useState(false);
  const [selectedBindToEntities, setSelectedBindToEntities] = useState([]);
  const [documentList] = useState([
    { id: 1, name: "ARC/CAT/SUBCAT/CSVDOCXYZ00.01", copy: true },
    { id: 2, name: "ARC/CAT/SUBCAT/CSVDOCXYZ00.02", copy: true },
    { id: 3, name: "ARC/CAT/SUBCAT/CSVDOCXYZ00.03", copy: true },
    { id: 4, name: "ARC/CAT/SUBCAT/CSVDOCXYZ00.04", copy: true },
  ]);

  // Workflow section state
  const [routeFor, setRouteFor] = useState(2);
  const [reviewer, setReviewer] = useState(1);
  const [expected, setExpected] = useState(dayjs("2022-04-17"));

  const handleToggle = (id) => {
    setSelectedDocs((prev) =>
      prev.includes(id) ? prev.filter((docId) => docId !== id) : [...prev, id]
    );
  };

  const handleApprovalChange = (event) => {
    setApprovalRequired(event.target.checked);
  };

  const handleEntitySelect = (id) => {
    setSelectedBindToEntities((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  // --- RENDER ---
  return (
    <Box p={2}>
      <Grid container spacing={2}>
        {/* Left: Bind From */}
        <Grid item xs={3} pr={4}>
          <Typography variant="subtitle1" fontWeight={600} gutterBottom>
            Bind From:
          </Typography>
          <TreeView dataBase={documentFromData.folders} />
        </Grid>

        {/* Center: Document List */}
        <Grid item xs={6}>
          <Typography variant="subtitle1" fontWeight={600} gutterBottom>
            Select Documents
          </Typography>
          <TextField
            fullWidth
            size="small"
            variant="outlined"
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <SearchIcon sx={{ color: "text.disabled", mr: 1 }} />
              ),
            }}
            sx={{ mb: 2 }}
          />
          <Stack spacing={1}>
            {documentList.map((doc) => (
              <Grid
                container
                alignItems="center"
                key={doc.id}
                sx={{
                  px: 1,
                  py: 0.5,
                  borderRadius: 1,
                  "&:hover": { backgroundColor: "#f5f5f5" },
                }}
              >
                <Grid item>
                  <Checkbox
                    size="small"
                    checked={selectedDocs.includes(doc.id)}
                    onChange={() => handleToggle(doc.id)}
                  />
                </Grid>
                <Grid item>
                  <InsertDriveFileIcon
                    sx={{ color: "info.main", fontSize: 20, mr: 1 }}
                  />
                </Grid>
                <Grid item xs>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "info.main",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    {doc.name}
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </Stack>
        </Grid>

        {/* Right: Bind To */}
        <Grid item xs={3}>
          <Typography variant="subtitle1" fontWeight={600} gutterBottom>
            Bind To:
          </Typography>
          <TreeView
            dataBase={documentToData.folders}
            showEntityCheckbox={true}
            selectedEntities={selectedBindToEntities}
            onEntitySelect={handleEntitySelect}
          />
        </Grid>
      </Grid>
      {/* Save and Reset buttons below table */}
      <Box
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
        sx={{ mt: 2 }}
      >
        <Box>
          <PageButton color="primary">Save</PageButton>
        </Box>
        <Box ml={2}>
          <PageButton color="error">Reset</PageButton>
        </Box>
      </Box>

      {/* Approval and Workflow Section */}
      {selectedDocs.length > 0 && (
        <Box sx={{ mt: 4 }}>
          {/* Approval Required checkbox */}
          <Stack direction="row" alignItems="center" spacing={2} py={1}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={approvalRequired}
                  onChange={handleApprovalChange}
                />
              }
              label="Approval Required?"
            />
          </Stack>

          {/* Show workflow options if approval required */}
          {approvalRequired && (
            <Box sx={{ pl: 3, pt: 2, pb: 1 }}>
              <Stack
                direction="row"
                alignItems="center"
                spacing={2}
                sx={{ mb: 2 }}
              >
                <AddWorkflow />
              </Stack>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <Typography variant="body2" gutterBottom>
                    Route For{" "}
                    <Typography component="span" color="error.main">
                      *
                    </Typography>
                  </Typography>
                  <TextField
                    select
                    fullWidth
                    size="small"
                    value={routeFor}
                    onChange={(e) => setRouteFor(Number(e.target.value))}
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
                    onChange={(e) => setReviewer(Number(e.target.value))}
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
            </Box>
          )}

          {/* Cancel/Submit buttons always shown if a doc is selected */}
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            sx={{ mt: 3 }}
          >
            <Box>
              <PageButton color="error">Cancel</PageButton>
            </Box>
            <Box ml={2}>
              <PageButton color="success">Submit</PageButton>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default DocumentList;
