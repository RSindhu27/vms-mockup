import React, { useState } from "react";
import {
  Button,
  Grid,
  MenuItem,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import AddWorkflow from "./../Popup/AddWorkflow";
import VerifyMapping from "../Popup/VerifyMapping";

const userList = [
  {
    value: 1,
    label: "User 1",
  },
  {
    value: 2,
    label: "User 2",
  },
  {
    value: 3,
    label: "User 3",
  },
  {
    value: 4,
    label: "User 4",
  },
];

const documentTypeList = [
  {
    value: 1,
    label: "Design Qualification",
  },
  {
    value: 2,
    label: "Document Type 2",
  },
  {
    value: 3,
    label: "Document Type 3",
  },
  {
    value: 4,
    label: "Document Type 4",
  },
];

const documentList = [
  {
    value: 1,
    label: "Document 1",
  },
  {
    value: 2,
    label: "Document 2",
  },
  {
    value: 3,
    label: "Document 3",
  },
  {
    value: 4,
    label: "Document 4",
  },
];

const entityList = [
  {
    value: 1,
    label: "Computer System Validation",
  },
  {
    value: 2,
    label: "Entity 2",
  },
  {
    value: 3,
    label: "Entity 3",
  },
  {
    value: 4,
    label: "Entity 4",
  },
];

function Execution() {
  const [executionMod, setExecutionMod] = useState("electronic");
  const [executionType, setExecutionType] = useState("new");
  const [entity, setEntity] = useState(1);
  const [documentType, setDocumentType] = useState(1);
  const [document, setDocument] = useState(1);
  const [documentTitle, setDocumentTitle] = useState("");
  const [targetDate, setTargetDate] = useState(dayjs());
  const [description, setDescription] = useState("");
  const [ccrNo, setCcrNo] = useState("");
  const [assignTo, setAssignTo] = useState("user");
  const [user, setUser] = useState(1);
  const [comment, setComment] = useState("");

  const handleExecutionMod = (event, newType) => {
    setExecutionMod(newType);
  };

  const handleExecutionType = (event, newType) => {
    setExecutionType(newType);
  };

  const handleAssignTo = (event, newType) => {
    setAssignTo(newType);
  };

  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Stack
          spacing={0.5}
          direction="column"
          alignItems="left"
          sx={{ mb: 1.3 }}
        >
          <Typography variant="body2">Execution Mod:</Typography>
          <ToggleButtonGroup
            exclusive
            value={executionMod}
            onChange={handleExecutionMod}
            size="small"
          >
            <ToggleButton
              color="secondary"
              value="electronic"
              sx={{ width: 100, height: 30, lineHeight: 0.75 }}
            >
              Electronic
            </ToggleButton>
            <ToggleButton
              color="error"
              value="manual"
              sx={{ width: 80, height: 30, lineHeight: 0.75 }}
            >
              Manual
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Stack
          spacing={0.5}
          direction="column"
          alignItems="left"
          sx={{ mb: 1.3 }}
        >
          <Typography variant="body2">Execution Type:</Typography>
          <ToggleButtonGroup
            exclusive
            value={executionType}
            onChange={handleExecutionType}
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
              color="secondary"
              value="revision"
              sx={{ width: 90, height: 30, lineHeight: 0.75 }}
            >
              Revision
            </ToggleButton>
            <ToggleButton
              color="secondary"
              value="dry_run"
              sx={{ width: 90, height: 30, lineHeight: 0.75 }}
            >
              Dry Run
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Typography variant="body2" gutterBottom>
          Select Entity
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
          id="assign_entity"
          color="secondary"
          variant="outlined"
          size="small"
          fullWidth
          select
          value={entity}
          onChange={(event) => {
            setEntity(event.target.value);
          }}
        >
          {entityList.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12} sm="auto">
        <Typography variant="body1" gutterBottom>
          Category:{" "}
          <Typography component="span" color="info.main">
            CSV
          </Typography>
        </Typography>
      </Grid>
      <Grid item xs={12} sm="auto">
        <Typography variant="body1" gutterBottom>
          Subcategory:{" "}
          <Typography component="span" color="info.main">
            Building Management System
          </Typography>
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Typography variant="body2" gutterBottom>
          Select Document Type
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
          id="assign_document_type"
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
          {documentTypeList.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Typography variant="body2" gutterBottom>
          Select Document
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
          id="assign_document"
          color="secondary"
          variant="outlined"
          size="small"
          fullWidth
          select
          value={document}
          onChange={(event) => {
            setDocument(event.target.value);
          }}
        >
          {documentList.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Typography variant="body2" gutterBottom>
          Document Title
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
          id="assign_document_title"
          placeholder="Enter Document Title"
          color="secondary"
          variant="outlined"
          size="small"
          fullWidth
          value={documentTitle}
          onChange={(event) => {
            setDocumentTitle(event.target.value);
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
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
          id="assign_target_date"
          value={targetDate}
          onChange={(newValue) => setTargetDate(newValue)}
          slotProps={{
            textField: {
              size: "small",
              fullWidth: true,
            },
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
          id="assign_description"
          placeholder="Enter Description"
          color="secondary"
          variant="outlined"
          size="small"
          fullWidth
          multiline
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Typography variant="body2" gutterBottom>
          CCR No.
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
          id="assign_ccr_no"
          placeholder="Enter CCR No"
          color="secondary"
          variant="outlined"
          size="small"
          fullWidth
          value={ccrNo}
          onChange={(event) => {
            setCcrNo(event.target.value);
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Stack
          spacing={0.5}
          direction="column"
          alignItems="left"
          sx={{ mb: 1.3 }}
        >
          <Typography variant="body2">Assign To:</Typography>
          <ToggleButtonGroup
            exclusive
            value={assignTo}
            onChange={handleAssignTo}
            size="small"
          >
            <ToggleButton
              color="secondary"
              value="user"
              sx={{ width: 90, height: 30, lineHeight: 0.75 }}
            >
              User
            </ToggleButton>
            <ToggleButton
              color="secondary"
              value="group"
              sx={{ width: 90, height: 30, lineHeight: 0.75 }}
            >
              Group
            </ToggleButton>
            <ToggleButton
              color="secondary"
              value="to_me"
              sx={{ width: 90, height: 30, lineHeight: 0.75 }}
            >
              To me
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Typography variant="body2" gutterBottom>
          Select User
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
          id="assign_user"
          color="secondary"
          variant="outlined"
          size="small"
          fullWidth
          select
          value={user}
          onChange={(event) => {
            setUser(event.target.value);
          }}
        >
          {userList.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={12} md={8}>
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
          id="assign_comment"
          placeholder="Enter Comment"
          color="secondary"
          variant="outlined"
          size="small"
          fullWidth
          multiline
          value={comment}
          onChange={(event) => {
            setComment(event.target.value);
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Stack direction="row" spacing={2}>
          <VerifyMapping />
          <AddWorkflow />
        </Stack>
      </Grid>
    </>
  );
}

export default Execution;
