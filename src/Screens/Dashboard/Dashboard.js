import { Grid, Typography } from "@mui/material";
import OverallTaskStatus from "./OverallTaskStatus";
import CompletedTaskStatus from "./CompletedTaskStatus";
import TaskTypes from "./TaskTypes";
import TaskTables from "./TaskTables";

function Dashboard() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5" component="p">
            <b>Dashboard</b>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <OverallTaskStatus />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <CompletedTaskStatus />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <TaskTypes />
        </Grid>
        <Grid item xs={12}>
          <TaskTables />
        </Grid>
      </Grid>
    </>
  );
}

export default Dashboard;
