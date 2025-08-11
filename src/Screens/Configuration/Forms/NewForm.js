import React, { useState } from "react";
import { PageButton, TabWrapper } from "../../../Components/Page";
import {
  Box,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AddSection from "./AddSection";
import AddFormType from "./AddFormType";
import CreateForm from "./CreateForm";
import FormDetails from "./FormDetails";

function NewForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState(1);
  const [inheritForm, setInheritForm] = useState("none");

  const optionsList = [
    {
      value: 1,
      label: "Option 1",
    },
    {
      value: 2,
      label: "Option 2",
    },
    {
      value: 3,
      label: "Option 3",
    },
    {
      value: 4,
      label: "Option 4",
    },
    {
      value: 5,
      label: "Option 5",
    },
  ];

  const formList = [
    {
      value: 1,
      label: "Form 1",
    },
    {
      value: 2,
      label: "Form 2",
    },
    {
      value: 3,
      label: "Form 3",
    },
    {
      value: 4,
      label: "Form 4",
    },
    {
      value: 5,
      label: "Form 5",
    },
  ];

  return (
    <>
      <TabWrapper>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container spacing={2} justifyContent="end">
              <Grid item>
                <Typography>
                  Prefix: <b>STD</b>
                </Typography>
              </Grid>
              <Grid item>
                <Typography>
                  ID: <b>STD001</b>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" gutterBottom>
              Form Name
              <Typography color="error.main" component="span">
                *
              </Typography>
            </Typography>
            <TextField
              id="form_name"
              placeholder="Form Name"
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
              Select Form Type
              <Typography color="error.main" component="span">
                *
              </Typography>
            </Typography>
            <TextField
              id="form_type"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              select
              value={type}
              onChange={(event) => {
                setType(event.target.value);
              }}
            >
              {optionsList.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={0} justifyContent="end">
              <Grid item>
                <AddFormType />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" gutterBottom>
              Description
            </Typography>
            <TextField
              id="category_description"
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
          <Grid item xs={12} sm={12}>
            <Typography variant="body2" gutterBottom>
              Select Form to Inherit Fields
            </Typography>
            <TextField
              id="form_inherit"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              select
              value={inheritForm}
              onChange={(event) => {
                setInheritForm(event.target.value);
              }}
            >
              <MenuItem key="none" value="none">
                None
              </MenuItem>
              {formList.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <Box p={1} />
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Typography>
              <strong>
                Create Form
                <Typography color="error.main" component="span">
                  *
                </Typography>
                :
              </strong>
            </Typography>
          </Grid>
          <Grid item>
            <CreateForm key="create_form" mode="new" />
          </Grid>
          <Grid item>
            <Typography>
              <strong>
                Add Section
                <Typography color="error.main" component="span">
                  *
                </Typography>
                :
              </strong>
            </Typography>
          </Grid>
          <Grid item>
            <AddSection key="add_section" />
          </Grid>
        </Grid>
        <Box p={1} />
        <FormDetails />
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
          <PageButton color="info">Reset</PageButton>
        </Box>
        <Box>
          <PageButton color="secondary">Update</PageButton>
        </Box>
      </Stack>
    </>
  );
}

export default NewForm;
