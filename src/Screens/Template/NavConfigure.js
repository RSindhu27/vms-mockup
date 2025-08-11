import { Box, Grid } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import { Outlet } from "react-router-dom";
import PageLinkButton from "../../Components/Page/PageLinkButton";

function NevConfigure() {
  return (
    <>
      <Box mb={2}>
        <Grid container spacing={2}>
          <Grid item>
            <PageLinkButton
              icon={<BusinessIcon />}
              name="Templates"
              link="/app/template/template"
            />
          </Grid>
          <Grid item>
            <PageLinkButton
              icon={<BusinessIcon />}
              name="Templates "
              link="/app/template/template-two"
            />
          </Grid>
          <Grid item>
            <PageLinkButton
              icon={<BusinessIcon />}
              name="Template Group"
              link="/app/template/template-group"
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
