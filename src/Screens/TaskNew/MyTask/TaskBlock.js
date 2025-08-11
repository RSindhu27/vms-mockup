import { Box, Grid, Typography } from "@mui/material";

const handleColor = (e) => {
  if (e === "next_up") return "error.light";
  if (e === "inprogress") return "warning.light";
  if (e === "completed") return "success.light";
  else return "success.light";
};

function TaskBlock({ type, header, children }) {
  return (
    <>
      <Box
        sx={{
          p: 1,
          boxSizing: "border-box",
          border: 1,
          borderColor: handleColor(type),
          borderRadius: 1,
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography>
              <b>{header}</b>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            {children}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default TaskBlock;
