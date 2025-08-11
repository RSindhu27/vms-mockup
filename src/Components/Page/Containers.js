import styled from "@emotion/styled";
import { Box, Paper } from "@mui/material";

const CompoWrapper = styled(Paper)(({ theme }) => ({
  borderRadius: 8,
  border: 1,
  borderColor: theme.palette.divider,
  borderStyle: "solid",
  boxShadow: "none",
  padding: theme.spacing(2),
  boxSizing: "border-box",
}));

const TabWrapper = styled(Paper)(({ theme }) => ({
  borderRadius: "0 8px 8px 8px",
  border: 1,
  borderColor: theme.palette.divider,
  borderStyle: "solid",
  boxShadow: "none",
  padding: theme.spacing(2),
  boxSizing: "border-box",
}));

const MessageBoxContainer = styled(Box)(({ theme }) => ({
  paddingRight: theme.spacing(1),
  boxSizing: "border-box",
  overflow: "auto",
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

const PopupContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  boxSizing: "border-box",
  overflow: "auto",
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

const ScrollBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[200],
  border: 1,
  borderColor: theme.palette.divider,
  borderStyle: "solid",
  padding: theme.spacing(1),
  boxSizing: "border-box",
  borderRadius: theme.spacing(1),
  height: 260,
  minHeight: 100 + "%",
  overflow: "auto",
  "&::-webkit-scrollbar": {
    height: 6,
    width: 6,
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "rgb(151 167 195 / 30%)",
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(3),
    borderRadius: 10,
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette.grey[500],
    borderRadius: 10,
  },
  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: theme.palette.grey[700],
  },
}));

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const VisBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[200],
  padding: theme.spacing(1),
  boxSizing: "border-box",
  borderRadius: theme.spacing(1),
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "& p": {
    whiteSpace: "nowrap",
    width: 120,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));

const UploadImageBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  boxSizing: "border-box",
  marginBottom: theme.spacing(1),
  border: 1,
  borderStyle: "solid",
  borderColor: theme.palette.grey[300],
  direction: "row",
  borderRadius: theme.spacing(1),
  cursor: "pointer",
  alignItems: "center",
  display: "inline-flex",
  justifyContent: "center",
  "&:hover": {
    borderColor: theme.palette.primary.main,
  },
}));

const UploadedImageBox = styled(Box)(({ theme }) => ({
  marginRight: theme.spacing(1),
  padding: theme.spacing(1),
  border: 1,
  borderStyle: "solid",
  borderColor: theme.palette.grey[300],
  width: 150,
  display: "block",
  borderRadius: theme.spacing(1),
  boxSizing: "border-box",
}));

const ImageBox = styled(Box)(({ theme }) => ({
  mr: theme.spacing(1),
  width: 50,
  height: 50,
  display: "block",
}));

export {
  VisBox,
  ImageBox,
  ScrollBox,
  TabWrapper,
  CompoWrapper,
  UploadImageBox,
  PopupContainer,
  UploadedImageBox,
  MessageBoxContainer,
  VisuallyHiddenInput,
};
