import React, { useMemo, useState } from "react";
import {
  Box,
  Button,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
  Paper,
  IconButton,
  Divider,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CloseIcon from "@mui/icons-material/Close";
import { TableDeleteRow } from "../../../Components/Table";

/**
 * Sample option data
 */
const projectList = [
  { label: "Project Alpha", value: "alpha" },
  { label: "Project Beta", value: "beta" },
  { label: "Project Gamma", value: "gamma" },
];

const specDocTypes = [
  { label: "URS", value: "URS" },
  { label: "SRS", value: "SRS" },
  { label: "FRS", value: "FRS" },
];

const mappingDocTypes = [
  { label: "FDS", value: "FDS" },
  { label: "OQ", value: "OQ" },
  { label: "IQ", value: "IQ" },
  { label: "PQ", value: "PQ" },
];

const initialSpecDocs = ["URS - 001", "URS - 002"];
const initialMappingDocs = ["FDS - 001", "OQ - 001", "IQ - 002"];

function NewTraceMatrix() {
  // top meta
  const [traceType, setTraceType] = useState("new"); // 'new' | 'revision'
  const [matrixNo] = useState("TM-0001");

  // form fields
  const [project, setProject] = useState("alpha");
  const [title, setTitle] = useState("");
  const [ccrNo, setCcrNo] = useState("");
  const [category] = useState("Adi-20-6 Category");
  const [subCategory] = useState("Adi-20-6 subcategory");
  const [description, setDescription] = useState("");
  const [targetDate, setTargetDate] = useState("");

  // document selectors
  const [specType, setSpecType] = useState("");
  const [mapType, setMapType] = useState("");
  const [specDocs, setSpecDocs] = useState(initialSpecDocs);
  const [mapDocs, setMapDocs] = useState(initialMappingDocs);

  const [comments, setComments] = useState("");

  // simple validation
  const errors = useMemo(() => {
    return {
      project: !project ? "Required" : "",
      title: title.trim() === "" ? "Required" : "",
      ccrNo: ccrNo.trim() === "" ? "Required" : "",
      description: description.trim() === "" ? "Required" : "",
      targetDate: targetDate.trim() === "" ? "Required" : "",
    };
  }, [project, title, ccrNo, description, targetDate]);

  const anyError = useMemo(
    () => Object.values(errors).some((e) => Boolean(e)),
    [errors]
  );

  // helpers
  const nextNumberFor = (list, prefix) => {
    const nums = list
      .filter((x) => x.startsWith(prefix))
      .map((x) => parseInt(x.split("-")[1].trim(), 10))
      .filter((n) => !isNaN(n));
    const next = (nums.length ? Math.max(...nums) : 0) + 1;
    return String(next).padStart(3, "0");
  };

  const handleAddDocuments = () => {
    if (specType) {
      const label = `${specType} - ${nextNumberFor(specDocs, specType)}`;
      if (!specDocs.includes(label)) setSpecDocs((prev) => [...prev, label]);
    }
    if (mapType) {
      const label = `${mapType} - ${nextNumberFor(mapDocs, mapType)}`;
      if (!mapDocs.includes(label)) setMapDocs((prev) => [...prev, label]);
    }
  };

  const removeSpec = (label) =>
    setSpecDocs((prev) => prev.filter((x) => x !== label));
  const removeMap = (label) =>
    setMapDocs((prev) => prev.filter((x) => x !== label));

  const handleReset = () => {
    setTraceType("new");
    setProject("alpha");
    setTitle("");
    setCcrNo("");
    setDescription("");
    setTargetDate("");
    setSpecType("");
    setMapType("");
    setSpecDocs(initialSpecDocs);
    setMapDocs(initialMappingDocs);
    setComments("");
  };

  const handleSaveDraft = () => {
    const payload = {
      traceType,
      matrixNo,
      project,
      title,
      ccrNo,
      category,
      subCategory,
      description,
      targetDate,
      specDocs,
      mapDocs,
      comments,
      status: "Draft",
    };
    console.log("Saving draft:", payload);
    alert("Draft saved (check console for payload).");
  };

  const handleCreate = () => {
    if (anyError) {
      alert("Please fill all required fields.");
      return;
    }
    const payload = {
      traceType,
      matrixNo,
      project,
      title,
      ccrNo,
      category,
      subCategory,
      description,
      targetDate,
      specDocs,
      mapDocs,
      comments,
      status: "Created",
    };
    console.log("Creating Trace Matrix:", payload);
    alert("Trace Matrix created (check console for payload).");
  };

  return (
    <Paper variant="outlined" sx={{ p: 2.5, borderRadius: 2 }}>
      {/* Header Row */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        alignItems={{ xs: "flex-start", sm: "center" }}
        justifyContent="space-between"
        spacing={1.5}
        sx={{ mb: 2 }}
      >
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography variant="body1" sx={{ minWidth: 88 }}>
            <b>Trace Type :</b>
          </Typography>
          <Stack direction="row" spacing={1}>
            <Button
              size="small"
              variant={traceType === "new" ? "contained" : "outlined"}
              onClick={() => setTraceType("new")}
            >
              New
            </Button>
            <Button
              size="small"
              variant={traceType === "revision" ? "contained" : "outlined"}
              onClick={() => setTraceType("revision")}
            >
              Revision
            </Button>
          </Stack>
        </Stack>

        <Typography variant="body2" color="text.secondary">
          <b>Trace Matrix No:</b> {matrixNo}
        </Typography>
      </Stack>

      {/* Form */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="body2" gutterBottom>
            Select Project <span style={{ color: "#f44336" }}>*</span>
          </Typography>
          <TextField
            select
            fullWidth
            size="small"
            value={project}
            error={Boolean(errors.project)}
            helperText={errors.project}
            onChange={(e) => setProject(e.target.value)}
          >
            {projectList.map((opt) => (
              <MenuItem key={opt.value} value={opt.value}>
                {opt.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="body2" gutterBottom>
            Title <span style={{ color: "#f44336" }}>*</span>
          </Typography>
          <TextField
            placeholder="Enter Title"
            size="small"
            fullWidth
            value={title}
            error={Boolean(errors.title)}
            helperText={errors.title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="body2" gutterBottom>
            Category
          </Typography>
          <Typography variant="body2" color="success.main" sx={{ mb: 1 }}>
            <b>{category}</b>
          </Typography>

          <Typography variant="body2" gutterBottom>
            Sub-Category
          </Typography>
          <Typography variant="body2" color="success.main">
            <b>{subCategory}</b>
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="body2" gutterBottom>
            CCR No <span style={{ color: "#f44336" }}>*</span>
          </Typography>
          <TextField
            placeholder="Enter CCR Number"
            size="small"
            fullWidth
            value={ccrNo}
            error={Boolean(errors.ccrNo)}
            helperText={errors.ccrNo}
            onChange={(e) => setCcrNo(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="body2" gutterBottom>
            Description <span style={{ color: "#f44336" }}>*</span>
          </Typography>
          <TextField
            placeholder="Enter Description"
            size="small"
            fullWidth
            multiline
            minRows={3}
            value={description}
            error={Boolean(errors.description)}
            helperText={errors.description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="body2" gutterBottom>
            Target Date <span style={{ color: "#f44336" }}>*</span>
          </Typography>
          <TextField
            type="date"
            size="small"
            fullWidth
            value={targetDate}
            error={Boolean(errors.targetDate)}
            helperText={errors.targetDate}
            onChange={(e) => setTargetDate(e.target.value)}
            InputProps={{
              endAdornment: (
                <CalendarMonthIcon fontSize="small" color="action" />
              ),
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="body2" gutterBottom>
            Select Specification Document Type
          </Typography>
          <TextField
            select
            fullWidth
            size="small"
            value={specType}
            onChange={(e) => setSpecType(e.target.value)}
          >
            {specDocTypes.map((opt) => (
              <MenuItem key={opt.value} value={opt.value}>
                {opt.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={12} md={6}>
          <Stack direction="row" spacing={1} alignItems="flex-end">
            <Box sx={{ flex: 1 }}>
              <Typography variant="body2" gutterBottom>
                Select Mapping Document Types
              </Typography>
              <TextField
                select
                fullWidth
                size="small"
                value={mapType}
                onChange={(e) => setMapType(e.target.value)}
              >
                {mappingDocTypes.map((opt) => (
                  <MenuItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
            <Box sx={{ pb: { xs: 0, md: 0.5 } }}>
              <Button
                variant="contained"
                color="info"
                startIcon={<AddCircleOutlineIcon />}
                onClick={handleAddDocuments}
              >
                Add Documents
              </Button>
            </Box>
          </Stack>
        </Grid>

        {/* Documents Panel */}
        <Grid item xs={12}>
          <Paper
            variant="outlined"
            sx={{ p: 2, borderRadius: 2, bgcolor: "background.default" }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle2" sx={{ mb: 1 }}>
                  Specification Documents
                </Typography>
                <Stack spacing={1.25}>
                  {specDocs.map((label) => (
                    <Stack
                      key={label}
                      direction="row"
                      spacing={1}
                      alignItems="center"
                      justifyContent="space-between"
                      sx={{
                        p: 1,
                        borderRadius: 1,
                        bgcolor: "background.paper",
                        border: "1px solid",
                        borderColor: "divider",
                      }}
                    >
                      <Stack direction="row" spacing={1} alignItems="center">
                        <CheckCircleOutlineIcon
                          fontSize="small"
                          sx={{ color: "success.main" }}
                        />
                        <Typography variant="body2">{label}</Typography>
                      </Stack>
                      <TableDeleteRow onDelete={() => removeSpec(label)} />
                    </Stack>
                  ))}
                </Stack>
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography variant="subtitle2" sx={{ mb: 1 }}>
                  Mapping Documents
                </Typography>
                <Stack spacing={1.25}>
                  {mapDocs.map((label) => (
                    <Stack
                      key={label}
                      direction="row"
                      spacing={1}
                      alignItems="center"
                      justifyContent="space-between"
                      sx={{
                        p: 1,
                        borderRadius: 1,
                        bgcolor: "background.paper",
                        border: "1px solid",
                        borderColor: "divider",
                      }}
                    >
                      <Stack direction="row" spacing={1} alignItems="center">
                        <CheckCircleOutlineIcon
                          fontSize="small"
                          sx={{ color: "success.main" }}
                        />
                        <Typography variant="body2">{label}</Typography>
                      </Stack>
                      <TableDeleteRow onDelete={() => removeMap(label)} />
                    </Stack>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Comments */}
        <Grid item xs={12}>
          <Typography variant="body2" gutterBottom>
            Comments
          </Typography>
          <TextField
            placeholder="Add any additional comments"
            size="small"
            fullWidth
            multiline
            minRows={2}
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
        </Grid>

        {/* Actions */}
        <Grid item xs={12}>
          <Stack
            direction="row"
            spacing={1}
            justifyContent="flex-end"
            sx={{ pt: 1 }}
          >
            <Button
              variant="outlined"
              color="inherit"
              onClick={() => window.history.back()}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleSaveDraft}
            >
              Save Draft
            </Button>
            <Button variant="outlined" color="warning" onClick={handleReset}>
              Reset
            </Button>
            <Button variant="contained" color="primary" onClick={handleCreate}>
              Create
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default NewTraceMatrix;
