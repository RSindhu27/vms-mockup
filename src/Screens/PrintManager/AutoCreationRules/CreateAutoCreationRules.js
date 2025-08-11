import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  TextField,
  Button,
  Typography,
  Select,
  MenuItem,
  FormControl,
  Checkbox,
  Chip,
  Box,
  IconButton,
  Stack,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  FormControlLabel,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

const subDocumentList = [
  { value: "Batch Manufacturing Record", label: "Batch Manufacturing Record" },
  { value: "Quality Control Report", label: "Quality Control Report" },
  { value: "Form Control Report", label: "Form Control Report" },
];

const fieldOptions = [
  "Product Name",
  "Batch Number",
  "Manufacturing Date",
  "Site Code",
];

const stateOptions = ["Effective", "Approved", "In Review", "Draft"];

const CreateAutoCreationRules = ({ open, onClose }) => {
  const [ruleId] = useState("CR39580");
  const [description, setDescription] = useState("");
  const [documentType, setDocumentType] = useState("");
  const [field, setField] = useState("");
  const [fields, setFields] = useState([]);
  const [uniqueFields, setUniqueFields] = useState([]);
  const [selectedStates, setSelectedStates] = useState([]);
  const [triggerState, setTriggerState] = useState("");
  const [autoCreate, setAutoCreate] = useState(true);
  const [activate, setActivate] = useState(true);
  const [remarks, setRemarks] = useState("");

  const addField = () => {
    if (field && !fields.includes(field)) {
      setFields([...fields, field]);
      setField("");
    }
  };

  const removeField = (f) => {
    setFields(fields.filter((item) => item !== f));
    setUniqueFields(uniqueFields.filter((item) => item !== f));
  };

  const toggleUnique = (field) => {
    if (uniqueFields.includes(field)) {
      setUniqueFields(uniqueFields.filter((f) => f !== field));
    } else {
      setUniqueFields([...uniqueFields, field]);
    }
  };

  const addTriggerState = () => {
    if (triggerState && !selectedStates.includes(triggerState)) {
      setSelectedStates([...selectedStates, triggerState]);
      setTriggerState("");
    }
  };

  const removeTriggerState = (state) => {
    setSelectedStates(selectedStates.filter((s) => s !== state));
  };

  const handleSave = () => {
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        <Typography fontWeight={600}>⚙️ Create Auto Creation Rule</Typography>
      </DialogTitle>
      <DialogContent dividers sx={{ py: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Typography variant="subtitle2">Rule ID</Typography>
            <TextField
              fullWidth
              size="small"
              value={ruleId}
              InputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="subtitle2">Rule Description *</Typography>
            <TextField
              fullWidth
              size="small"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="subtitle2">Document Type</Typography>
            <FormControl fullWidth size="small">
              <Select
                value={documentType}
                onChange={(e) => setDocumentType(e.target.value)}
                displayEmpty
              >
                <MenuItem value="" disabled>
                  Select document type
                </MenuItem>
                {subDocumentList.map((doc) => (
                  <MenuItem key={doc.value} value={doc.value}>
                    {doc.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle2" gutterBottom>
              Data Fields (Key Matching Fields)
            </Typography>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={10}>
                <FormControl fullWidth size="small">
                  <Select
                    value={field}
                    onChange={(e) => setField(e.target.value)}
                    displayEmpty
                  >
                    <MenuItem value="" disabled>
                      Select field
                    </MenuItem>
                    {fieldOptions.map((f) => (
                      <MenuItem key={f} value={f}>
                        {f}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={2}>
                <Button
                  variant="contained"
                  fullWidth
                  color="success"
                  startIcon={<AddIcon />}
                  onClick={addField}
                >
                  Add
                </Button>
              </Grid>
              <Grid item xs={12}>
                <TableContainer component={Paper}>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ width: 80 }}>Unique</TableCell>
                        <TableCell>Field</TableCell>
                        <TableCell align="right">Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {fields.map((f, i) => (
                        <TableRow key={i}>
                          <TableCell>
                            <Checkbox
                              checked={uniqueFields.includes(f)}
                              onChange={() => toggleUnique(f)}
                              sx={{ color: "#4caf50" }}
                            />
                          </TableCell>
                          <TableCell>{f}</TableCell>
                          <TableCell align="right">
                            <IconButton onClick={() => removeField(f)}>
                              <CloseIcon fontSize="small" />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <Box mt={1}>
                  <FormControlLabel
                    control={<Checkbox checked sx={{ color: "#4caf50" }} />}
                    label={
                      <Typography variant="caption">Unique key</Typography>
                    }
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle2">Select Trigger State</Typography>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={10}>
                <FormControl fullWidth size="small">
                  <Select
                    value={triggerState}
                    onChange={(e) => setTriggerState(e.target.value)}
                    displayEmpty
                  >
                    <MenuItem value="" disabled>
                      Select state
                    </MenuItem>
                    {stateOptions.map((s) => (
                      <MenuItem key={s} value={s}>
                        {s}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={2}>
                <Button variant="outlined" onClick={addTriggerState}>
                  Add State
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Stack direction="row" spacing={1} flexWrap="wrap">
                  {selectedStates.map((s, i) => (
                    <Chip
                      key={i}
                      label={s}
                      onDelete={() => removeTriggerState(s)}
                      color="success"
                      variant="filled"
                    />
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle2">Auto Create:</Typography>
            <FormControlLabel
              control={
                <Switch
                  checked={autoCreate}
                  onChange={() => setAutoCreate(!autoCreate)}
                  color="success"
                />
              }
              label={autoCreate ? "Yes" : "No"}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle2">Activate:</Typography>
            <FormControlLabel
              control={
                <Switch
                  checked={activate}
                  onChange={() => setActivate(!activate)}
                  color="success"
                />
              }
              label={activate ? "Yes" : "No"}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle2">Remarks *</Typography>
            <TextField
              fullWidth
              size="small"
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions sx={{ p: 2 }}>
        <Button onClick={onClose} variant="outlined" color="error">
          Cancel
        </Button>
        <Button onClick={handleSave} variant="contained" color="success">
          Save Rule
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateAutoCreationRules;
