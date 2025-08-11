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
              name="Hardcopy Management"
              link="/app/print/hardcopy-management"
            />
          </Grid>
          <Grid item>
            <PageLinkButton
              icon={<BusinessIcon />}
              name="Print Templates"
              link="/app/print/print-template"
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
