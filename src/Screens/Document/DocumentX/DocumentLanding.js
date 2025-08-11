import { useState } from "react";
import { Box } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  CustomTab,
  CustomTabs,
  CustomTabPanel,
} from "../../../Components/Tabs";
import DocumentList from "./DocumentList";
import NewDocument from "./NewDocument";

function DocumentLanding() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box width={100 + "%"}>
        <CustomTabs value={value} onChange={handleChange}>
          <CustomTab label="Document List" />
          <CustomTab
            icon={<AddCircleIcon />}
            iconPosition="start"
            label="New Document List"
          />
        </CustomTabs>
        <CustomTabPanel value={value} index={0}>
          <DocumentList />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <NewDocument />
        </CustomTabPanel>
      </Box>
    </>
  );
}

export default DocumentLanding;
