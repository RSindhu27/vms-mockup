import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Logo_Arcolab, Logo_Arcolab_Small } from "./../../Components/Images";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SettingsApplicationsOutlinedIcon from "@mui/icons-material/SettingsApplicationsOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import WebOutlinedIcon from "@mui/icons-material/WebOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import SnippetFolderOutlinedIcon from "@mui/icons-material/SnippetFolderOutlined";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import LinkIcon from "@mui/icons-material/Link";
import TaskIcon from "@mui/icons-material/Task";
import {
  NavLinkButton,
  NavWrapper,
  NavLeftContainer,
  NavLeftLogo,
  NavLeftLinks,
  NavTopContainer,
  NavRightContainer,
  PageContainer,
} from "../../Components/Navigation";
import UserProfile from "./UserProfile";
import Search from "./Search";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@emotion/react";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import BusinessUnit from "./BusinessUnit";
import SensorOccupiedIcon from "@mui/icons-material/SensorOccupied";

function Navigation() {
  const theme = useTheme();
  const media_md = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <NavWrapper>
      <NavLeftContainer>
        <NavLeftLogo>
          {media_md ? (
            <Box
              component="img"
              src={Logo_Arcolab}
              width={100}
              display="block"
              mx="auto"
            />
          ) : (
            <Box
              component="img"
              src={Logo_Arcolab_Small}
              width={45}
              display="block"
              mx="auto"
            />
          )}
        </NavLeftLogo>
        <NavLeftLinks>
          <NavLinkButton
            icon={<DashboardOutlinedIcon fontSize="medium" />}
            name="Dashboard"
            link="/app/dashboard"
          />
          <NavLinkButton
            icon={<PersonOutlineOutlinedIcon fontSize="medium" />}
            name="Admin"
            link="/app/admin"
          />
          <NavLinkButton
            icon={<SettingsApplicationsOutlinedIcon fontSize="medium" />}
            name="Config"
            link="/app/configuration"
          />
          <NavLinkButton
            icon={<SettingsSuggestIcon fontSize="medium" />}
            name="System"
            link="/app/system"
          />
          <NavLinkButton
            icon={<AccountTreeOutlinedIcon fontSize="medium" />}
            name="Workflow"
            link="/app/workflow"
          />
          <NavLinkButton
            icon={<SnippetFolderOutlinedIcon fontSize="medium" />}
            name="Repository"
            link="/app/repository"
          />
          <NavLinkButton
            icon={<WebOutlinedIcon fontSize="medium" />}
            name="Template"
            link="/app/template"
          />
          <NavLinkButton
            icon={<FolderOutlinedIcon fontSize="medium" />}
            name="Document"
            link="/app/document"
          />
          <NavLinkButton
            icon={<DescriptionOutlinedIcon fontSize="medium" />}
            name="Reports"
            link="/app/reports"
          />
          <NavLinkButton
            icon={<LinkIcon fontSize="medium" />}
            name="Binding"
            link="/app/binding"
          />
          <NavLinkButton
            icon={<PrintOutlinedIcon fontSize="medium" />}
            name="Print"
            link="/app/print"
          />
          <NavLinkButton
            icon={<PrintOutlinedIcon fontSize="medium" />}
            name="Print Manager"
            link="/app/print-manager"
          />
          <NavLinkButton
            icon={<LinkIcon fontSize="medium" />}
            name="Traceability Matrix"
            link="/app/trace-matrix"
          />
          <NavLinkButton
            icon={<PrintOutlinedIcon fontSize="medium" />}
            name="Virtual Room"
            link="/app/virtual-data-room"
          />
          <NavLinkButton
            icon={<TaskIcon fontSize="medium" />}
            name="Task"
            link="/app/task"
          />
          <NavLinkButton
            icon={<TaskIcon fontSize="medium" />}
            name="Task(New)"
            link="/app/task-new"
          />
          <NavLinkButton
            icon={<SensorOccupiedIcon fontSize="medium" />}
            name="Execution"
            link="/app/execution"
          />
        </NavLeftLinks>
      </NavLeftContainer>
      <NavTopContainer>
        <PageContainer>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Typography variant="h4" component="h1" fontWeight="700">
                DMS
              </Typography>
            </Grid>
            <Grid item xs>
              <Search />
            </Grid>
            <Grid item>
              <BusinessUnit />
            </Grid>
            <Grid item>
              <UserProfile />
            </Grid>
          </Grid>
        </PageContainer>
      </NavTopContainer>
      <NavRightContainer>
        <PageContainer>
          <Outlet />
        </PageContainer>
      </NavRightContainer>
    </NavWrapper>
  );
}

export default Navigation;
