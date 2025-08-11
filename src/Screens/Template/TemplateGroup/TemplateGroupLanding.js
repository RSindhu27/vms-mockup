import { Box } from "@mui/material";
import { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  CustomTab,
  CustomTabs,
  CustomTabPanel,
} from "../../../Components/Tabs";
import TemplateGroupList from "./TemplateGroupList";
import NewTemplateGroup from "./NewTemplateGroup";

function TemplateGroupLanding() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box width={100 + "%"}>
        <CustomTabs value={value} onChange={handleChange}>
          <CustomTab label="Template Group List" />
          <CustomTab
            icon={<AddCircleIcon />}
            iconPosition="start"
            label="Create New Template Group"
          />
        </CustomTabs>
        <CustomTabPanel value={value} index={0}>
          <TemplateGroupList />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <NewTemplateGroup />
        </CustomTabPanel>
      </Box>
    </>
  );
}

export default TemplateGroupLanding;
