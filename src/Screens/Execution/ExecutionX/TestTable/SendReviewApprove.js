import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { PageButton, PopupContainer } from "../../../../Components/Page";

function SendReviewApprove() {
  const [open, setOpen] = useState(false);
  const [executionSummery, setExecutionSummery] = useState("");
  const [discrepancySummery, setDiscrepancySummery] = useState("");
  const [analysis, setAnalysis] = useState("");
  const [conclusion, setConclusion] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <PageButton color="secondary" onClick={handleClickOpen}>
        Submit
      </PageButton>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle sx={{ borderBottom: 1, borderColor: "divider" }}>
          Send for Review/Approve
        </DialogTitle>
        <PopupContainer>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Execution Summery
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
                id="send_execution_summery"
                placeholder="Enter"
                color="secondary"
                variant="outlined"
                size="small"
                fullWidth
                multiline
                minRows={3}
                value={executionSummery}
                onChange={(event) => {
                  setExecutionSummery(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Discrepancy Summery
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
                id="send_discrepancy_summery"
                placeholder="Enter"
                color="secondary"
                variant="outlined"
                size="small"
                fullWidth
                multiline
                minRows={3}
                value={discrepancySummery}
                onChange={(event) => {
                  setDiscrepancySummery(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Analysis
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
                id="send_analysis"
                placeholder="Enter"
                color="secondary"
                variant="outlined"
                size="small"
                fullWidth
                multiline
                minRows={3}
                value={analysis}
                onChange={(event) => {
                  setAnalysis(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Conclusion
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
                id="send_conclusion"
                placeholder="Enter"
                color="secondary"
                variant="outlined"
                size="small"
                fullWidth
                multiline
                minRows={3}
                value={conclusion}
                onChange={(event) => {
                  setConclusion(event.target.value);
                }}
              />
            </Grid>
          </Grid>
        </PopupContainer>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="contained"
            disableElevation
            size="large"
            color="inherit"
          >
            Cancel
          </Button>
          <Button
            onClick={handleClose}
            autoFocus
            variant="contained"
            disableElevation
            size="large"
            color="error"
          >
            Reject
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default SendReviewApprove;
