import { useState } from "react";
import { Box } from "@mui/material";
// import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  CustomTab,
  CustomTabs,
  CustomTabPanel,
} from "../../../Components/Tabs";
import WorkflowList from "./WorkflowList";
// import NewWorkflow from "./NewWorkflow";

function WorkflowLanding() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box width={100 + "%"}>
        <CustomTabs value={value} onChange={handleChange}>
          <CustomTab label="Workflow" />
          {/* <CustomTab
            icon={<AddCircleIcon />}
            iconPosition="start"
            label="New Workflow"
          /> */}
        </CustomTabs>
        <CustomTabPanel value={value} index={0}>
          <WorkflowList />
        </CustomTabPanel>
        {/* <CustomTabPanel value={value} index={1}>
          <NewWorkflow />
        </CustomTabPanel> */}
      </Box>
    </>
  );
}

export default WorkflowLanding;
