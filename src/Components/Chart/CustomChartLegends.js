import { Box, Stack, Typography } from "@mui/material";

function CustomChartLegends({ bgcolor, name, value }) {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Box>
        <Box
          sx={{
            borderRadius: 1,
            width: 5,
            height: 30,
            bgcolor: bgcolor,
          }}
        />
      </Box>
      <Typography variant="caption" color="text.secondary">
        {name}
        <br />
        <b>{value}</b>
      </Typography>
    </Stack>
  );
}

export default CustomChartLegends;
