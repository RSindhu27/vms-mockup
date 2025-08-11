import React, { useState } from "react";
import {
  PageButton,
  TabWrapper,
  VisBox,
  VisuallyHiddenInput,
} from "../../../Components/Page";
import {
  Box,
  Button,
  Checkbox,
  Grid,
  MenuItem,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  IconButton,
  Typography,
} from "@mui/material";
import Data from "./Data.json";
import FormatShapesIcon from "@mui/icons-material/FormatShapes";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import AttachmentIcon from "@mui/icons-material/Attachment";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import DescriptionIcon from "@mui/icons-material/Description";
import { DatePicker } from "@mui/x-date-pickers";
import { TableDeleteRow } from "../../../Components/Table";
import AddWorkflow from "./Form/AddWorkflow";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function EditTemplate() {
  const navigate = useNavigate();
  const [templateFor, setTemplateFor] = useState(1);
  const [taskType, setTaskType] = useState("new");
  const [templateName, setTemplateName] = useState("");
  const [templateType, setTemplateType] = useState(1);
  const [templateGroup, setTemplateGroup] = useState(1);
  const [templatePrefix, setTemplatePrefix] = useState("");
  const [templateComments, setTemplateComments] = useState("");
  const [templateDescription, setTemplateDescription] = useState("");
  const [templateControlNumber, setTemplateControlNumber] = useState("");
  const [templateNumberingSystem, setTemplateNumberingSystem] = useState(1);

  const handleTaskType = (event, newType) => {
    setTaskType(newType);
  };

  const [createTemplate, setCreateTemplate] = useState(false);
  const [browseTemplate, setBrowseTemplate] = useState(false);
  const [existingTemplate, setExistingTemplate] = useState(false);
  const [exTemplate, setExTemplate] = useState(1);
  const [effectiveProcess, setEffectiveProcess] = useState(1);
  const [targetEffectiveDate, setTargetEffectiveDate] = useState(dayjs());

  const handleCreateTemplate = (event) => {
    setCreateTemplate(event.target.checked);
  };

  const handleBrowseTemplate = (event) => {
    setBrowseTemplate(event.target.checked);
  };

  const handleExistingTemplate = (event) => {
    setExistingTemplate(event.target.checked);
  };

  const [file, setFile] = useState();
  const [fileName, setFileName] = useState();
  const [templateProtected, setTemplateProtected] = useState();

  function handleChange(e) {
    console.log();
    setFile(URL.createObjectURL(e.target.files[0]));
    setFileName(e.target.files[0].name);
  }

  const handleDelete = () => {
    setFile(null);
    setFileName(null);
  };

  const handleTemplateProtected = (event) => {
    setTemplateProtected(event.target.checked);
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
          <Grid item>
            <Typography variant="h5" component="p">
              Edit Template
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <TabWrapper>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography align="right" variant="body1">
              ID:{" "}
              <Typography variant="body1" color="info.main" component="span">
                <b>TEMP</b>
              </Typography>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="body2" gutterBottom>
              Template For
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
              id="template_for"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              select
              value={templateFor}
              onChange={(event) => {
                setTemplateFor(event.target.value);
              }}
            >
              {Data.template_for_list.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={8}>
            <Box sx={{ mt: 2 }}>
              <Grid container spacing={2}>
                <Grid item>
                  <Typography variant="body1">
                    <b>
                      Task Type:
                      <Typography
                        component="span"
                        variant="body2"
                        color="error.main"
                        gutterBottom
                      >
                        *
                      </Typography>
                    </b>
                  </Typography>
                </Grid>
                <Grid item xs>
                  <ToggleButtonGroup
                    exclusive
                    value={taskType}
                    onChange={handleTaskType}
                    size="small"
                  >
                    <ToggleButton
                      color="success"
                      value="new"
                      sx={{ width: 60, height: 30, lineHeight: 0.75 }}
                    >
                      New
                    </ToggleButton>
                    <ToggleButton
                      color="error"
                      value="revision"
                      sx={{ width: 80, height: 30, lineHeight: 0.75 }}
                    >
                      Revision
                    </ToggleButton>
                  </ToggleButtonGroup>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="body2" gutterBottom>
              Template Name
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
              id="template_name"
              placeholder="Enter Name"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              value={templateName}
              onChange={(event) => {
                setTemplateName(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="body2" gutterBottom>
              Select Template Type
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
              id="template_type"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              select
              value={templateType}
              onChange={(event) => {
                setTemplateType(event.target.value);
              }}
            >
              {Data.template_type_list.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="body2" gutterBottom>
              Select Template Group
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
              id="template_group"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              select
              value={templateGroup}
              onChange={(event) => {
                setTemplateGroup(event.target.value);
              }}
            >
              {Data.template_group_list.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="body2" gutterBottom>
              Prefix
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
              id="template_prefix"
              placeholder="Enter Prefix"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              value={templatePrefix}
              onChange={(event) => {
                setTemplatePrefix(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            <Typography variant="body2" gutterBottom>
              Description
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
              id="template_description"
              placeholder="Enter Description"
              color="secondary"
              variant="outlined"
              size="small"
              multiline
              fullWidth
              value={templateDescription}
              onChange={(event) => {
                setTemplateDescription(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="body2" gutterBottom>
              Change Control Number
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
              id="template_control_number"
              placeholder="Change Control Number"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              value={templateControlNumber}
              onChange={(event) => {
                setTemplateControlNumber(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="body2" gutterBottom>
              Select Numbering System
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
              id="template_numbering_system"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              select
              value={templateNumberingSystem}
              onChange={(event) => {
                setTemplateNumberingSystem(event.target.value);
              }}
            >
              {Data.template_ns_list.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
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
              id="template_comments"
              placeholder="Comments"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              value={templateComments}
              onChange={(event) => {
                setTemplateComments(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              {/* Create Template */}
              <Grid item>
                <Box sx={{ width: 260 }}>
                  <Grid container spacing={1} alignItems="center">
                    <Grid item xs={12}>
                      <Typography variant="body2">Create Template</Typography>
                    </Grid>
                    <Grid item>
                      <Checkbox
                        checked={createTemplate}
                        onChange={handleCreateTemplate}
                        color="secondary"
                      />
                    </Grid>
                    <Grid item xs>
                      <Button
                        variant="outlined"
                        startIcon={<FormatShapesIcon />}
                        color="secondary"
                        fullWidth
                        component={Link}
                        to="/app/template/template-two/view-template"
                        disabled={!createTemplate}
                      >
                        Create
                      </Button>
                    </Grid>
                    <Grid item>
                      <Typography variant="body2">
                        <b>Or</b>
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              {/* External Template */}
              <Grid item>
                <Box sx={{ width: 260 }}>
                  <Grid container spacing={1} alignItems="center">
                    <Grid item xs={12}>
                      <Typography variant="body2">
                        Select External Template
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Checkbox
                        checked={browseTemplate}
                        onChange={handleBrowseTemplate}
                        color="secondary"
                      />
                    </Grid>
                    <Grid item xs>
                      <Button
                        variant="outlined"
                        startIcon={<AttachmentIcon />}
                        color="secondary"
                        fullWidth
                        disabled={!browseTemplate}
                      >
                        Browse
                      </Button>
                    </Grid>
                    <Grid item>
                      <Typography variant="body2">
                        <b>Or</b>
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              {/* Existing Template */}
              <Grid item>
                <Box sx={{ width: 260 }}>
                  <Grid container spacing={1} alignItems="center">
                    <Grid item xs={12}>
                      <Typography variant="body2">
                        Select Existing Template
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Checkbox
                        checked={existingTemplate}
                        onChange={handleExistingTemplate}
                        color="secondary"
                      />
                    </Grid>
                    <Grid item xs>
                      <TextField
                        id="template_select_exist"
                        color="secondary"
                        variant="outlined"
                        size="small"
                        fullWidth
                        select
                        disabled={!existingTemplate}
                        value={exTemplate}
                        onChange={(event) => {
                          setExTemplate(event.target.value);
                        }}
                      >
                        {Data.template_list.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          {/* Created Template */}
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12} lg="auto">
                <Typography variant="body2" gutterBottom>
                  Create Template
                </Typography>
                <Grid container spacing={1} alignItems="center">
                  <Grid item>
                    <Checkbox
                      checked={createTemplate}
                      onChange={handleCreateTemplate}
                      color="secondary"
                    />
                  </Grid>
                  <Grid item>
                    <Button
                      variant="outlined"
                      startIcon={<DriveFileRenameOutlineOutlinedIcon />}
                      color="info"
                      component={Link}
                      to="/app/template/template-two/view-template"
                    >
                      Edit
                    </Button>
                  </Grid>
                  <Grid item>
                    <AddWorkflow />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={2}>
                <Typography variant="body2" gutterBottom>
                  Effective Process
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
                  id="template_create_effective_process"
                  color="secondary"
                  variant="outlined"
                  size="small"
                  fullWidth
                  select
                  value={effectiveProcess}
                  onChange={(event) => {
                    setEffectiveProcess(event.target.value);
                  }}
                >
                  {Data.effective_process_list.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={2}>
                <Typography variant="body2" gutterBottom>
                  Target Effective Date
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
                  value={targetEffectiveDate}
                  onChange={(newValue) => setTargetEffectiveDate(newValue)}
                  slotProps={{
                    textField: {
                      size: "small",
                      fullWidth: true,
                    },
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          {/* Select External Template */}
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12} lg="auto">
                <Typography variant="body2" gutterBottom>
                  Select External Template
                </Typography>
                <Grid container spacing={1} alignItems="center">
                  <Grid item>
                    <Checkbox
                      checked={browseTemplate}
                      onChange={handleBrowseTemplate}
                      color="secondary"
                    />
                  </Grid>
                  <Grid item>
                    <Button
                      variant="outlined"
                      startIcon={<AttachmentIcon />}
                      color="secondary"
                      fullWidth
                      disabled={!browseTemplate}
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
                        <VisBox>
                          <DescriptionIcon
                            color="info"
                            fontSize="small"
                            sx={{ mr: 1 }}
                          />
                          <Typography variant="body1" color="text.secondary">
                            {fileName}
                          </Typography>{" "}
                          <TableDeleteRow onDelete={() => handleDelete()} />
                        </VisBox>
                      </>
                    )}
                  </Grid>
                  <Grid item>
                    <AddWorkflow />
                  </Grid>
                  <Grid item>
                    {file && (
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Checkbox
                          checked={templateProtected}
                          onChange={handleTemplateProtected}
                          color="secondary"
                        />
                        <Typography>Is Template Protected?</Typography>
                      </Stack>
                    )}
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={2}>
                <Typography variant="body2" gutterBottom>
                  Effective Process
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
                  id="template_create_effective_process"
                  color="secondary"
                  variant="outlined"
                  size="small"
                  fullWidth
                  select
                  value={effectiveProcess}
                  onChange={(event) => {
                    setEffectiveProcess(event.target.value);
                  }}
                >
                  {Data.effective_process_list.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={2}>
                <Typography variant="body2" gutterBottom>
                  Target Effective Date
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
                  value={targetEffectiveDate}
                  onChange={(newValue) => setTargetEffectiveDate(newValue)}
                  slotProps={{
                    textField: {
                      size: "small",
                      fullWidth: true,
                    },
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          {/* Select Existing Template */}
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12} lg="auto">
                <Typography variant="body2" gutterBottom>
                  Select External Template
                </Typography>
                <Grid container spacing={1} alignItems="center">
                  <Grid item>
                    <Checkbox
                      checked={existingTemplate}
                      onChange={handleExistingTemplate}
                      color="secondary"
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      id="template_select_exist"
                      color="secondary"
                      variant="outlined"
                      size="small"
                      fullWidth
                      select
                      disabled={!existingTemplate}
                      value={exTemplate}
                      onChange={(event) => {
                        setExTemplate(event.target.value);
                      }}
                    >
                      {Data.template_list.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item>
                    <VisBox>
                      <DescriptionIcon
                        color="info"
                        sx={{ mr: 1 }}
                        fontSize="small"
                      />
                      <Typography variant="body1" color="text.secondary">
                        {
                          Data.template_list.find((e) => e.value === exTemplate)
                            .label
                        }
                      </Typography>{" "}
                    </VisBox>
                  </Grid>
                  <Grid item>
                    <AddWorkflow />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={2}>
                <Typography variant="body2" gutterBottom>
                  Effective Process
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
                  id="template_create_effective_process"
                  color="secondary"
                  variant="outlined"
                  size="small"
                  fullWidth
                  select
                  value={effectiveProcess}
                  onChange={(event) => {
                    setEffectiveProcess(event.target.value);
                  }}
                >
                  {Data.effective_process_list.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={2}>
                <Typography variant="body2" gutterBottom>
                  Target Effective Date
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
                  value={targetEffectiveDate}
                  onChange={(newValue) => setTargetEffectiveDate(newValue)}
                  slotProps={{
                    textField: {
                      size: "small",
                      fullWidth: true,
                    },
                  }}
                />
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
          <PageButton color="inherit">Reset</PageButton>
        </Box>
        <Box>
          <PageButton color="info">Save</PageButton>
        </Box>
        <Box>
          <PageButton color="success">Submit</PageButton>
        </Box>
      </Stack>
    </>
  );
}

export default EditTemplate;
