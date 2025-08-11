import React, { useState } from "react";
import { PageButton, TabWrapper } from "../../../Components/Page";
import {
  Box,
  Grid,
  Stack,
  TextField,
  Typography,
  IconButton,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const columnTypeList = [
  {
    value: 1,
    label: "Column Type 1",
  },
  {
    value: 2,
    label: "Column Type 2",
  },
  {
    value: 3,
    label: "Column Type 3",
  },
  {
    value: 4,
    label: "Column Type 4",
  },
];

const documentTypeList = [
  {
    value: 1,
    label: "Document Type 1",
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

function EditMappingKeyword() {
  const [name, setName] = useState("");
  const [columnType, setColumnType] = useState(1);
  const [documentType, setDocumentType] = useState(1);
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
              Edit Mapping Keyword
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <TabWrapper>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="body2" gutterBottom>
              Name
            </Typography>
            <TextField
              id="mapping_keyword_column_header"
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
              Column Type
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
              id="mapping_keyword_column_type"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              select
              value={columnType}
              onChange={(event) => {
                setColumnType(event.target.value);
              }}
            >
              {columnTypeList.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="body2" gutterBottom>
              Document Type
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
              id="mapping_keyword_document_type"
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

export default EditMappingKeyword;
