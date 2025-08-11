import { useState } from "react";
import { Box } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  CustomTab,
  CustomTabs,
  CustomTabPanel,
} from "../../../Components/Tabs";
import DocumentTypeList from "./DocumentTypeList";
import NewDocumentType from "./NewDocumentType";

function DocumentTypeLanding() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box width={100 + "%"}>
        <CustomTabs value={value} onChange={handleChange}>
          <CustomTab label="Document Type List" />
          <CustomTab
            icon={<AddCircleIcon />}
            iconPosition="start"
            label="New Document Type"
          />
        </CustomTabs>
        <CustomTabPanel value={value} index={0}>
          <DocumentTypeList />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <NewDocumentType />
        </CustomTabPanel>
      </Box>
    </>
  );
}

export default DocumentTypeLanding;
