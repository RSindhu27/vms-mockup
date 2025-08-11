import React, { useState } from "react";
import {
  FormControlLabel,
  Switch,
  Typography,
  Grid,
  Stack,
  Box,
  Checkbox,
  MenuItem,
  TextField,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { Table } from "../../../../Components/Table";
import Data from "./././DataDecision.json";
import { PageButton } from "../../../../Components/Page";
import AddWorkflow from "../../../Template/TemplateX/AddWorkflow";

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

const DecisionTreeList = () => {
  const [decisionData] = useState(Data.picklist);
  const [selectedRows, setSelectedRows] = useState([]);
  const [approvalRequired, setApprovalRequired] = useState(false);
  const [routeFor, setRouteFor] = useState(2);
  const [reviewer, setReviewer] = useState(1);
  const [expected, setExpected] = useState(dayjs("2022-04-17"));
  const [comments, setComments] = useState("");

  const handleSelectionChange = (selection) => {
    setSelectedRows(selection);
    if (selection.length === 0) {
      setApprovalRequired(false);
      setComments("");
    }
  };

  const columns = [
    { field: "id", headerName: "ID", width: 120 },
    {
      field: "decision_name",
      headerName: "Decision Tree Name",
      renderCell: (params) => (
        <Typography
          variant="body2"
          sx={{ fontWeight: 500, color: "text.primary" }}
        >
          {params.row.decision_name}
        </Typography>
      ),
      minWidth: 200,
      flex: 1,
    },
    {
      field: "allow_overwrite",
      headerName: "Allow Overwrite?",
      renderCell: (params) => {
        const { id, allow_overwrite } = params.row;
        if (id === 2) {
          return <Typography variant="body2">N/A</Typography>;
        }
        return (
          <FormControlLabel
            control={<Switch checked={allow_overwrite} />}
            label={allow_overwrite ? "Yes" : "No"}
          />
        );
      },
      minWidth: 150,
      flex: 1,
    },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <Grid container spacing={0}>
        <Grid item xs={12} px={{ xs: 2, sm: 4, md: 6 }}>
          <Table
            data={decisionData}
            columns={columns}
            columnVisibilityModel={{
              id: false,
            }}
            checkboxSelection
            onRowSelectionModelChange={handleSelectionChange}
            sx={{ width: "100%" }}
          />

          {/* Save and Reset buttons below table */}
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            sx={{ mt: 2, width: "100%" }}
          >
            <Box>
              <PageButton color="primary">Save</PageButton>
            </Box>
            <Box ml={2}>
              <PageButton color="error">Reset</PageButton>
            </Box>
          </Box>

          {/* Approval and Workflow Section */}
          {selectedRows.length > 0 && (
            <Box sx={{ mt: 4, width: "100%" }}>
              {/* Approval Required and AddWorkflow in same row */}
              <Stack
                direction="row"
                alignItems="center"
                spacing={2}
                sx={{ mb: 2 }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={approvalRequired}
                      onChange={(e) => setApprovalRequired(e.target.checked)}
                    />
                  }
                  label="Approval Required?"
                />
                {approvalRequired && <AddWorkflow />}
              </Stack>

              {/* Only show the workflow section if approval is required */}
              {approvalRequired && (
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
                  <Grid item xs={12}>
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
                  </Grid>
                </Grid>
              )}

              {/* Cancel/Submit buttons */}
              <Box
                display="flex"
                justifyContent="flex-end"
                alignItems="center"
                sx={{ mt: 3, width: "100%" }}
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default DecisionTreeList;
