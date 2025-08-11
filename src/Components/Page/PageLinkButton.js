import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useTheme } from "@emotion/react";

function PageLinkButton({ link, icon, name }) {
  const theme = useTheme();
  return (
    <>
      <Box
        component={NavLink}
        to={link}
        sx={{
          display: "flex",
          flexDirection: "row",
          px: 2,
          py: 1,
          textTransform: "capitalize",
          borderRadius: 2,
          justifyContent: "flex-start",
          alignItems: "center",
          textDecoration: "none",
        }}
        style={({ isActive }) =>
          isActive
            ? {
                color: theme.palette.text.primary,
                background: "#ffffff",
                boxShadow: "4px 4px 16px rgba(151, 167, 195, 0.4)",
              }
            : { color: theme.palette.text.secondary, background: "#EFEFF6" }
        }
      >
        <Box sx={{ mr: 1 }}>{icon}</Box>
        <Typography variant="body2" sx={{}}>
          {name}
        </Typography>
      </Box>
    </>
  );
}

export default PageLinkButton;
