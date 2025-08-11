import { Box, Grid } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import { Outlet } from "react-router-dom";
import PageLinkButton from "../../Components/Page/PageLinkButton";

function NavConfigure() {
  return (
    <>
      <Box mb={2}>
        <Grid container spacing={2}>
          <Grid item>
            <PageLinkButton
              icon={<LinkIcon />}
              name="Print Package Manager"
              link="/app/print-manager/print-manager"
            />
          </Grid>
          <Grid item>
            <PageLinkButton
              icon={<LinkIcon />}
              name="Print Event Manager"
              link="/app/print-manager/print-event"
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
