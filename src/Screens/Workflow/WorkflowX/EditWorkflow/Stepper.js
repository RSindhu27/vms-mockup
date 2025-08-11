import * as React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import FlagIcon from "@mui/icons-material/Flag";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const LineConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundColor: theme.palette.secondary.main,
  }),
  ...(ownerState.completed && {
    backgroundColor: theme.palette.secondary.main,
  }),
}));

function ColorStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <FlagIcon />,
    2: <DoneOutlineIcon />,
    3: <DisabledByDefaultIcon />,
    4: <HistoryToggleOffIcon />,
    5: <SportsScoreIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

const steps = [
  "Started",
  "Review Completed",
  "Approval Rejected",
  "Approval Pending",
  "Pending",
];

function StepperX({ activeStep }) {
  return (
    <Stack sx={{ width: "100%" }} spacing={4}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<LineConnector />}
      >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel
              optional={
                <Typography
                  component={Link}
                  to="#"
                  sx={{ color: "info.main" }}
                  variant="caption"
                >
                  User Details
                </Typography>
              }
              StepIconComponent={ColorStepIcon}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}

export default StepperX;
