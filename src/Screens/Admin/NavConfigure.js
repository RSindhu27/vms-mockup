import { Box, Grid } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import { Outlet } from "react-router-dom";
import PageLinkButton from "../../Components/Page/PageLinkButton";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";

function NevConfigure() {
  return (
    <>
      <Box mb={2}>
        <Grid container spacing={2}>
          <Grid item>
            <PageLinkButton
              icon={<BusinessIcon />}
              name="Business Unit Theme"
              link="/app/admin/business-unit-theme"
            />
          </Grid>
          <Grid item>
            <PageLinkButton
              icon={<BusinessIcon />}
              name="Role"
              link="/app/admin/role"
            />
          </Grid>
          <Grid item>
            <PageLinkButton
              icon={<PersonIcon />}
              name="User Creation"
              link="/app/admin/user-creation"
            />
          </Grid>
          <Grid item>
            <PageLinkButton
              icon={<GroupIcon />}
              name="User Group"
              link="/app/admin/user-group"
            />
          </Grid>
          <Grid item>
            <PageLinkButton
              icon={<GroupIcon />}
              name="User Logout/Release"
              link="/app/admin/user-logout-release"
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

export default NevConfigure;
