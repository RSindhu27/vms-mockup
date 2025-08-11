import {
  Alert,
  AlertTitle,
  Box,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import StepperX from "./Stepper";
import Data from "./DataTwo.json";

function DocumentChanges({ onClose }) {
  const dataBase = Data.picklist;
  return (
    <>
      {/* header */}
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h5" color="secondary">
            Document Change History
          </Typography>
        </Grid>
        <Grid item>
          <IconButton size="large" color="error" onClick={onClose}>
            <CloseIcon fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
      {/* Body */}
      {dataBase.map((e) => (
        <Box sx={{ mb: 1 }}>
          <Grid
            container
            spacing={1}
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="body2">
                {e.id}/{e.date}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">{e.updateBy}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Alert severity="success" icon={false}>
                <AlertTitle>Added</AlertTitle>
                {e.added}
              </Alert>
            </Grid>
            <Grid item xs={12}>
              <Alert severity="error" icon={false}>
                <AlertTitle>Removed</AlertTitle>
                {e.removed}
              </Alert>
            </Grid>
          </Grid>
        </Box>
      ))}
    </>
  );
}

export default DocumentChanges;
