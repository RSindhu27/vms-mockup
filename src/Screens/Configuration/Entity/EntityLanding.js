import { Box } from "@mui/material";
import { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  CustomTab,
  CustomTabs,
  CustomTabPanel,
} from "../../../Components/Tabs";
import EntityList from "./EntityList";
import NewEntity from "./NewEntity";

function EntityLanding() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box width={100 + "%"}>
        <CustomTabs value={value} onChange={handleChange}>
          <CustomTab label="Entity List" />
          <CustomTab
            icon={<AddCircleIcon />}
            iconPosition="start"
            label="New Entity"
          />
        </CustomTabs>
        <CustomTabPanel value={value} index={0}>
          <EntityList />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <NewEntity />
        </CustomTabPanel>
      </Box>
    </>
  );
}

export default EntityLanding;
