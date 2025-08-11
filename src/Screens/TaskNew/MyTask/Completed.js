import { Chip, Grid, Stack, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import TaskContainer from "./TaskContainer";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import TaskBlock from "./TaskBlock";
import { Link } from "react-router-dom";

function TaskDetails({ type, time, assignedBy, assignedOn, action }) {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs>
          <Stack spacing={1} direction="row">
            <Chip
              label={type}
              sx={{
                bgcolor: "rgba(108, 162, 255, 0.2)",
                color: "info.main",
                minWidth: 80,
                borderRadius: 1,
                px: 0.5,
              }}
              size="small"
              icon={<StickyNote2Icon fontSize="small" color="info" />}
            />
            <Chip
              label={time}
              sx={{
                bgcolor: "rgba(254, 216, 17, 0.2)",
                color: "warning.main",
                minWidth: 80,
                borderRadius: 1,
                px: 0.5,
              }}
              size="small"
              icon={<HourglassBottomIcon fontSize="small" color="warning" />}
            />
          </Stack>
        </Grid>
        <Grid item>
          <Chip
            label="View Details"
            size="small"
            color="info"
            variant="outlined"
            component={Link}
            to="/app/task-new/my-task/view-task"
            sx={{ minWidth: 80, borderRadius: 1, px: 0.5, cursor: "pointer" }}
            icon={<VisibilityIcon fontSize="small" />}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2">
            <b>Assigned by:</b> {assignedBy}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2">
            <b>Assigned On:</b> {assignedOn}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

function Completed() {
  return (
    <>
      <TaskContainer header="Completed" num={5}>
        <Grid container spacing={1}>
          {/* Task 1 */}
          <Grid item xs={12}>
            <TaskBlock type="completed" header="Authoring Document-TSK2233">
              <TaskDetails
                type="Template"
                time="24/05/2022"
                assignedBy="Gayathrilakshmi@arcolab.com"
                assignedOn="24/03/2022"
              />
            </TaskBlock>
          </Grid>
          {/* Task 2 */}
          <Grid item xs={12}>
            <TaskBlock type="completed" header="Authoring Document-TSK03401">
              <TaskDetails
                type="Workflow"
                time="24/05/2022"
                assignedBy="Gayathrilakshmi@arcolab.com"
                assignedOn="24/03/2022"
              />
            </TaskBlock>
          </Grid>
          {/* Task 3 */}
          <Grid item xs={12}>
            <TaskBlock type="completed" header="Authoring Document-TSK2501">
              <TaskDetails
                type="Template"
                time="24/05/2022"
                assignedBy="Gayathrilakshmi@arcolab.com"
                assignedOn="24/03/2022"
              />
            </TaskBlock>
          </Grid>
          {/* Task 4 */}
          <Grid item xs={12}>
            <TaskBlock type="completed" header="Authoring Document-TSK03401">
              <TaskDetails
                type="Workflow"
                time="24/05/2022"
                assignedBy="Gayathrilakshmi@arcolab.com"
                assignedOn="24/03/2022"
              />
            </TaskBlock>
          </Grid>
          {/* Task 5 */}
          <Grid item xs={12}>
            <TaskBlock type="completed" header="Authoring Document-TSK06543">
              <TaskDetails
                type="Template"
                time="24/05/2022"
                assignedBy="Gayathrilakshmi@arcolab.com"
                assignedOn="24/03/2022"
              />
            </TaskBlock>
          </Grid>
          {/* Task 6 */}
          <Grid item xs={12}>
            <TaskBlock type="completed" header="Authoring Document-TSK08765">
              <TaskDetails
                type="Template"
                time="24/05/2022"
                assignedBy="Gayathrilakshmi@arcolab.com"
                assignedOn="24/03/2022"
              />
            </TaskBlock>
          </Grid>
        </Grid>
      </TaskContainer>
    </>
  );
}

export default Completed;
