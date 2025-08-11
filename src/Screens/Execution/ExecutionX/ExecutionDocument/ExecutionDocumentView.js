import { Box, Grid, Stack, Typography } from "@mui/material";
import EditReason from "./EditReason";
import History from "./History";

function Option() {
  return (
    <Box
      sx={{
        py: 0.5,
        px: 1,
        bgcolor: "background.paper",
        position: "absolute",
        bottom: 16,
        right: 16,
        borderRadius: 2,
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <Stack direction="row" alignItems="center">
            <Box
              sx={{
                width: 16,
                height: 16,
                borderRadius: 2,
                bgcolor: "success.main",
                mr: 1,
              }}
            />
            <Box>
              <Typography>Editable</Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid item>
          <Stack direction="row" alignItems="center">
            <Box
              sx={{
                width: 16,
                height: 16,
                borderRadius: 2,
                bgcolor: "grey.200",
                mr: 1,
              }}
            />
            <Box>
              <Typography>Non-Editable</Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid item>
          <Stack direction="row" alignItems="center">
            <Box
              sx={{
                width: 16,
                height: 16,
                borderRadius: 2,
                bgcolor: "info.main",
                mr: 1,
              }}
            />
            <Box>
              <Typography>System update</Typography>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

function Status() {
  return (
    <>
      <Typography variant="h6">Status</Typography>
      <Typography variant="body2" color="success.main">
        Execution in Progress
      </Typography>
    </>
  );
}

function ExecutionDocumentView() {
  return (
    <>
      <Box
        sx={{
          bgcolor: "grey.400",
          p: 2,
          height: 500,
          boxSizing: "border-box",
          position: "relative",
        }}
      >
        This is a Box for view Document.
        <EditReason />
        <History />
        <Option />
        <Status />
      </Box>
    </>
  );
}

export default ExecutionDocumentView;
