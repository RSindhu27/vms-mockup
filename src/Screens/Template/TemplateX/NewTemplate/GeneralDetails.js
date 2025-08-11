import { Button, Grid, MenuItem, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import { VisBox, VisuallyHiddenInput } from "../../../../Components/Page";
import { TableDeleteRow } from "../../../../Components/Table";

const templateTypeList = [
  {
    label: "Type 1",
    value: 1,
  },
  {
    label: "Type 2",
    value: 2,
  },
  {
    label: "Type 3",
    value: 3,
  },
  {
    label: "Type 4",
    value: 4,
  },
  {
    label: "Type 5",
    value: 5,
  },
];

const templateOwnerList = [
  {
    label: "Owner 1",
    value: 1,
  },
  {
    label: "Owner 2",
    value: 2,
  },
  {
    label: "Owner 3",
    value: 3,
  },
  {
    label: "Owner 4",
    value: 4,
  },
  {
    label: "Owner 5",
    value: 5,
  },
];

function GeneralDetails() {
  const [docType, setDocType] = useState("");
  const [docTitle, setDocTitle] = useState("");
  const [description, setDescription] = useState("");
  const [initialVersion, setInitialVersion] = useState("");
  const [docOwner, setDocOwner] = useState("");
  const [revisionReference, setRevisionReference] = useState("");
  const [reasonRevision, setReasonRevision] = useState("");
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
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
          <Typography variant="body2" gutterBottom>
            Select Template Type
          </Typography>
          <TextField
            id="temp_gen_doc_type"
            select
            fullWidth
            size="small"
            value={docType}
            onChange={(event) => {
              setDocType(event.target.value);
            }}
          >
            {templateTypeList.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Typography variant="body2" gutterBottom>
            Template Title
          </Typography>
          <TextField
            id="temp_gen_doc_title"
            placeholder="Enter Template Title"
            color="secondary"
            variant="outlined"
            size="small"
            fullWidth
            value={docTitle}
            onChange={(event) => {
              setDocTitle(event.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Typography variant="body2" gutterBottom>
            Description
          </Typography>
          <TextField
            id="temp_gen_description"
            placeholder="Enter Description"
            multiline
            fullWidth
            rows={4}
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Typography variant="body2" gutterBottom>
            Changes Incorporated
          </Typography>
          <TextField
            id="temp_gen_description"
            placeholder="Enter Changes Incorporated"
            multiline
            fullWidth
            rows={4}
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Typography variant="body2" gutterBottom>
            Select Template Owner
          </Typography>
          <TextField
            id="temp_gen_temp_owner"
            select
            fullWidth
            size="small"
            value={docOwner}
            onChange={(event) => {
              setDocOwner(event.target.value);
            }}
          >
            {templateOwnerList.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Typography variant="body2" gutterBottom>
            Initial Version
          </Typography>
          <TextField
            id="temp_gen_initial_version"
            placeholder="Enter Initial Version"
            color="secondary"
            variant="outlined"
            size="small"
            fullWidth
            value={initialVersion}
            onChange={(event) => {
              setInitialVersion(event.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Typography variant="body2" gutterBottom>
            Revision Reference
          </Typography>
          <TextField
            id="temp_gen_revision"
            placeholder="Enter Revision Reference"
            color="secondary"
            variant="outlined"
            size="small"
            fullWidth
            value={revisionReference}
            onChange={(event) => {
              setRevisionReference(event.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Typography variant="body2" gutterBottom>
            Reason for Revision
          </Typography>
          <TextField
            id="temp_gen_reason_revision"
            placeholder="Enter Value"
            color="secondary"
            variant="outlined"
            size="small"
            fullWidth
            value={reasonRevision}
            onChange={(event) => {
              setReasonRevision(event.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Grid
            container
            spacing={1}
            justifyContent="left"
            alignItems="flex-end"
          >
            <Grid item>
              <Typography variant="body2" gutterBottom>
                External Template
              </Typography>
              <Button
                color="info"
                variant="outlined"
                startIcon={<InsertLinkIcon />}
                component="label"
              >
                Browse
                <VisuallyHiddenInput type="file" onChange={handleChange} />
              </Button>
            </Grid>
            <Grid item>
              {file && (
                <>
                  <VisBox>
                    <Typography variant="body1" color="text.secondary">
                      {fileName}
                    </Typography>{" "}
                    <TableDeleteRow onDelete={() => handleDelete()} />
                  </VisBox>
                </>
              )}
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <Typography variant="body1">
            <b>Select Location</b>
          </Typography>
          <Button variant="contained" color="secondary" disableElevation>
            Choose Folder
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Typography variant="body1">
            <b>Template Auto Location</b>
          </Typography>
          <Typography variant="body2" color="secondary">
            <b>Strides/Arcolab/Information Technology/SOP/CSV Document/</b>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default GeneralDetails;
