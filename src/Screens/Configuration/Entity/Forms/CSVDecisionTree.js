import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Grid,
  Tab,
  Tabs,
} from "@mui/material";
import PropTypes from "prop-types";
import { CompoWrapper, PopupContainer } from "../../../../Components/Page";
import { useState } from "react";
import CSVDSectionDetails from "./CSVDSectionDetails";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`new-document-type-${index}`}
      aria-labelledby={`new-document-type-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function CSVDecisionTree() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        color="info"
        variant="text"
        disableElevation
        onClick={handleClickOpen}
        startIcon={<RemoveRedEyeIcon />}
      >
        View CSV Decision Tree
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle sx={{ borderBottom: 1, borderColor: "divider" }}>
          CSV Decision Tree
        </DialogTitle>
        <PopupContainer>
          <CompoWrapper sx={{ p: 0 + "!important" }}>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="auto"
                >
                  <Tab label="Section 1" />
                  <Tab label="Section 2" />
                </Tabs>
              </Grid>
              <Grid item xs={12}>
                <CustomTabPanel value={value} index={0}>
                  <CSVDSectionDetails />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                  <CSVDSectionDetails />
                </CustomTabPanel>
              </Grid>
            </Grid>
          </CompoWrapper>
        </PopupContainer>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="contained"
            disableElevation
            size="large"
            color="inherit"
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default CSVDecisionTree;
