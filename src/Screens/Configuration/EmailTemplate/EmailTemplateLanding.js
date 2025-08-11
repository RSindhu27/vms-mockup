import { Box } from "@mui/material";
import { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  CustomTab,
  CustomTabs,
  CustomTabPanel,
} from "../../../Components/Tabs";
import EmailTemplateList from "./EmailTemplateList";
import NewEmailTemplate from "./NewEmailTemplate";

function EmailTemplateLanding() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box width={100 + "%"}>
        <CustomTabs value={value} onChange={handleChange}>
          <CustomTab label="Email Template List" />
          <CustomTab
            icon={<AddCircleIcon />}
            iconPosition="start"
            label="New Email Template"
          />
        </CustomTabs>
        <CustomTabPanel value={value} index={0}>
          <EmailTemplateList />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <NewEmailTemplate />
        </CustomTabPanel>
      </Box>
    </>
  );
}

export default EmailTemplateLanding;
