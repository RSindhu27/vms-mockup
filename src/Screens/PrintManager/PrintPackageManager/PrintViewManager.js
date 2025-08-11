import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Grid,
  TextField,
  Chip,
  Button,
  Box,
  Paper,
  useTheme,
} from "@mui/material";

const PrintViewManager = ({ open, onClose, packageData }) => {
  const theme = useTheme();
  const {
    package_id,
    version,
    title,
    created_by,
    created_on,
    last_updated_by,
    last_updated_date,
    activation_by,
    activation_date,
    active,
    remarks,
    documents,
  } = packageData;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth scroll="body">
      <DialogTitle>
        <Typography fontWeight={600}>⚙️ View Package</Typography>
      </DialogTitle>

      <DialogContent dividers sx={{ px: 3, py: 2 }}>
        <Grid container spacing={2}>
          {[
            { label: "Package ID", value: package_id },
            { label: "Version", value: version },
            { label: "Title", value: title },
            { label: "Created By", value: created_by },
            { label: "Created On", value: created_on },
            { label: "Last Updated Date", value: last_updated_date },
            { label: "Last Updated By", value: last_updated_by },
            { label: "Date Of Activation", value: activation_date },
            { label: "Activation By", value: activation_by },
          ].map((field, idx) => (
            <Grid item xs={4} key={idx}>
              <Typography variant="subtitle2" gutterBottom>
                {field.label}
              </Typography>
              <TextField
                fullWidth
                size="small"
                value={field.value}
                InputProps={{ readOnly: true }}
                sx={{
                  "& input": {
                    color: theme.palette.text.disabled,
                    WebkitTextFillColor: `${theme.palette.text.disabled} !important`,
                  },
                }}
              />
            </Grid>
          ))}

          <Grid item xs={12}>
            <Box display="flex" alignItems="center" gap={2}>
              <Typography variant="subtitle2">Activate:</Typography>
              <Chip
                label={active ? "Yes" : "No"}
                color={active ? "success" : "default"}
                size="small"
              />
              <Typography variant="subtitle2">Remarks:</Typography>
              <TextField
                fullWidth
                size="small"
                value={remarks}
                InputProps={{ readOnly: true }}
                sx={{
                  "& input": {
                    color: theme.palette.text.disabled,
                    WebkitTextFillColor: `${theme.palette.text.disabled} !important`,
                  },
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} mt={3}>
            <Typography variant="h6" gutterBottom>
              Document List
            </Typography>
            <Paper sx={{ mt: 1 }}>
              <Box
                display="grid"
                gridTemplateColumns="0.8fr 1fr 1fr 2fr 4fr 1fr 1fr"
                fontWeight="bold"
                p={1.5}
                borderBottom="1px solid #ccc"
                bgcolor={theme.palette.grey[100]}
              >
                <Box>Main</Box>
                <Box>Document ID</Box>
                <Box>Type</Box>
                <Box>Title</Box>
                <Box>System Data Fields</Box>
                <Box>Version</Box>
                <Box>Status</Box>
              </Box>
              {documents.map((doc, idx) => (
                <Box
                  key={idx}
                  display="grid"
                  gridTemplateColumns="0.8fr 1fr 1fr 2fr 4fr 1fr 1fr"
                  alignItems="center"
                  p={1.5}
                  borderBottom="1px solid #eee"
                >
                  <Box>
                    {idx === 0 && (
                      <Chip label="Main" color="info" size="small" />
                    )}
                  </Box>
                  <Box>
                    <Typography variant="body2">{doc.documentId}</Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2">{doc.type}</Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2">{doc.title}</Typography>
                  </Box>
                  <Box display="flex" gap={1} flexWrap="wrap">
                    {doc.systemDataFields.map((field, i) => (
                      <Chip
                        key={i}
                        label={field}
                        variant="outlined"
                        size="small"
                      />
                    ))}
                  </Box>
                  <Box>
                    <Typography variant="body2">{doc.version}</Typography>
                  </Box>
                  <Box>
                    <Chip
                      label={doc.status}
                      color={doc.status === "Active" ? "success" : "default"}
                      size="small"
                    />
                  </Box>
                </Box>
              ))}
            </Paper>
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions sx={{ px: 3, py: 2 }}>
        <Button variant="outlined" color="error" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="contained" color="primary" disabled>
          Save Package
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PrintViewManager;
