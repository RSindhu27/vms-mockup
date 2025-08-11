import React, { useState } from "react";
import { PageButton, TabWrapper } from "../../../Components/Page";
import {
  Box,
  Grid,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AddSection from "./AddSection";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SectionDetails from "./SectionDetails";

const decisionTreeList = [
  {
    value: 1,
    label: "Single Decision",
  },
  {
    value: 2,
    label: "Multiple Decision",
  },
];

function EditDecisionTree() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [decisionTreeType, setDecisionTreeType] = useState(1);
  const [prefix, setPrefix] = useState("");
  const [scope, setScope] = useState("");

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
              Edit Decision Tree
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <TabWrapper>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="body2" gutterBottom>
              Enter Decision Tree
            </Typography>
            <TextField
              id="decision_tree_name"
              placeholder="Enter Decision Tree Name"
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
              Select Decision Tree Type
            </Typography>
            <TextField
              id="decision_tree_type"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              select
              value={decisionTreeType}
              onChange={(event) => {
                setDecisionTreeType(event.target.value);
              }}
            >
              {decisionTreeList.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="body2" gutterBottom>
              Enter Prefix
            </Typography>
            <TextField
              id="decision_tree_prefix"
              placeholder="Prefix"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              value={prefix}
              onChange={(event) => {
                setPrefix(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" gutterBottom>
              Scope
            </Typography>
            <TextField
              id="decision_tree_scope"
              color="secondary"
              value={scope}
              fullWidth
              multiline
              rows={4}
              onChange={(event) => {
                setScope(event.target.value);
              }}
            />
          </Grid>
        </Grid>
        <Box p={1} />
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Typography variant="body1">
              <strong>Add Section:</strong>
            </Typography>
          </Grid>
          <Grid item>
            <AddSection key="add_section" />
          </Grid>
        </Grid>
        <Box p={1} />
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Typography variant="h5">Added Section</Typography>
          </Grid>
          <Grid item xs={12}>
            <SectionDetails />
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
          <PageButton color="secondary">Save</PageButton>
        </Box>
      </Stack>
    </>
  );
}

export default EditDecisionTree;
