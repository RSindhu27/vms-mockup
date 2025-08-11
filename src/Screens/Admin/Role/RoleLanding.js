import { useState } from "react";
import { Box } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  CustomTab,
  CustomTabs,
  CustomTabPanel,
} from "../../../Components/Tabs";
import RoleList from "./RoleList";
import NewRole from "./NewRole";

function RoleLanding() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box width={100 + "%"}>
        <CustomTabs value={value} onChange={handleChange}>
          <CustomTab label="Role List" />
          <CustomTab
            icon={<AddCircleIcon />}
            iconPosition="start"
            label="New Role"
          />
        </CustomTabs>
        <CustomTabPanel value={value} index={0}>
          <RoleList />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <NewRole />
        </CustomTabPanel>
      </Box>
    </>
  );
}

export default RoleLanding;
