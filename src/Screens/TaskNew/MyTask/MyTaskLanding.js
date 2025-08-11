import { Grid } from "@mui/material";
import NextUp from "./NextUp";
import InProgress from "./InProgress";
import Completed from "./Completed";

function MyTaskLanding() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item md={12} lg={4}>
          <NextUp />
        </Grid>
        <Grid item md={12} lg={4}>
          <InProgress />
        </Grid>
        <Grid item md={12} lg={4}>
          <Completed />
        </Grid>
      </Grid>
    </>
  );
}

export default MyTaskLanding;
