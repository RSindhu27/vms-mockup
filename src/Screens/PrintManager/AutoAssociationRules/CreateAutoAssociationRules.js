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
  Stack,
  Switch,
  Chip,
  IconButton,
  Alert,
  Paper,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

const mainDocFields = ["Product Code", "Batch Number", "Market"];
const subDocFields = ["Product Code", "Batch Number", "Market"];
const creationRules = ["CR24673", "CR27902", "CR08938", "CR08622"];
const stateOptions = ["Effective", "Approved", "In Review", "Draft"];

const CreateAutoAssociationRule = ({ open, onClose }) => {
  const [ruleId] = useState("CR39580");
  const [description, setDescription] = useState("");
  const [creationRule, setCreationRule] = useState("");
  const [mainDocType, setMainDocType] = useState("");
  const [subDocType, setSubDocType] = useState("");
  const [mainField, setMainField] = useState("");
  const [subField, setSubField] = useState("");
  const [matchedFields, setMatchedFields] = useState([]);
  const [triggerState, setTriggerState] = useState("");
  const [selectedStates, setSelectedStates] = useState([]);
  const [applyToExisting, setApplyToExisting] = useState(true);
  const [active, setActive] = useState(true);
  const [remarks, setRemarks] = useState("");
  const [fieldMismatchError, setFieldMismatchError] = useState(false);

  const handleAddField = () => {
    if (mainField && subField) {
      if (mainField === subField) {
        if (!matchedFields.includes(mainField)) {
          setMatchedFields([...matchedFields, mainField]);
          setFieldMismatchError(false);
        }
      } else {
        setFieldMismatchError(true);
      }
    }
  };

  const removeField = (field) => {
    setMatchedFields(matchedFields.filter((f) => f !== field));
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
    // Save logic here
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        <Typography fontWeight={600}>⚙️ Create Auto Association Rule</Typography>
      </DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Typography variant="subtitle2">Rule ID</Typography>
            <TextField fullWidth size="small" value={ruleId} InputProps={{ readOnly: true }} />
          </Grid>
          <Grid item xs={4}>
            <Typography variant="subtitle2">Rule Description *</Typography>
            <TextField fullWidth size="small" value={description} onChange={(e) => setDescription(e.target.value)} />
          </Grid>
          <Grid item xs={4}>
            <Typography variant="subtitle2">Creation Rule *</Typography>
            <FormControl fullWidth size="small">
              <Select value={creationRule} onChange={(e) => setCreationRule(e.target.value)} displayEmpty>
                <MenuItem value="" disabled>Select creation rule</MenuItem>
                {creationRules.map((rule) => (
                  <MenuItem key={rule} value={rule}>{rule}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="subtitle2">Main Document Type *</Typography>
            <FormControl fullWidth size="small">
              <Select value={mainDocType} onChange={(e) => setMainDocType(e.target.value)} displayEmpty>
                <MenuItem value="" disabled>Select Doc Type</MenuItem>
                <MenuItem value="SOP">SOP</MenuItem>
                <MenuItem value="Form">Form</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle2">Sub Document Type *</Typography>
            <FormControl fullWidth size="small">
              <Select value={subDocType} onChange={(e) => setSubDocType(e.target.value)} displayEmpty>
                <MenuItem value="" disabled>Select Doc Type</MenuItem>
                <MenuItem value="SOP">SOP</MenuItem>
                <MenuItem value="Form">Form</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Field Matcher */}
          <Grid item xs={12}>
            <Typography variant="subtitle2">Data Fields (Key Matching Fields)</Typography>
            <Grid container spacing={1} alignItems="center">
              <Grid item xs={5}>
                <Select fullWidth size="small" value={mainField} onChange={(e) => setMainField(e.target.value)} displayEmpty>
                  <MenuItem value="" disabled>Main doc field</MenuItem>
                  {mainDocFields.map((field) => (
                    <MenuItem key={field} value={field}>{field}</MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={5}>
                <Select fullWidth size="small" value={subField} onChange={(e) => setSubField(e.target.value)} displayEmpty>
                  <MenuItem value="" disabled>Sub Doc field</MenuItem>
                  {subDocFields.map((field) => (
                    <MenuItem key={field} value={field}>{field}</MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={2}>
                <Button variant="contained" fullWidth color="success" onClick={handleAddField}><AddIcon /></Button>
              </Grid>

              {fieldMismatchError && (
                <Grid item xs={12}>
                  <Alert severity="error" icon={<WarningAmberIcon fontSize="small" />}>Main and Sub fields must match to be added.</Alert>
                </Grid>
              )}

              {matchedFields.length > 0 && (
                <Grid item xs={12}>
                  <Paper elevation={1} sx={{ p: 1.5 }}>
                    <Typography variant="subtitle2" mb={1}>Matched Fields</Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap">
                      {matchedFields.map((f, i) => (
                        <Chip key={i} label={f} onDelete={() => removeField(f)} color="primary" sx={{ fontWeight: 500, px: 1.2, borderRadius: "8px" }} />
                      ))}
                    </Stack>
                  </Paper>
                </Grid>
              )}
            </Grid>
          </Grid>

          {/* Trigger States */}
          <Grid item xs={12}>
            <Typography variant="subtitle2">Select Trigger State</Typography>
            <Grid container spacing={1} alignItems="center">
              <Grid item xs={10}>
                <FormControl fullWidth size="small">
                  <Select value={triggerState} onChange={(e) => setTriggerState(e.target.value)} displayEmpty>
                    <MenuItem value="" disabled>Select state</MenuItem>
                    {stateOptions.map((s) => (
                      <MenuItem key={s} value={s}>{s}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={2}>
                <Button variant="outlined" onClick={addTriggerState} fullWidth>Add State</Button>
              </Grid>
              <Grid item xs={12}>
                <Stack direction="row" spacing={1} flexWrap="wrap">
                  {selectedStates.map((s, i) => (
                    <Chip key={i} label={s} onDelete={() => removeTriggerState(s)} color="success" variant="filled" />
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="subtitle2">Apply to Existing Packages?</Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <Switch checked={applyToExisting} onChange={() => setApplyToExisting(!applyToExisting)} color="success" />
              <Typography>{applyToExisting ? "Yes" : "No"}</Typography>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle2">Active</Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <Switch checked={active} onChange={() => setActive(!active)} color="success" />
              <Typography>{active ? "Yes" : "No"}</Typography>
            </Stack>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle2">Remarks *</Typography>
            <TextField fullWidth size="small" value={remarks} onChange={(e) => setRemarks(e.target.value)} />
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions sx={{ p: 2 }}>
        <Button onClick={onClose} variant="outlined" color="error">Cancel</Button>
        <Button onClick={handleSave} variant="contained" color="success">Save Association</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateAutoAssociationRule;
