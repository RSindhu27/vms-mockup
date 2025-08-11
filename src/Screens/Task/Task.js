import React, { useState } from "react";
import { PageButton, TabWrapper } from "../../Components/Page";
import {
  Box,
  Grid,
  Stack,
  Typography,
  IconButton,
  Chip,
  ToggleButtonGroup,
  ToggleButton,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EntityTable from "./Form/EntityTable";
import Sections from "./Form/Sections";
import Framework from "./Form/Framework";
import AssessmentSummaryResults from "./Form/AssessmentSummaryResults";

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

function Task() {
  const navigate = useNavigate();
  const [transfer, setTransfer] = useState("yes");
  const [user, setUser] = useState(0);

  const handleTransfer = (event, newType) => {
    setTransfer(newType);
    if (transfer === "no") {
      setUser(0);
    }
  };

  return (
    <>
      <Box mb={2}>
        {/* Breadcrumbs */}
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <IconButton onClick={() => navigate(-1)} color="secondary">
              <ArrowBackIcon />
            </IconButton>
          </Grid>
          <Grid item xs={10}>
            <Stack
              direction="row"
              alignItems="center"
              divider={
                <Typography variant="h5" component="p">
                  /
                </Typography>
              }
            >
              <Typography variant="h5" component="p" noWrap>
                TSK0001
              </Typography>
              <Typography variant="h5" component="p" noWrap>
                <b>Perform Assessment</b>
              </Typography>
              <Typography variant="h5" component="p" noWrap>
                <b>CSV Assessment-SG-SA-0040.01</b>
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      {/* Content */}
      <TabWrapper>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="body1">
                <b>Assessment Type: </b>
              </Typography>
              <Chip label="New" size="small" color="success" />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="body1">
                <b>Transfer Assessment:</b>
              </Typography>
              <ToggleButtonGroup
                exclusive
                value={transfer}
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
          {transfer === "yes" && (
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
          <Grid item xs={12}>
            <EntityTable />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Assessment Sections:</Typography>
          </Grid>
          <Grid item xs={12}>
            <Sections transfer={transfer} />
          </Grid>
          <Grid item xs={12}>
            <AssessmentSummaryResults />
          </Grid>
          <Grid item xs={12}>
            <Framework />
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
          <PageButton color="secondary">Submit</PageButton>
        </Box>
      </Stack>
    </>
  );
}

export default Task;
