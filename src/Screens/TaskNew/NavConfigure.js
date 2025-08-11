import { Outlet } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import TaskIcon from "@mui/icons-material/Task";
import PageLinkButton from "../../Components/Page/PageLinkButton";

function NavConfigure() {
  return (
    <>
      <Box mb={2}>
        <Grid container spacing={2}>
          <Grid item>
            <PageLinkButton
              icon={<TaskIcon />}
              name="My Task"
              link="/app/task-new/my-task"
            />
          </Grid>
          <Grid item>
            <PageLinkButton
              icon={<TaskIcon />}
              name="Assign Task"
              link="/app/task-new/assign-task"
            />
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Outlet />
      </Box>
    </>
  );
}

export default NavConfigure;
