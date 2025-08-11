import styled from "@emotion/styled";
import { Box, Paper } from "@mui/material";
import { Background_Login } from "../Images";

const LandingWrapper = styled(Box)(({ theme }) => ({
  width: 100 + "%",
  height: 100 + "%",
  minHeight: 100 + "vh",
  position: "relative",
  backgroundColor: theme.palette.background.common,
  backgroundImage: `url(${Background_Login})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
}));

const LandingInner = styled(Box)(({ theme }) => ({
  width: 90 + "%",
  maxWidth: 320,
  position: "absolute",
  left: "75%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  [theme.breakpoints.down("md")]: {
    left: "50%",
  },
}));

const LandingFooter = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: 75 + "%",
  bottom: 10 + "%",
  width: 320,
  transform: "translate(-50%, 0px)",
  [theme.breakpoints.down("md")]: {
    left: "50%",
  },
}));

const LoginBox = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  boxSizing: "border-box",
  marginBottom: theme.spacing(2),
}));

export { LandingWrapper, LandingInner, LoginBox, LandingFooter };
