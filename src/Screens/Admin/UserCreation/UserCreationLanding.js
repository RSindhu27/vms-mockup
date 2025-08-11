import { useState } from "react";
import { Box } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  CustomTab,
  CustomTabs,
  CustomTabPanel,
} from "../../../Components/Tabs";
import UserList from "./UserList";
import NewUser from "./NewUser";

function UserCreationLanding() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box width={100 + "%"}>
        <CustomTabs value={value} onChange={handleChange}>
          <CustomTab label="User List" />
          <CustomTab
            icon={<AddCircleIcon />}
            iconPosition="start"
            label="Create New User"
          />
        </CustomTabs>
        <CustomTabPanel value={value} index={0}>
          <UserList />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <NewUser />
        </CustomTabPanel>
      </Box>
    </>
  );
}

export default UserCreationLanding;
