import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useTheme } from "@emotion/react";

function NavLinkButton({ link, icon, name }) {
  const theme = useTheme();
  return (
    <>
      <Box
        component={NavLink}
        to={link}
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textDecoration: "none",
          width: 65,
          height: 65,
          p: 1,
          flex: "none",
          color: "text.secondary",
          borderRadius: 2,
          boxSizing: "border-box",
          mb: 1.5,
          [theme.breakpoints.down("md")]: {
            width: 60,
            height: 60,
          },
          "&:hover": {
            bgcolor: "#eeeeee",
          },
        }}
        style={({ isActive }) =>
          isActive
            ? {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.common.white,
                boxShadow: "0px 12px 21px #98C11D69",
              }
            : { backgroundColor: "#ffffff" }
        }
      >
        {icon}
        <Typography
          variant="body2"
          sx={{
            mt: 0.5,
            fontSize: 0.7 + "rem",
            [theme.breakpoints.down("md")]: {
              display: "none",
            },
          }}
        >
          {name}
        </Typography>
      </Box>
    </>
  );
}

export default NavLinkButton;
