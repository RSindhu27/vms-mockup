import { useState } from "react";
import { Box } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { CustomTab, CustomTabs, CustomTabPanel } from "../../Components/Tabs";
import VirtualDataRoomList from "./VirtualDataRoomList";
import NewDataRoom from "./NewDataRoom/NewDataRoom";

function VirtualDataRoomLanding() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box width={100 + "%"}>
        <CustomTabs value={value} onChange={handleChange}>
          {/* <CustomTab label="Bound List- (65)" /> */}
          <CustomTab label="Virtual Data Room List" />
          <CustomTab
            icon={<AddCircleIcon />}
            iconPosition="start"
            label="New Virtual Data Room"
          />
        </CustomTabs>
        <CustomTabPanel value={value} index={0}>
          <VirtualDataRoomList />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <NewDataRoom />
        </CustomTabPanel>
      </Box>
    </>
  );
}

export default VirtualDataRoomLanding;
