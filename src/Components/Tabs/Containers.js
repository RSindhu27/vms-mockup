import { Box, Tab, Tabs } from "@mui/material";
import styled from "@emotion/styled";

const CustomTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.typography.pxToRem(16),
    color: theme.palette.text.secondary,
    paddingTop: 0,
    paddingBottom: 0,
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    minHeight: 48,
    "&.Mui-selected": {
      color: theme.palette.primary.main,
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  })
);

const CustomTabs = styled((props) => <Tabs {...props} />)(({ theme }) => ({
  "& .MuiTabs-flexContainer": {
    width: "max-content",
    backgroundColor: theme.palette.background.paper,
    border: 1,
    borderStyle: "solid",
    marginBottom: -1,
    borderColor: theme.palette.divider,
    borderRadius: theme.spacing(1) + " " + theme.spacing(1) + " " + 0 + " " + 0,
  },
}));

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </Box>
  );
}

const CustomTabsRight = styled(Box)(({ theme }) => ({
  position: "absolute",
  right: 0,
  top: 0,
  zIndex: 99,
  [theme.breakpoints.down("md")]: {
    position: "relative",
    marginBottom: theme.spacing(2),
  },
}));

export { CustomTab, CustomTabs, CustomTabPanel, CustomTabsRight };
