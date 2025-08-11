import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Dialog,
  DialogActions,
  DialogTitle,
  Grid,
  IconButton,
  MenuItem,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { PopupContainer } from "../../../../Components/Page";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";

const userDataList = [
  { value: 1, label: "Peter Parker" },
  { value: 2, label: "Steve Roger" },
  { value: 3, label: "Tony Stark" },
  { value: 4, label: "Natasha Romanoff" },
  { value: 5, label: "Bruce Banner" },
  { value: 6, label: "Thor Odinson" },
  { value: 7, label: "Clint Barton" },
  { value: 8, label: "Wanda Maximoff" },
  { value: 9, label: "James Rhodes" },
  { value: 10, label: "Scott Lang" },
];

function PhysicalCopyArchive({ fileName }) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("self");
  const [name, setName] = useState("");
  const [archiveLocation, setArchiveLocation] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [description, setDescription] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Tooltip title="Physical Copy Archive">
        <IconButton size="small" color="warning" onClick={handleClickOpen}>
          <ArchiveOutlinedIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle sx={{ borderBottom: 1, borderColor: "divider" }}>
          Physical Copy Archive - {fileName}
        </DialogTitle>
        <PopupContainer>
          <Grid container spacing={2}>
            <Grid item>
              <Typography variant="body1" gutterBottom>
                Archive By
              </Typography>
              <ButtonGroup
                disableElevation
                variant="contained"
                color="secondary"
                size="small"
              >
                <Button
                  sx={{
                    bgcolor: status === "self" ? "secondary.main" : "grey.200",
                    color:
                      status === "self"
                        ? "secondary.contrastText"
                        : "text.secondary",
                    "&:hover": {
                      color: "secondary.contrastText",
                    },
                  }}
                  onClick={() => setStatus("self")}
                >
                  Self
                </Button>
                <Button
                  sx={{
                    bgcolor:
                      status === "others" ? "secondary.main" : "grey.200",
                    color:
                      status === "others"
                        ? "secondary.contrastText"
                        : "text.secondary",
                    "&:hover": {
                      color: "secondary.contrastText",
                    },
                  }}
                  onClick={() => setStatus("others")}
                >
                  Others
                </Button>
              </ButtonGroup>
            </Grid>
            {status === "self" ? (
              <Grid item xs>
                <Typography variant="body2" gutterBottom>
                  Archive By
                </Typography>
                <TextField
                  id="archive-by-self"
                  placeholder="Archive By"
                  color="secondary"
                  variant="outlined"
                  size="small"
                  fullWidth
                  required
                  defaultValue="Shiva Prakash H"
                />
              </Grid>
            ) : (
              <Grid item xs>
                <Typography variant="body2" gutterBottom>
                  Select Destroy By
                </Typography>
                <TextField
                  id="archive-by-other"
                  color="secondary"
                  variant="outlined"
                  size="small"
                  fullWidth
                  required
                  select
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                >
                  {userDataList.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            )}
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Enter/Paste Archive Location*
              </Typography>
              <TextField
                id="user-name"
                placeholder="Enter Enter/Paste Archive Location"
                color="secondary"
                variant="outlined"
                size="small"
                fullWidth
                value={archiveLocation}
                onChange={(event) => {
                  setArchiveLocation(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                User Name
              </Typography>
              <TextField
                id="user-name"
                placeholder="Enter User Name"
                color="secondary"
                variant="outlined"
                size="small"
                fullWidth
                value={userName}
                onChange={(event) => {
                  setUserName(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Password
              </Typography>
              <TextField
                id="user-password"
                placeholder="Enter Password"
                color="secondary"
                variant="outlined"
                size="small"
                type="password"
                fullWidth
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Comments/Justification*
              </Typography>
              <TextField
                id="comment"
                placeholder="Add Comments/Justification"
                color="secondary"
                variant="outlined"
                size="small"
                fullWidth
                multiline
                rows={4}
                value={description}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              />
            </Grid>
          </Grid>
        </PopupContainer>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="outlined"
            disableElevation
            color="secondary"
          >
            Cancel
          </Button>
          <Button
            onClick={handleClose}
            variant="outlined"
            color="warning"
            disableElevation
          >
            Archive
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default PhysicalCopyArchive;
