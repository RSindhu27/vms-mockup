import styled from "@emotion/styled";
import { Button } from "@mui/material";

const PageButton = styled(Button)(({ theme }) => ({
  boxShadow: "4px 4px 16px rgba(151, 167, 195, 0.4)",
  padding: "12px 24px",
  borderRadius: theme.spacing(1),
}));

const PageCircleButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.2),
  minWidth: 120,
  borderRadius: theme.spacing(6),
  width: 100 + "%",
}));

const PageGradientButton = styled(Button)(({ theme }) => ({
  background:
    "linear-gradient(45deg, rgb(7, 152, 101) 30%, rgb(227, 226, 48) 90%)",
}));

export { PageButton, PageCircleButton, PageGradientButton };
