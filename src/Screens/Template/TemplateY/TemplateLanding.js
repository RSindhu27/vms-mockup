import { Box } from "@mui/material";
import { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  CustomTab,
  CustomTabs,
  CustomTabPanel,
} from "../../../Components/Tabs";
import TemplateList from "./TemplateList";
import NewTemplate from "./NewTemplate";

function TemplateLanding() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box width={100 + "%"}>
        <CustomTabs value={value} onChange={handleChange}>
          <CustomTab label="Template List - (165)" />
          <CustomTab
            icon={<AddCircleIcon />}
            iconPosition="start"
            label="Create New Template"
          />
        </CustomTabs>
        <CustomTabPanel value={value} index={0}>
          <TemplateList />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <NewTemplate />
        </CustomTabPanel>
      </Box>
    </>
  );
}

export default TemplateLanding;
