import React, { useState } from "react";
import {
  Box,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { PageButton, TabWrapper } from "../../../Components/Page";
import CreateTemplate from "./CreateTemplate";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function EditPrintTemplate() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

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
              Edit Numbering System
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <TabWrapper>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" gutterBottom>
              Enter Print Template Name*
            </Typography>
            <TextField
              id="print_template_name"
              placeholder="Enter Name"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" gutterBottom>
              Print Template ID*
            </Typography>
            <TextField
              id="print_template_id"
              placeholder="Enter Id"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              value={id}
              onChange={(event) => {
                setId(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Typography variant="body2" gutterBottom>
              Description
            </Typography>
            <TextField
              id="num_sys_description"
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
          <Grid item>
            <CreateTemplate key="create-template" />
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
          <PageButton color="secondary">Generate</PageButton>
        </Box>
      </Stack>
    </>
  );
}

export default EditPrintTemplate;
