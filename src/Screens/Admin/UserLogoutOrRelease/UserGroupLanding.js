import { useState } from "react";
import { Box } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  CustomTab,
  CustomTabs,
  CustomTabPanel,
} from "../../../Components/Tabs";
import LoggedUser from "./LoggedUsers";
import BlockedUsers from "./BlockedUsers";

function UserGroupLanding() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box width={100 + "%"}>
        <CustomTabs value={value} onChange={handleChange}>
          <CustomTab label="Logged Users" />
          <CustomTab label="Blocked Users" />
        </CustomTabs>
        <CustomTabPanel value={value} index={0}>
          <LoggedUser />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <BlockedUsers />
        </CustomTabPanel>
      </Box>
    </>
  );
}

export default UserGroupLanding;
