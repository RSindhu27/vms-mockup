import { Box } from "@mui/material";
import { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  CustomTab,
  CustomTabs,
  CustomTabPanel,
} from "../../../Components/Tabs";
import EntityTypeList from "./EntityTypeList";
import NewEntityType from "./NewEntityType";

function EntityTypeLanding() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box width={100 + "%"}>
        <CustomTabs value={value} onChange={handleChange}>
          <CustomTab label="Entity Type List" />
          <CustomTab
            icon={<AddCircleIcon />}
            iconPosition="start"
            label="New Entity Type"
          />
        </CustomTabs>
        <CustomTabPanel value={value} index={0}>
          <EntityTypeList />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <NewEntityType />
        </CustomTabPanel>
      </Box>
    </>
  );
}

export default EntityTypeLanding;
