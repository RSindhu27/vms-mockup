import { Box, Grid } from "@mui/material";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import { Outlet } from "react-router-dom";
import PageLinkButton from "../../Components/Page/PageLinkButton";

function NavConfigure() {
  return (
    <>
      <Box mb={2}>
        <Grid container spacing={2}>
          <Grid item>
            <PageLinkButton
              icon={<DescriptionOutlinedIcon />}
              name="Reports"
              link="/app/reports/reports"
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
