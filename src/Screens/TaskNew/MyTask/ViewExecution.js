import React, { useState } from "react";
import {
  PageButton,
  TabWrapper,
  VisBox,
  VisuallyHiddenInput,
} from "../../../Components/Page";
import {
  Box,
  Grid,
  Stack,
  TextField,
  Typography,
  IconButton,
  Button,
  Divider,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DescriptionIcon from "@mui/icons-material/Description";
import CsvWorkflow from "./Popup/CsvWorkflow";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import { TableDeleteRow } from "../../../Components/Table";
import Summery from "./Summery";
import ViewReport from "./Popup/ViewReport";
import CsvWorkflowDetails from "./Popup/CsvWorkflowDetails";

function ViewExecution() {
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState();

  function handleChange(e) {
    console.log();
    setFile(URL.createObjectURL(e.target.files[0]));
    setFileName(e.target.files[0].name);
  }

  const handleDelete = () => {
    setFile(null);
    setFileName(null);
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
              My Task/ TSK0001-Execution/Document/-CSV/DOC0001
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
            <Stack direction="row" spacing={2}>
              <Button color="info" variant="contained" disableElevation>
                Transfer Task
              </Button>
              <Button
                color="secondary"
                variant="contained"
                disableElevation
                component={Link}
                to="/app/task-new/my-task/edit-execution"
              >
                Start Execution
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Button color="secondary" variant="contained" disableElevation>
                  Download Document
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography variant="body2">Life Cycle: </Typography>
                    <Typography variant="body1">
                      <b>Details</b>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" textAlign="right">
                      Execution Started On:
                    </Typography>
                    <Typography variant="body1" textAlign="right">
                      <b> 12-Jan-2025 | 15:25IST</b>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Grid
                  container
                  spacing={1}
                  justifyContent="left"
                  alignItems="flex-end"
                >
                  <Grid item>
                    <Typography variant="body2" gutterBottom>
                      Upload Document
                    </Typography>
                    <Button
                      color="info"
                      variant="outlined"
                      startIcon={<InsertLinkIcon />}
                      component="label"
                    >
                      Browse
                      <VisuallyHiddenInput
                        type="file"
                        onChange={handleChange}
                      />
                    </Button>
                  </Grid>
                  <Grid item>
                    {file && (
                      <>
                        <Typography variant="body2" gutterBottom>
                          Uploaded Document:
                        </Typography>
                        <VisBox>
                          <Stack
                            direction="row"
                            spacing={2}
                            alignItems="center"
                          >
                            <DescriptionIcon fontSize="large" color="info" />
                            <Typography variant="body1" color="text.secondary">
                              {fileName}
                            </Typography>{" "}
                            <TableDeleteRow onDelete={() => handleDelete()} />
                          </Stack>
                        </VisBox>
                      </>
                    )}
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography variant="body2">Status: </Typography>
                    <Typography variant="body1" color="success.main">
                      <b>Execution in progress</b>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" textAlign="right">
                      Execution Started On:
                    </Typography>
                    <Typography variant="body1" textAlign="right">
                      <b> 12-Jan-2025 | 15:25IST</b>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs>
                <Button color="info" variant="contained" disableElevation>
                  View/Edit Execution
                </Button>
              </Grid>
              <Grid item xs>
                <Typography variant="body2">Status: </Typography>
                <Typography variant="body1" color="success.main">
                  <b>Ready For Review/Approval</b>
                </Typography>
              </Grid>
              <Grid item xs>
                <Typography variant="body2">Summary: </Typography>
                <ViewReport />
              </Grid>
              <Grid item xs>
                <Typography variant="body2">Workflow Status: </Typography>
                <CsvWorkflowDetails />
              </Grid>
              <Grid item xs>
                <Typography variant="body2" align="right">
                  Execution Started On:
                </Typography>
                <Typography variant="body1" align="right">
                  <b>12-Jan-2025 | 15:25IST</b>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <Summery />
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

export default ViewExecution;
