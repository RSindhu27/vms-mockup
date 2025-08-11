import { Chip, Grid } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import TaskContainer from "./TaskContainer";
import TaskBlock from "./TaskBlock";
import { Link } from "react-router-dom";

function NextUp() {
  return (
    <>
      <TaskContainer header="Next Up" num={2}>
        <Grid container spacing={1}>
          {/* Discrepancy Task */}
          <Grid item xs={12}>
            <TaskBlock type="next_up" header="Discrepancy Task - TSK1346">
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Chip
                    label="View Discrepancy"
                    size="small"
                    color="info"
                    component={Link}
                    to="/app/task-new/my-task/view-discrepancy"
                    sx={{
                      minWidth: 80,
                      borderRadius: 1,
                      px: 0.5,
                      cursor: "pointer",
                    }}
                    icon={<VisibilityIcon fontSize="small" />}
                  />
                </Grid>
              </Grid>
            </TaskBlock>
          </Grid>
          {/* Task 1 */}
          <Grid item xs={12}>
            <TaskBlock type="next_up" header="Authoring Document - TSK0001">
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Chip
                    label="View Task"
                    size="small"
                    color="info"
                    component={Link}
                    to="/app/task-new/my-task/view-task"
                    sx={{
                      minWidth: 80,
                      borderRadius: 1,
                      px: 0.5,
                      cursor: "pointer",
                    }}
                    icon={<VisibilityIcon fontSize="small" />}
                  />
                </Grid>
              </Grid>
            </TaskBlock>
          </Grid>
          {/* Task 2 */}
          <Grid item xs={12}>
            <TaskBlock type="next_up" header="Authoring Document - TSK0002">
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Chip
                    label="View Task"
                    size="small"
                    color="info"
                    component={Link}
                    to="/app/task-new/my-task/view-task"
                    sx={{
                      minWidth: 80,
                      borderRadius: 1,
                      px: 0.5,
                      cursor: "pointer",
                    }}
                    icon={<VisibilityIcon fontSize="small" />}
                  />
                </Grid>
              </Grid>
            </TaskBlock>
          </Grid>
          {/* Task 3 */}
          <Grid item xs={12}>
            <TaskBlock type="next_up" header="Execute Document-TSK0001">
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Chip
                    label="View Task"
                    size="small"
                    color="info"
                    component={Link}
                    to="/app/task-new/my-task/view-execution"
                    sx={{
                      minWidth: 80,
                      borderRadius: 1,
                      px: 0.5,
                      cursor: "pointer",
                    }}
                    icon={<VisibilityIcon fontSize="small" />}
                  />
                </Grid>
              </Grid>
            </TaskBlock>
          </Grid>
          {/* Task 4 */}
          <Grid item xs={12}>
            <TaskBlock type="next_up" header="Review Execution-TSK0001">
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Chip
                    label="View Task"
                    size="small"
                    color="info"
                    component={Link}
                    to="/app/task-new/my-task/view-execution"
                    sx={{
                      minWidth: 80,
                      borderRadius: 1,
                      px: 0.5,
                      cursor: "pointer",
                    }}
                    icon={<VisibilityIcon fontSize="small" />}
                  />
                </Grid>
              </Grid>
            </TaskBlock>
          </Grid>
        </Grid>
      </TaskContainer>
    </>
  );
}

export default NextUp;
