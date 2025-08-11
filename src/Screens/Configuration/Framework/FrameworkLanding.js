import { Box } from "@mui/material";
import { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  CustomTab,
  CustomTabs,
  CustomTabPanel,
} from "../../../Components/Tabs";
import FrameworkList from "./FrameworkList";
import NewFramework from "./NewFramework";

function FrameworkLanding() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box width={100 + "%"}>
        <CustomTabs value={value} onChange={handleChange}>
          <CustomTab label="Framework List" />
          <CustomTab
            icon={<AddCircleIcon />}
            iconPosition="start"
            label="New Framework"
          />
        </CustomTabs>
        <CustomTabPanel value={value} index={0}>
          <FrameworkList />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <NewFramework />
        </CustomTabPanel>
      </Box>
    </>
  );
}

export default FrameworkLanding;
