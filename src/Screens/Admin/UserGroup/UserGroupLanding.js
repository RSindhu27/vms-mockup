import { useState } from "react";
import { Box } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  CustomTab,
  CustomTabs,
  CustomTabPanel,
} from "../../../Components/Tabs";
import UserGroupList from "./UserGroupList";
import NewUserGroup from "./NewUserGroup";

function UserGroupLanding() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box width={100 + "%"}>
        <CustomTabs value={value} onChange={handleChange}>
          <CustomTab label="User Group List" />
          <CustomTab
            icon={<AddCircleIcon />}
            iconPosition="start"
            label="New User Group"
          />
        </CustomTabs>
        <CustomTabPanel value={value} index={0}>
          <UserGroupList />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <NewUserGroup />
        </CustomTabPanel>
      </Box>
    </>
  );
}

export default UserGroupLanding;
