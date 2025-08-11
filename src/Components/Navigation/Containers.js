import { styled } from "@mui/material/styles";
import { Box, Container } from "@mui/material";

const NavWrapper = styled(Box)(({ theme }) => ({
  width: 100 + "%",
  height: 100 + "%",
  minHeight: 100 + "vh",
  backgroundColor: "#F7F8FC",
  position: "relative",
}));

const NavLeftContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: 120,
  boxSizing: "border-box",
  height: 100 + "%",
  left: 0,
  top: 0,
  borderRight: 1,
  borderRightStyle: "solid",
  borderColor: theme.palette.divider,
  [theme.breakpoints.down("md")]: {
    width: 90,
  },
}));

const NavLeftLogo = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  boxSizing: "border-box",
  height: 60,
}));

const NavLeftLinks = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  overflow: "auto",
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "flex-start",
  height: "calc(100% - 60px)",
  "&::-webkit-scrollbar": {
    height: 4,
    width: 4,
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "rgb(151 167 195 / 30%)",
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(3),
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette.grey[500],
  },
  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: theme.palette.grey[200],
  },
}));

const NavTopContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  width: "calc(100% - 110px)",
  position: "absolute",
  top: 0,
  left: 110,
  height: 86,
  boxSizing: "border-box",
  [theme.breakpoints.down("md")]: {
    left: 90,
    width: "calc(100% - 91px)",
  },
}));

const NavRightContainer = styled(Box)(({ theme }) => ({
  width: "calc(100% - 110px)",
  position: "absolute",
  top: 86,
  left: 110,
  height: "calc(100% - 86px)",
  padding: 16,
  boxSizing: "border-box",
  overflow: "auto",
  [theme.breakpoints.down("md")]: {
    left: 90,
    width: "calc(100% - 91px)",
  },
  "&::-webkit-scrollbar": {
    height: 10,
    width: 10,
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "rgb(151 167 195 / 30%)",
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(3),
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette.primary.main,
  },
  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const SearchWrapper = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  borderRadius: 100 + "px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  boxShadow: "inset 0px 0px 20px rgba(151, 167, 195, 0.5)",
  border: 1,
  borderStyle: "solid",
  borderColor: "rgba(151, 167, 195, 0.4)",
}));

const PageContainer = styled(Container)(({ theme }) => ({
  paddingLeft: 0,
  paddingRight: 0,
  "@media (min-width: 600px)": {
    paddingLeft: 0,
    paddingRight: 0,
  },
}));

export {
  NavWrapper,
  NavLeftLogo,
  NavLeftLinks,
  PageContainer,
  SearchWrapper,
  NavTopContainer,
  NavLeftContainer,
  NavRightContainer,
};
