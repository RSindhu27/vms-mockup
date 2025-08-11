import { Box } from "@mui/material";
import { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  CustomTab,
  CustomTabs,
  CustomTabPanel,
} from "../../../Components/Tabs";
import WorkflowTypeList from "./WorkflowTypeList";
import NewWorkflowType from "./NewWorkflowType";

function WorkflowTypeLanding() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box width={100 + "%"}>
        <CustomTabs value={value} onChange={handleChange}>
          <CustomTab label="Workflow List" />
          <CustomTab
            icon={<AddCircleIcon />}
            iconPosition="start"
            label="New Workflow"
          />
        </CustomTabs>
        <CustomTabPanel value={value} index={0}>
          <WorkflowTypeList />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <NewWorkflowType />
        </CustomTabPanel>
      </Box>
    </>
  );
}

export default WorkflowTypeLanding;
