import { Box } from "@mui/material";
import { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  CustomTab,
  CustomTabs,
  CustomTabPanel,
} from "../../../Components/Tabs";
import MappingKeywordList from "./MappingKeywordList";
import NewMappingKeyword from "./NewMappingKeyword";

function MappingKeywordLanding() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box width={100 + "%"}>
        <CustomTabs value={value} onChange={handleChange}>
          <CustomTab label="Mapping Keyword List" />
          <CustomTab
            icon={<AddCircleIcon />}
            iconPosition="start"
            label="New Mapping Keyword"
          />
        </CustomTabs>
        <CustomTabPanel value={value} index={0}>
          <MappingKeywordList />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <NewMappingKeyword />
        </CustomTabPanel>
      </Box>
    </>
  );
}

export default MappingKeywordLanding;
