import styled from "@emotion/styled";
import { IconButton } from "@mui/material";

const PageIconPrimaryButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
  },
}));

const PageIconSecondaryButtonBox = styled(IconButton)(({ theme }) => ({
  padding: theme.spacing(1),
  border: 1,
  borderStyle: "solid",
  borderColor: theme.palette.grey[400],
  borderRadius: theme.spacing(1),
  textAlign: "center",
  width: 80,
  height: 80,
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

export { PageIconPrimaryButton, PageIconSecondaryButtonBox };
