import React, { useState } from "react";
import { PageButton, TabWrapper } from "../../../Components/Page";
import {
  Box,
  Divider,
  Grid,
  MenuItem,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import AssessmentRequiredNo from "./AssessmentRequiredNo";
import AssessmentRequiredYes from "./AssessmentRequiredYes";

const categoryList = [
  {
    value: 1,
    label: "Category 1",
  },
  {
    value: 2,
    label: "Category 2",
  },
  {
    value: 3,
    label: "Category 3",
  },
  {
    value: 4,
    label: "Category 4",
  },
];

const subCategoryList = [
  {
    value: 1,
    label: "Subcategory 1",
  },
  {
    value: 2,
    label: "Subcategory 2",
  },
  {
    value: 3,
    label: "Subcategory 3",
  },
  {
    value: 4,
    label: "Subcategory 4",
  },
];

const subEntityList = [
  {
    value: 1,
    label: "Entity Type 1",
  },
  {
    value: 2,
    label: "Entity Type 2",
  },
  {
    value: 3,
    label: "Entity Type 3",
  },
  {
    value: 4,
    label: "Entity Type 4",
  },
];

function NewEntity() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState(1);
  const [subCategory, setSubCategory] = useState(1);
  const [entityType, setEntityType] = useState(1);
  const [assessmentRequired, setAssessmentRequired] = useState("yes");
  const [entityNumber, setEntityNumber] = useState("");
  const [description, setDescription] = useState("");
  const [systemOwner, setSystemOwner] = useState("");
  const [businessOwner, setBusinessOwner] = useState("");

  const handleAssessmentRequired = (event, newType) => {
    setAssessmentRequired(newType);
  };

  return (
    <>
      <TabWrapper>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="body2" gutterBottom>
              Enter Entity Name
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
              id="entity_name"
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
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="body2" gutterBottom>
              Select Category
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
              id="entity_category"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              select
              value={category}
              onChange={(event) => {
                setCategory(event.target.value);
              }}
            >
              {categoryList.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="body2" gutterBottom>
              Select Subcategory
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
              id="entity_subcategory"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              select
              value={subCategory}
              onChange={(event) => {
                setSubCategory(event.target.value);
              }}
            >
              {subCategoryList.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography variant="body1">
                  <b>
                    Initiate system assessment required?
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
              <Grid item xs={12}>
                <ToggleButtonGroup
                  exclusive
                  value={assessmentRequired}
                  onChange={handleAssessmentRequired}
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
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="body2" gutterBottom>
              Select Entity Type
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
              id="entity_type"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              select
              value={entityType}
              onChange={(event) => {
                setEntityType(event.target.value);
              }}
            >
              {subEntityList.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="body2" gutterBottom>
              Entity Number
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
              id="entity_number"
              placeholder="Entity Number"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              value={entityNumber}
              onChange={(event) => {
                setEntityNumber(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" gutterBottom>
              Description
            </Typography>
            <TextField
              id="entity_description"
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
          <Grid item xs={12}>
            <Typography variant="body2" gutterBottom>
              Comment
            </Typography>
            <TextField
              id="entity_comment"
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
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="body2" gutterBottom>
              Enter System Owner
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
              id="entity_system_owner"
              placeholder="Entity System Owner"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              value={systemOwner}
              onChange={(event) => {
                setSystemOwner(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="body2" gutterBottom>
              Enter Business Owner
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
              id="entity_business_owner"
              placeholder="Entity Business Owner"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              value={businessOwner}
              onChange={(event) => {
                setBusinessOwner(event.target.value);
              }}
            />
          </Grid>
          {/* Divider */}
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            {assessmentRequired === "no" ? (
              <AssessmentRequiredNo />
            ) : (
              <AssessmentRequiredYes />
            )}
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
          <PageButton color="warning">Reset</PageButton>
        </Box>
        <Box>
          <PageButton color="info">Save</PageButton>
        </Box>
        <Box>
          <PageButton color="primary">Submit</PageButton>
        </Box>
      </Stack>
    </>
  );
}

export default NewEntity;
