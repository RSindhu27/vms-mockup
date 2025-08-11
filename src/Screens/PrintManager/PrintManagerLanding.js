import { useState } from "react";
import { Box } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { CustomTab, CustomTabs, CustomTabPanel } from "../../Components/Tabs";
import PrintPackageManagerList from "./PrintPackageManager/PrintPackageManagerList";
import AutoCreationRules from "./AutoCreationRules/AutoCreationRules";
import AutoAssociationRules from "./AutoAssociationRules/AutoAssociationRules";

function PrintManagerLanding() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box width={100 + "%"}>
        <CustomTabs value={value} onChange={handleChange}>
          {/* <CustomTab label="Bound List- (65)" /> */}
          <CustomTab label="Print Package List" />
          <CustomTab
            icon={<AddCircleIcon />}
            iconPosition="start"
            label="Auto Creation Rules"
          />
          <CustomTab
            icon={<AddCircleIcon />}
            iconPosition="start"
            label="Auto Association Rules"
          />
        </CustomTabs>
        <CustomTabPanel value={value} index={0}>
          <PrintPackageManagerList />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <AutoCreationRules />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <AutoAssociationRules />
        </CustomTabPanel>
      </Box>
    </>
  );
}

export default PrintManagerLanding;
