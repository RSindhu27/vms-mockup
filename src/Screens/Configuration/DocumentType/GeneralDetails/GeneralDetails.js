import {
  Button,
  ButtonGroup,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const numberingSystemList = [
  {
    label: "Numbering System 1",
    value: 1,
  },
  {
    label: "Numbering System 2",
    value: 2,
  },
  {
    label: "Numbering System 3",
    value: 3,
  },
  {
    label: "Numbering System 4",
    value: 4,
  },
  {
    label: "Numbering System 5",
    value: 5,
  },
];

function GeneralDetails() {
  const [docTypeName, setDocTypeName] = useState("");
  const [description, setDescription] = useState("");
  const [numberingSystem, setNumberingSystem] = useState(1);
  const [retentionSchedule, setRetentionSchedule] = useState("");
  const [content, setContent] = useState("template");
  const [status, setStatus] = useState("active");
  const [draft, setDraft] = useState("yes");

  const handleContent = (value) => {
    if (value === "template") return "Template";
    else if (value === "defaultFormat") return "Default Format";
    else return "External Document";
  };

  const handleStatus = (value) => {
    if (value === "active") return "Active";
    else return "Inactive";
  };

  const handleDraft = (value) => {
    if (value === "yes") return "Yes";
    else return "No";
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="body2" gutterBottom>
            Enter Document Type Name
          </Typography>
          <TextField
            id="doc-type-name"
            placeholder="Name"
            color="secondary"
            variant="outlined"
            size="small"
            fullWidth
            value={docTypeName}
            onChange={(event) => {
              setDocTypeName(event.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography variant="body2" gutterBottom>
            Description
          </Typography>
          <TextField
            id="doc-type-description"
            color="secondary"
            value={description}
            fullWidth
            multiline
            rows={4}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Typography variant="body2" gutterBottom>
            Numbering System
          </Typography>
          <TextField
            id="doc-type-numbering-system"
            select
            fullWidth
            size="small"
            value={numberingSystem}
            onChange={(event) => {
              setNumberingSystem(event.target.value);
            }}
          >
            {numberingSystemList.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Typography variant="body2" gutterBottom>
            Default Retention Schedule (in days)
          </Typography>
          <TextField
            id="doc-type-retention-schedule"
            placeholder="Enter Days"
            color="secondary"
            variant="outlined"
            size="small"
            fullWidth
            value={retentionSchedule}
            onChange={(event) => {
              setRetentionSchedule(event.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Typography variant="body1" gutterBottom>
            Selected Content: <b>{handleContent(content)}</b>
          </Typography>
          <ButtonGroup
            disableElevation
            variant="contained"
            size="small"
            color="info"
          >
            <Button
              sx={{
                bgcolor: content === "defaultFormat" ? "info.main" : "grey.200",
                color:
                  content === "defaultFormat"
                    ? "info.contrastText"
                    : "text.secondary",
                "&:hover": {
                  color: "info.contrastText",
                },
              }}
              onClick={() => setContent("defaultFormat")}
            >
              Default Format
            </Button>
            <Button
              sx={{
                bgcolor: content === "template" ? "info.main" : "grey.200",
                color:
                  content === "template"
                    ? "info.contrastText"
                    : "text.secondary",
                "&:hover": {
                  color: "info.contrastText",
                },
              }}
              onClick={() => setContent("template")}
            >
              Template
            </Button>
            <Button
              sx={{
                bgcolor: content === "document" ? "info.main" : "grey.200",
                color:
                  content === "document"
                    ? "info.contrastText"
                    : "text.secondary",
                "&:hover": {
                  color: "info.contrastText",
                },
              }}
              onClick={() => setContent("document")}
            >
              External Document
            </Button>
          </ButtonGroup>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={2}>
          <Typography variant="body1" gutterBottom>
            Auto Location Path
          </Typography>
          <Button
            component={Link}
            to={"/app/configuration/document-type/auto-location-path"}
            variant="contained"
            color="primary"
            disableElevation
          >
            Choose Folder
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={2}>
          <Typography variant="body1" gutterBottom>
            Select Status: <b>{handleStatus(status)}</b>
          </Typography>
          <ButtonGroup
            disableElevation
            variant="contained"
            color="secondary"
            size="small"
          >
            <Button
              sx={{
                bgcolor: status === "active" ? "secondary.main" : "grey.200",
                color:
                  status === "active"
                    ? "secondary.contrastText"
                    : "text.secondary",
                "&:hover": {
                  color: "secondary.contrastText",
                },
              }}
              onClick={() => setStatus("active")}
            >
              Active
            </Button>
            <Button
              sx={{
                bgcolor: status === "inactive" ? "secondary.main" : "grey.200",
                color:
                  status === "inactive"
                    ? "secondary.contrastText"
                    : "text.secondary",
                "&:hover": {
                  color: "secondary.contrastText",
                },
              }}
              onClick={() => setStatus("inactive")}
            >
              Inactive
            </Button>
          </ButtonGroup>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={2}>
          <Typography variant="body1" gutterBottom>
            Delete Draft: <b>{handleDraft(draft)}</b>
          </Typography>
          <ButtonGroup
            disableElevation
            variant="contained"
            color="secondary"
            size="small"
          >
            <Button
              sx={{
                bgcolor: draft === "yes" ? "secondary.main" : "grey.200",
                color:
                  draft === "yes" ? "secondary.contrastText" : "text.secondary",
                "&:hover": {
                  color: "secondary.contrastText",
                },
              }}
              onClick={() => setDraft("yes")}
            >
              Yes
            </Button>
            <Button
              sx={{
                bgcolor: draft === "no" ? "secondary.main" : "grey.200",
                color:
                  draft === "no" ? "secondary.contrastText" : "text.secondary",
                "&:hover": {
                  color: "secondary.contrastText",
                },
              }}
              onClick={() => setDraft("no")}
            >
              No
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </>
  );
}

export default GeneralDetails;
