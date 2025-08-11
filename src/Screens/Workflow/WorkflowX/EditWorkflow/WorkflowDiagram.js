import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import { PopupContainer } from "../../../../Components/Page";
import Xarrow from "react-xarrows";

const InitiateBox = ({ id, text }) => {
  return (
    <Box
      id={id}
      sx={{
        bgcolor: "primary.main",
        p: 1,
        boxSizing: "border-box",
        width: 150,
        borderRadius: 2,
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          textTransform: "uppercase",
          fontWeight: "bold",
        }}
        variant="body1"
      >
        {text}
      </Typography>
    </Box>
  );
};

const DiscussionBox = ({ id, text, subText, status }) => {
  const handleColor = (e) => {
    if (e === "success") {
      return "success.main";
    }
    if (e === "error") {
      return "error.main";
    }
    if (e === "warning") {
      return "mark.main";
    } else return "info.main";
  };

  const handleTextColor = (e) => {
    if (e === "success") {
      return "success.contrastText";
    }
    if (e === "error") {
      return "error.contrastText";
    }
    if (e === "warning") {
      return "mark.contrastText";
    } else return "info.contrastText";
  };

  return (
    <Box
      sx={{
        width: 100,
        height: 100,
        my: 6,
        bgcolor: handleColor(status),
        transform: "rotate(-45deg)",
        position: "relative",
      }}
      variant="body1"
      id={id}
    >
      <Box
        sx={{
          width: 100,
          height: 60,
          p: 1,
          boxSizing: "border-box",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "rotate(45deg) translate(-57%, 25%)",
          color: handleTextColor(status),
        }}
      >
        <Typography variant="body1" textAlign="center">
          {text}
        </Typography>
        <Typography variant="body2" textAlign="center">
          {subText}
        </Typography>
      </Box>
    </Box>
  );
};

const ConnectorBox = ({ id, text, space }) => {
  return (
    <Box
      id={id}
      sx={{
        bgcolor: "info.main",
        color: "info.contrastText",
        width: 100,
        height: 100,
        borderRadius: "50%",
        position: "absolute",
        left: "10%",
        top: `calc(${space}*180px)`,
      }}
    >
      <Box
        sx={{
          width: 80,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Typography>{text}</Typography>
      </Box>
    </Box>
  );
};

function WorkflowDiagram() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button color="info" onClick={handleClickOpen}>
        Workflow Diagram
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Grid container spacing={1}>
            <Grid item xs>
              <Typography variant="h6">
                Workflow Diagram: CSV WORKFLOW
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6">Sequence: SERIAL</Typography>
            </Grid>
          </Grid>
        </DialogTitle>
        <PopupContainer>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
            }}
          >
            <InitiateBox text="Start" id={"elem0"} />
            <DiscussionBox
              text="Author"
              subText="Initiated"
              status="warning"
              id={"elem1"}
            />
            <ConnectorBox text="Sent Back" id={"elem1-1"} space={1} />
            <DiscussionBox
              text="Reviewer"
              subText="Rejected"
              status="error"
              id={"elem2"}
            />
            <DiscussionBox
              text="Approver"
              subText="Pending"
              status="success"
              id={"elem3"}
            />
            <InitiateBox text="End" id={"elem4"} />
            <Xarrow start="elem0" end="elem1" strokeWidth={2} color="#e5e5e5" />
            <Xarrow start="elem1" end="elem2" strokeWidth={2} color="#e5e5e5" />
            <Xarrow
              start="elem2"
              end="elem1-1"
              strokeWidth={2}
              endAnchor="bottom"
              color="#e5e5e5"
              path="grid"
            />
            <Xarrow
              start="elem1-1"
              end="elem1"
              strokeWidth={2}
              startAnchor="top"
              color="#e5e5e5"
              path="grid"
            />
            <Xarrow start="elem2" end="elem3" strokeWidth={2} color="#e5e5e5" />
            <Xarrow start="elem3" end="elem4" strokeWidth={2} color="#e5e5e5" />
          </Box>
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
            variant="contained"
            color="info"
            disableElevation
            size="large"
          >
            Download as PDF
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default WorkflowDiagram;
