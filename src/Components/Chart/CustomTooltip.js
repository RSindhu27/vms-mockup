import React from "react";
import { Box, Typography } from "@mui/material";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <Box
        sx={{
          p: 1,
          bgcolor: "secondary.main",
          border: 2,
          borderColor: "secondary.dark",

          color: "primary.contrastText",
          borderRadius: 2,
        }}
      >
        <Typography variant="caption">{`${payload[0].name} : ${payload[0].value}`}</Typography>
      </Box>
    );
  }
  return null;
};

export default CustomTooltip;
