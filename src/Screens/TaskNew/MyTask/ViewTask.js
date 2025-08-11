import React, { useState } from "react";
import { PageButton, TabWrapper } from "../../../Components/Page";
import {
  Box,
  Grid,
  Stack,
  TextField,
  Typography,
  IconButton,
  Button,
  ToggleButtonGroup,
  ToggleButton,
  MenuItem,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DescriptionIcon from "@mui/icons-material/Description";
import CsvWorkflow from "./Popup/CsvWorkflow";
import VerifyMapping from "./Popup/VerifyMapping";
import {
  CustomTab,
  CustomTabs,
  CustomTabPanel,
} from "../../../Components/Tabs";
import AttachmentTable from "./Table/AttachmentTable";
import AddAttachment from "./Popup/AddAttachment";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import UploadIcon from "@mui/icons-material/Upload";
import DownloadIcon from "@mui/icons-material/Download";
import CsvWorkflowStatus from "./Popup/CsvWorkflowStatus";
import TaskHistory from "./Popup/TaskHistory";

const routeForList = [
  {
    value: 1,
    label: "Peer Review",
  },
  {
    value: 2,
    label: "Review",
  },
];

const reviewerList = [
  {
    value: 1,
    label: "adupre1@amazon.de",
  },
  {
    value: 2,
    label: "ljerzycowski2@multiply.com",
  },
  {
    value: 3,
    label: "dliggons3@cbslocal.com",
  },
  {
    value: 4,
    label: "sledram4@ucla.edu",
  },
];

function EditMappingKeyword() {
  const [description, setDescription] = useState("");
  const [process, setProcess] = useState("yes");
  const navigate = useNavigate();
  const [routeFor, setRouteFor] = useState(1);
  const [reviewer, setReviewer] = useState(1);
  const [value, setValue] = useState(0);
  const [expected, setExpected] = useState(dayjs("2022-04-17"));
  const [routingReview, setRoutingReview] = useState(false);
  const [peerReview, setPeerReview] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleProcess = (event, newType) => {
    setProcess(newType);
  };

  const handleReview = (event) => {
    setRoutingReview(event.target.checked);
  };
  const handleApproval = (event) => {
    setPeerReview(event.target.checked);
  };

  return (
    <>
      <Box mb={2}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <IconButton onClick={() => navigate(-1)} color="secondary">
              <ArrowBackIcon />
            </IconButton>
          </Grid>
          <Grid item xs>
            <Typography variant="h5" component="p">
              My Task/ <b>TSK0001-Authoring Document-CSV</b>/<b>DOC0001</b>
            </Typography>
          </Grid>
          <Grid item>
            <Stack direction="row" alignItems="center">
              <Typography>Target Date:</Typography>
              <Box
                sx={{
                  p: 1,
                  ml: 1,
                  bgcolor: "error.main",
                  borderRadius: 1,
                  color: "white",
                }}
              >
                <Typography>25/Mar/2025</Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <TabWrapper>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <Typography variant="body1" gutterBottom>
              <b>DOCUMENT DETAILS</b>
            </Typography>
            <Box sx={{ p: 2, borderRadius: 2, bgcolor: "info.extraLight" }}>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <Typography variant="body2">ENTITY: </Typography>
                  <Typography variant="body1">
                    <b>Computer System Validation</b>
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" textAlign="right">
                    TASK TYPE:
                  </Typography>
                  <Typography variant="body1" textAlign="right">
                    <b>Authoring Document</b>
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2">CATEGORY: </Typography>
                  <Typography variant="body1" sx={{ color: "info.main" }}>
                    <b>CSV</b>
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" textAlign="right">
                    SUB CATEGORY:
                  </Typography>
                  <Typography variant="body1" textAlign="right">
                    <b>Building Management System</b>
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2">CONTENT FUNCTION: </Typography>
                  <Typography variant="body1">
                    <b>Executable</b>
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" textAlign="right">
                    TEMPLATE GROUP:
                  </Typography>
                  <Typography variant="body1" textAlign="right">
                    <b>CSV Template</b>
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2">TEMPLATE: </Typography>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <DescriptionIcon fontSize="large" color="info" />
                    <Typography
                      variant="body1"
                      component={Link}
                      to="#"
                      sx={{ color: "info.main" }}
                    >
                      <b>CSVTemplate0176.doc</b>
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" textAlign="right">
                    WORKFLOW DETAILS:
                  </Typography>
                  <Stack direction="row" justifyContent="flex-end">
                    <CsvWorkflow />
                  </Stack>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Typography variant="body2">DOCUMENT TITLE: </Typography>
                <Typography variant="body1">
                  <b>CSV Document Xyx</b>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" textAlign="right">
                  CCR NO:
                </Typography>
                <Typography variant="body1" textAlign="right">
                  <b>267990123</b>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" gutterBottom>
                  Description
                </Typography>
                <TextField
                  id="my_task_description"
                  placeholder="Description"
                  multiline
                  minRows={5}
                  color="secondary"
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={description}
                  onChange={(event) => {
                    setDescription(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2">ASSIGNEE: </Typography>
                <Typography variant="body1">
                  <b>Johndeo@Arcolab.Com</b>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" textAlign="right">
                  ASSIGNED ON:
                </Typography>
                <Typography variant="body1" textAlign="right">
                  <b>09-Jan-2025 | 15:25</b>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" spacing={2}>
              <Button color="error" variant="outlined">
                Reject
              </Button>
              <Button color="secondary" variant="contained" disableElevation>
                Accept
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <Typography variant="body2" color="success.main">
                  Start Author Document{" "}
                </Typography>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <DescriptionIcon fontSize="large" color="info" />
                  <Box sx={{ p: 1, bgcolor: "grey.200", borderRadius: 2 }}>
                    <Typography
                      variant="body1"
                      component={Link}
                      to="#"
                      sx={{ color: "info.main" }}
                    >
                      <b>CSVTemplate0176.doc</b>
                    </Typography>
                  </Box>
                  <IconButton>
                    <UploadIcon color="info" />
                  </IconButton>
                  <IconButton>
                    <DownloadIcon color="info" />
                  </IconButton>
                </Stack>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Stack
                  spacing={0.5}
                  direction="column"
                  alignItems="left"
                  sx={{ mb: 1.3 }}
                >
                  <Typography variant="body2">
                    Check-in/Checkout Process?
                  </Typography>
                  <ToggleButtonGroup
                    exclusive
                    value={process}
                    onChange={handleProcess}
                    size="small"
                  >
                    <ToggleButton
                      color="secondary"
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
              <Grid item xs={12} sm={12} md={4}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Stack
                      direction="row"
                      spacing={2}
                      justifyContent={{
                        xs: "flex-start",
                        sm: "flex-start",
                        md: "flex-end",
                      }}
                    >
                      <VerifyMapping />
                      <Button
                        color="success"
                        variant="contained"
                        disableElevation
                      >
                        Transfer Task
                      </Button>
                    </Stack>
                  </Grid>
                  <Grid item xs={12}>
                    <Stack
                      direction="row"
                      spacing={2}
                      justifyContent={{
                        xs: "flex-start",
                        sm: "flex-start",
                        md: "flex-end",
                      }}
                    >
                      <TaskHistory />
                    </Stack>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <CustomTabs value={value} onChange={handleChange}>
                <CustomTab label="Attachments" />
              </CustomTabs>

              <AddAttachment />
            </Stack>
            <CustomTabPanel value={value} index={0}>
              <TabWrapper>
                <AttachmentTable />
              </TabWrapper>
            </CustomTabPanel>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <FormControl>
              <RadioGroup row>
                <FormControlLabel
                  control={
                    <Checkbox checked={routingReview} onChange={handleReview} />
                  }
                  label="Routing For Review/Approve"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={peerReview} onChange={handleApproval} />
                  }
                  label="Peer Review"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sx={6} md={4}>
            <Typography variant="body2" gutterBottom>
              Route for
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
              id="my_task_route_for"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              select
              value={routeFor}
              onChange={(event) => {
                setRouteFor(event.target.value);
              }}
            >
              {routeForList.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sx={6} md={4}>
            <Typography variant="body2" gutterBottom>
              Select Reviewer
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
              id="my_task_reviewer"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              select
              value={reviewer}
              onChange={(event) => {
                setReviewer(event.target.value);
              }}
            >
              {reviewerList.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sx={6} md={4}>
            <Typography variant="body2" gutterBottom>
              Target Date
              <Typography
                component="span"
                variant="body2"
                color="error.main"
                gutterBottom
              >
                *
              </Typography>
            </Typography>
            <DatePicker
              value={expected}
              onChange={(newValue) => setExpected(newValue)}
              slotProps={{
                textField: {
                  size: "small",
                  fullWidth: true,
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Typography variant="body1" gutterBottom>
              <b>Status: </b>
            </Typography>
            <Typography variant="body1" color="success.main" gutterBottom>
              Under Peer Review
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Typography variant="body1" gutterBottom>
              <b>Workflow Status: </b>
            </Typography>
            <Typography variant="body1" color="success.main" gutterBottom>
              Under Review/Approval Process
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Typography variant="body1" gutterBottom>
              <b>Workflow Status: </b>
            </Typography>
            <Typography variant="body1" color="success.main" gutterBottom>
              Review Completed/
              <Typography color="error.main" component="span">
                Approval Pending
              </Typography>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Typography variant="body1" gutterBottom>
              <b>Workflow Status: </b>
            </Typography>
            <Typography variant="body1" color="error.main" gutterBottom>
              Review Rejected/
              <Typography color="error.main" component="span">
                Approval Pending
              </Typography>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Typography variant="body1" gutterBottom>
              <b>Status: </b>
            </Typography>
            <Typography variant="body1" color="success.main" gutterBottom>
              Reviewed/Approved
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <CsvWorkflowStatus />
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
          <PageButton color="secondary">Update</PageButton>
        </Box>
      </Stack>
    </>
  );
}

export default EditMappingKeyword;
