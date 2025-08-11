import { Box } from "@mui/material";
import { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  CustomTab,
  CustomTabs,
  CustomTabPanel,
} from "../../../Components/Tabs";
import DecisionTreeList from "./DecisionTreeList";
import NewDecisionTree from "./NewDecisionTree";

function DecisionTreeLanding() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box width={100 + "%"}>
        <CustomTabs value={value} onChange={handleChange}>
          <CustomTab label="Decision Tree List" />
          <CustomTab
            icon={<AddCircleIcon />}
            iconPosition="start"
            label="New Decision Tree"
          />
        </CustomTabs>
        <CustomTabPanel value={value} index={0}>
          <DecisionTreeList />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <NewDecisionTree />
        </CustomTabPanel>
      </Box>
    </>
  );
}

export default DecisionTreeLanding;
