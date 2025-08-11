import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Switch,
  FormControlLabel,
  Button,
  Paper,
  MenuItem,
  Select,
  FormControl,
} from "@mui/material";
import { TabWrapper } from "../../../Components/Page";

const documentTypes = ["Invoice", "Purchase Order", "Delivery Note"];

const PrintEventSettings = () => {
  const [fieldConfigs, setFieldConfigs] = useState([
    {
      fieldName: "event_id",
      displayName: "Event ID",
      showField: true,
      uniqueKey: true,
    },
    {
      fieldName: "created_date",
      displayName: "Created Date",
      showField: true,
      uniqueKey: false,
    },
    {
      fieldName: "doc_type",
      displayName: "Document Type",
      showField: false,
      uniqueKey: false,
    },
  ]);

  const [erpMappings, setErpMappings] = useState([
    { erp: "INV", value: "BATCH-001", documentType: "Invoice" },
    { erp: "PO", value: "BATCH-002", documentType: "Purchase Order" },
  ]);

  const handleFieldChange = (index, key, value) => {
    const updated = [...fieldConfigs];
    updated[index][key] = value;
    setFieldConfigs(updated);
  };

  const handleErpChange = (index, key, value) => {
    const updated = [...erpMappings];
    updated[index][key] = value;
    setErpMappings(updated);
  };

  const handleAddField = () => {
    setFieldConfigs([
      ...fieldConfigs,
      { fieldName: "", displayName: "", showField: false, uniqueKey: false },
    ]);
  };

  const handleAddMapping = () => {
    setErpMappings([...erpMappings, { erp: "", value: "", documentType: "" }]);
  };

  return (
    <TabWrapper>
      {/* Field Configuration */}
      <Paper variant="outlined" sx={{ p: 3, mb: 4 }}>
        <Typography variant="subtitle1" fontWeight={600}>
          Field Configuration
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={2}>
          Customize which fields to display and how they appear in the system
        </Typography>

        <Grid container spacing={2} alignItems="center" mb={1}>
          <Grid item xs={3}>
            <Typography fontWeight={500}>Field Name</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography fontWeight={500}>Display Name</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography fontWeight={500}>Show Field</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography fontWeight={500}>Unique Key</Typography>
          </Grid>

          {fieldConfigs.map((field, idx) => (
            <React.Fragment key={idx}>
              <Grid item xs={3}>
                <TextField
                  size="small"
                  fullWidth
                  value={field.fieldName}
                  onChange={(e) =>
                    handleFieldChange(idx, "fieldName", e.target.value)
                  }
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  size="small"
                  fullWidth
                  value={field.displayName}
                  onChange={(e) =>
                    handleFieldChange(idx, "displayName", e.target.value)
                  }
                />
              </Grid>
              <Grid item xs={3}>
                <FormControlLabel
                  sx={{ ml: 1 }}
                  control={
                    <Switch
                      checked={field.showField}
                      onChange={(e) =>
                        handleFieldChange(idx, "showField", e.target.checked)
                      }
                      color="success"
                    />
                  }
                  label={field.showField ? "Yes" : "No"}
                />
              </Grid>
              <Grid item xs={3}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={field.uniqueKey}
                      onChange={(e) =>
                        handleFieldChange(idx, "uniqueKey", e.target.checked)
                      }
                      color="success"
                    />
                  }
                  label={field.uniqueKey ? "Yes" : "No"}
                />
              </Grid>
            </React.Fragment>
          ))}
        </Grid>

        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          mt={2}
        >
          <Grid item>
            <Button variant="outlined" color="success" onClick={handleAddField}>
              Add Field
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#a6ce39",
                "&:hover": { backgroundColor: "#8abb2c" },
              }}
            >
              Save Field Configuration
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {/* ERP Document Type Mapping */}
      <Paper variant="outlined" sx={{ p: 3 }}>
        <Typography variant="subtitle1" fontWeight={600}>
          ERP Document Type Mapping
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={2}>
          Link specific ERP values to document types in the system
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Typography fontWeight={500} mb={1}>
              ERP
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography fontWeight={500} mb={1}>
              Value
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography fontWeight={500} mb={1}>
              Maps to Document Type
            </Typography>
          </Grid>

          {erpMappings.map((mapping, idx) => (
            <React.Fragment key={idx}>
              <Grid item xs={3}>
                <TextField
                  size="small"
                  fullWidth
                  value={mapping.erp}
                  onChange={(e) => handleErpChange(idx, "erp", e.target.value)}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  size="small"
                  fullWidth
                  value={mapping.value}
                  onChange={(e) =>
                    handleErpChange(idx, "value", e.target.value)
                  }
                />
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth size="small">
                  <Select
                    value={mapping.documentType}
                    onChange={(e) =>
                      handleErpChange(idx, "documentType", e.target.value)
                    }
                  >
                    {documentTypes.map((type) => (
                      <MenuItem key={type} value={type}>
                        {type}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </React.Fragment>
          ))}
        </Grid>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt={3}
        >
          <Button variant="outlined" color="success" onClick={handleAddMapping}>
            Add Mapping
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#a6ce39",
              "&:hover": { backgroundColor: "#8abb2c" },
            }}
          >
            Save Mappings
          </Button>
        </Box>
      </Paper>
    </TabWrapper>
  );
};

export default PrintEventSettings;
