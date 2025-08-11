import React, { useState } from "react";
import {
  Grid,
  TextField,
  Typography,
  Autocomplete,
  ToggleButton,
  ToggleButtonGroup,
  Stack,
  MenuItem,
  Box,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import PerformanceAssessment from "./PerformanceAssessment";
import AssessmentDetails from "./AssessmentDetails";

const resultList = [
  {
    label: "Result 1",
    value: 1,
  },
  {
    label: "Result 2",
    value: 2,
  },
  {
    label: "Result 3",
    value: 3,
  },
  {
    label: "Result 4",
    value: 4,
  },
  {
    label: "Result 5",
    value: 5,
  },
];

const userGroupList = [
  {
    label: "User Group 1",
    value: 1,
  },
  {
    label: "User Group 2",
    value: 2,
  },
  {
    label: "User Group 3",
    value: 3,
  },
  {
    label: "User Group 4",
    value: 4,
  },
  {
    label: "User Group 5",
    value: 5,
  },
];

const userList = [
  {
    value: 1,
    email: "jrelton0@businessinsider.com",
  },
  {
    value: 2,
    email: "bpatullo1@quantcast.com",
  },
  {
    value: 3,
    email: "fcawtheray2@cdbaby.com",
  },
  {
    value: 4,
    email: "mfairweather3@unesco.org",
  },
  {
    value: 5,
    email: "kmatyugin4@alibaba.com",
  },
];

function SectionDetails({ transfer }) {
  const [form1, setForm1] = useState("");
  const [form2, setForm2] = useState("");
  const [form3, setForm3] = useState("");
  const [comment, setComment] = useState("");
  const [result, setResult] = useState(1);
  const [assessorsGroup, setAssessorsGroup] = useState([]);
  const [transferSection, setTransferSection] = useState("yes");
  const [user, setUser] = useState(0);

  const handleTransfer = (event, newType) => {
    setTransferSection(newType);
    if (transferSection === "no") {
      setUser(0);
    }
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="body2" gutterBottom>
            Assessment Form 01
          </Typography>
          <TextField
            id="task_section_assessment_form_01"
            placeholder="Some Text..."
            color="secondary"
            variant="outlined"
            size="small"
            fullWidth
            value={form1}
            onChange={(event) => {
              setForm1(event.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body2" gutterBottom>
            Assessment Form 02
          </Typography>
          <TextField
            id="task_section_assessment_form_02"
            placeholder="Some Text..."
            color="secondary"
            variant="outlined"
            size="small"
            fullWidth
            value={form2}
            onChange={(event) => {
              setForm2(event.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" gutterBottom>
            Assessment Form 03
          </Typography>
          <TextField
            id="task_section_assessment_form_03"
            placeholder="Some Text..."
            color="secondary"
            variant="outlined"
            size="small"
            fullWidth
            value={form3}
            onChange={(event) => {
              setForm3(event.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" gutterBottom>
            Selected Assessors Group
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
            id="task_section_assessors_Group"
            options={userGroupList}
            getOptionLabel={(option) => option.label}
            size="small"
            value={assessorsGroup}
            onChange={(event, newValue) => {
              setAssessorsGroup(newValue);
            }}
            renderInput={(params) => (
              <TextField {...params} placeholder="Select Assessors Group" />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            <b>Assessment Performance Details:</b>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <PerformanceAssessment />
        </Grid>
        {transfer === "no" && (
          <>
            <Grid item xs={12} sm={4}>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography variant="body1">
                  <b>Transfer Assessment:</b>
                </Typography>
                <ToggleButtonGroup
                  exclusive
                  value={transferSection}
                  onChange={handleTransfer}
                  size="small"
                >
                  <ToggleButton
                    color="success"
                    value="yes"
                    sx={{ width: 60, height: 30, lineHeight: 0.75 }}
                  >
                    Yes
                  </ToggleButton>
                  <ToggleButton
                    color="error"
                    value="no"
                    sx={{ width: 60, height: 30, lineHeight: 0.75 }}
                  >
                    No
                  </ToggleButton>
                </ToggleButtonGroup>
              </Stack>
            </Grid>
            {transferSection === "yes" && (
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  id="task_form_transfer_user"
                  color="secondary"
                  variant="outlined"
                  size="small"
                  fullWidth
                  select
                  placeholder="Select User"
                  value={user}
                  onChange={(event) => {
                    setUser(event.target.value);
                  }}
                >
                  <MenuItem key="0" value={0} disabled>
                    Select User
                  </MenuItem>
                  {userList.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.email}
                    </MenuItem>
                  ))}
                </TextField>
                {user !== 0 && (
                  <>
                    <Box sx={{ p: 1 }} />
                    <Button color="secondary" variant="outlined" size="small">
                      Transfer Assessment
                    </Button>
                  </>
                )}
              </Grid>
            )}
          </>
        )}
        <Grid item xs={12}>
          <Typography variant="body1">
            <b>Section Result:</b> Not completed the performance yet
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            <b>Assessment Performance Details:</b>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <AssessmentDetails />
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent="space-between">
            <Grid item>
              {/* Select Result */}
              <Grid container spacing={1} alignItems="center">
                <Grid item>
                  <Typography variant="body1">
                    <b>Section Result:</b>
                  </Typography>
                </Grid>
                <Grid item>
                  <TextField
                    id="task_form_result"
                    color="secondary"
                    variant="outlined"
                    size="small"
                    fullWidth
                    select
                    value={result}
                    onChange={(event) => {
                      setResult(event.target.value);
                    }}
                  >
                    {resultList.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
              {/* Show Selected Result */}
              <Typography component="p" variant="body1">
                Section Result:{" "}
                <Typography
                  component="span"
                  variant="body1"
                  color="success.main"
                >
                  GAMP Category 1
                </Typography>
              </Typography>
            </Grid>
            <Grid item>
              <Typography component="p" variant="body1">
                Completed by:{" "}
                <Typography
                  component="span"
                  variant="body1"
                  color="success.main"
                >
                  someone@companyname.com | 13-DEC-2024 - 21:45
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" gutterBottom>
            Comment
          </Typography>
          <TextField
            id="task_section_comment"
            placeholder="Enter Comment"
            color="secondary"
            variant="outlined"
            size="small"
            fullWidth
            value={comment}
            onChange={(event) => {
              setComment(event.target.value);
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default SectionDetails;
