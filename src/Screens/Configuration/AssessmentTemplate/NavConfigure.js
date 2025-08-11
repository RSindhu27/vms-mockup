import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

function NavConfigure() {
  return (
    <Box>
      <Outlet />
    </Box>
  );
}

export default NavConfigure;
