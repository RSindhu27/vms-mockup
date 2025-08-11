import { Box } from "@mui/material";
import { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  CustomTab,
  CustomTabs,
  CustomTabPanel,
} from "../../../Components/Tabs";
import ActivitiesList from "./ActivitiesList";
import NewActivities from "./NewActivities";

function ActivitiesLanding() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box width={100 + "%"}>
        <CustomTabs value={value} onChange={handleChange}>
          <CustomTab label="Activities List" />
          <CustomTab
            icon={<AddCircleIcon />}
            iconPosition="start"
            label="New Activity"
          />
        </CustomTabs>
        <CustomTabPanel value={value} index={0}>
          <ActivitiesList />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <NewActivities />
        </CustomTabPanel>
      </Box>
    </>
  );
}

export default ActivitiesLanding;
