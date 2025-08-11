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
              name="Bind"
              link="/app/binding/binding"
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
