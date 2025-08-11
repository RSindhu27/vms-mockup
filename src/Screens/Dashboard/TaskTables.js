import { useState } from "react";
import { Badge, Box } from "@mui/material";
import { CustomTab, CustomTabs, CustomTabPanel } from "../../Components/Tabs";
import AllTask from "./AllTask";
import RecentOpened from "./RecentOpened";
import PendingTask from "./PendingTask";
import CompletedTask from "./CompletedTask";
import NotificationsIcon from "@mui/icons-material/Notifications";

function TaskTables() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box width={100 + "%"}>
        <CustomTabs value={value} onChange={handleChange}>
          <CustomTab label="All Task" />
          <CustomTab label="Recent Opened" />
          <CustomTab
            label="Pending Task"
            icon={
              <Badge badgeContent={1} color="error">
                <NotificationsIcon />
              </Badge>
            }
            iconPosition="end"
          />
          <CustomTab label="Completed Task" />
        </CustomTabs>
        <CustomTabPanel value={value} index={0}>
          <AllTask />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <RecentOpened />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <PendingTask />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <CompletedTask />
        </CustomTabPanel>
      </Box>
    </>
  );
}

export default TaskTables;
