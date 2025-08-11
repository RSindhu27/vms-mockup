import { Box } from "@mui/material";
import { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  CustomTab,
  CustomTabs,
  CustomTabPanel,
} from "../../../Components/Tabs";
import LifeCycleStatesList from "./LifeCycleStatesList";
import NewLifeCycleStates from "./NewLifeCycleStates";

function LifeCycleStatesLanding() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box width={100 + "%"}>
        <CustomTabs value={value} onChange={handleChange}>
          <CustomTab label="Life Cycle States List" />
          <CustomTab
            icon={<AddCircleIcon />}
            iconPosition="start"
            label="New Life Cycle States"
          />
        </CustomTabs>
        <CustomTabPanel value={value} index={0}>
          <LifeCycleStatesList />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <NewLifeCycleStates />
        </CustomTabPanel>
      </Box>
    </>
  );
}

export default LifeCycleStatesLanding;
