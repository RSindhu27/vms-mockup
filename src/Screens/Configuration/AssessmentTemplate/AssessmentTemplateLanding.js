import { Box } from "@mui/material";
import { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  CustomTab,
  CustomTabs,
  CustomTabPanel,
} from "../../../Components/Tabs";
import AssessmentTemplateList from "./AssessmentTemplateList";
import NewAssessmentTemplate from "./NewAssessmentTemplate";

function AssessmentTemplateLanding() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box width={100 + "%"}>
        <CustomTabs value={value} onChange={handleChange}>
          <CustomTab label="Assessment Template List" />
          <CustomTab
            icon={<AddCircleIcon />}
            iconPosition="start"
            label="New Assessment Template"
          />
        </CustomTabs>
        <CustomTabPanel value={value} index={0}>
          <AssessmentTemplateList />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <NewAssessmentTemplate />
        </CustomTabPanel>
      </Box>
    </>
  );
}

export default AssessmentTemplateLanding;
