import { Box, Chip, Divider, Stack, Typography } from "@mui/material";

function TaskContainer({ header, num, children }) {
  return (
    <>
      <Box
        sx={{
          bgcolor: "background.paper",
          border: 1,
          borderColor: "divider",
          borderRadius: 2,
          width: 100 + "%",
        }}
      >
        <Box
          sx={{
            p: 1,
            boxSizing: "border-box",
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={2}
          >
            <Box>
              <Typography variant="h6">{header}</Typography>
            </Box>
            <Box>
              <Chip
                label={num}
                size="small"
                sx={{ minWidth: 40, bgcolor: "info.dark", color: "white" }}
              />
            </Box>
          </Stack>
        </Box>
        <Divider />
        <Box
          sx={{
            p: 1,
            boxSizing: "border-box",
            maxHeight: 600,
            overflow: "auto",
            "&::-webkit-scrollbar": {
              height: 10,
              width: 10,
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "rgb(151 167 195 / 30%)",
              marginBottom: 3,
              marginTop: 3,
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "primary.main",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "primary.dark",
            },
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
}

export default TaskContainer;
