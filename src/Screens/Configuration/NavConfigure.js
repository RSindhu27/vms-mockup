import { Box, Grid } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import LanIcon from "@mui/icons-material/Lan";
import FolderIcon from "@mui/icons-material/Folder";
import { Outlet } from "react-router-dom";
import PageLinkButton from "../../Components/Page/PageLinkButton";

function NavConfigure() {
  return (
    <>
      <Box mb={2}>
        <Grid container spacing={2}>
          <Grid item>
            <PageLinkButton
              icon={<BusinessIcon />}
              name="List Manager"
              link="/app/configuration/list-manager"
            />
          </Grid>
          <Grid item>
            <PageLinkButton
              icon={<LanIcon />}
              name="System Data Fields Types"
              link="/app/configuration/system-data-fields-types"
            />
          </Grid>
          <Grid item>
            <PageLinkButton
              icon={<BusinessIcon />}
              name="Numbering System"
              link="/app/configuration/numbering-system"
            />
          </Grid>
          <Grid item>
            <PageLinkButton
              icon={<FolderIcon />}
              name="Document Type"
              link="/app/configuration/document-type"
            />
          </Grid>
          <Grid item>
            <PageLinkButton
              icon={<BusinessIcon />}
              name="Life Cycle States"
              link="/app/configuration/life-cycle-states"
            />
          </Grid>
          <Grid item>
            <PageLinkButton
              icon={<BusinessIcon />}
              name="Activities"
              link="/app/configuration/activities"
            />
          </Grid>
          <Grid item>
            <PageLinkButton
              icon={<BusinessIcon />}
              name="Checklist"
              link="/app/configuration/checklist"
            />
          </Grid>
          <Grid item>
            <PageLinkButton
              icon={<BusinessIcon />}
              name="Workflow Type"
              link="/app/configuration/workflow-type"
            />
          </Grid>
          <Grid item>
            <PageLinkButton
              icon={<BusinessIcon />}
              name="Email-Template"
              link="/app/configuration/email-template"
            />
          </Grid>
          <Grid item>
            <PageLinkButton
              icon={<BusinessIcon />}
              name="Category"
              link="/app/configuration/category"
            />
          </Grid>
          <Grid item>
            <PageLinkButton
              icon={<BusinessIcon />}
              name="Form"
              link="/app/configuration/forms"
            />
          </Grid>
          <Grid item>
            <PageLinkButton
              icon={<BusinessIcon />}
              name="Framework"
              link="/app/configuration/framework"
            />
          </Grid>
          <Grid item>
            <PageLinkButton
              icon={<BusinessIcon />}
              name="Decision Tree"
              link="/app/configuration/decision-tree"
            />
          </Grid>
          <Grid item>
            <PageLinkButton
              icon={<BusinessIcon />}
              name="Entity Type"
              link="/app/configuration/entity-type"
            />
          </Grid>
          <Grid item>
            <PageLinkButton
              icon={<BusinessIcon />}
              name="Mapping Keyword"
              link="/app/configuration/mapping-keyword"
            />
          </Grid>
          <Grid item>
            <PageLinkButton
              icon={<BusinessIcon />}
              name="Assessment Template"
              link="/app/configuration/assessment-template"
            />
          </Grid>
          <Grid item>
            <PageLinkButton
              icon={<BusinessIcon />}
              name="Workflow Type New"
              link="/app/configuration/workflow-type-new"
            />
          </Grid>
          <Grid item>
            <PageLinkButton
              icon={<BusinessIcon />}
              name="Entity"
              link="/app/configuration/entity"
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
