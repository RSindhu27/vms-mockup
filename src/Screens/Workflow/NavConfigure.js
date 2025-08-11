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
              name="Workflow"
              link="/app/workflow/workflow"
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
