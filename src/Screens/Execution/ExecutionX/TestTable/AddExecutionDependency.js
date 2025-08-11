import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Grid,
  MenuItem,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Table as TableX,
  TableBody,
} from "@mui/material";
import { PopupContainer } from "../../../../Components/Page";

function AddExecutionDependency() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Button color="secondary" variant="text" onClick={handleOpen}>
        Add Execution Dependency
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg">
        <DialogTitle sx={{ borderBottom: 1, borderColor: "divider" }}>
          Add Execution Dependency
        </DialogTitle>
        <PopupContainer>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TableContainer
                sx={{ border: 1, borderColor: "divider", borderRadius: 1 }}
              >
                <TableX
                  size="small"
                  sx={{
                    borderCollapse: "separate",
                    tableLayout: "fixed",
                    minWidth: 740,
                  }}
                >
                  <TableHead>
                    {/* Header */}
                    <TableRow>
                      <TableCell>Task</TableCell>
                      <TableCell>Tables</TableCell>
                      <TableCell>Predecessor</TableCell>
                      <TableCell>Process</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {/* Row 1 */}
                    <TableRow>
                      <TableCell component="th" scope="row">
                        01
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <TextField
                          color="secondary"
                          select
                          defaultValue={1}
                          size="small"
                          fullWidth
                        >
                          <MenuItem key={1} value={1}>
                            Table 1
                          </MenuItem>
                          <MenuItem key={2} value={2}>
                            Table 2
                          </MenuItem>
                          <MenuItem key={3} value={3}>
                            Table 3
                          </MenuItem>
                        </TextField>
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <TextField
                          color="secondary"
                          select
                          defaultValue={1}
                          size="small"
                          fullWidth
                        >
                          <MenuItem key={1} value={1}>
                            Table 1
                          </MenuItem>
                          <MenuItem key={2} value={2}>
                            Table 2
                          </MenuItem>
                          <MenuItem key={3} value={3}>
                            Table 3
                          </MenuItem>
                        </TextField>
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <TextField
                          color="secondary"
                          select
                          defaultValue={1}
                          size="small"
                          fullWidth
                        >
                          <MenuItem key={1} value={1}>
                            Start To Finish
                          </MenuItem>
                          <MenuItem key={2} value={2}>
                            Option 1
                          </MenuItem>
                          <MenuItem key={3} value={3}>
                            Option 2
                          </MenuItem>
                        </TextField>
                      </TableCell>
                    </TableRow>
                    {/* Row 2 */}
                    <TableRow>
                      <TableCell component="th" scope="row">
                        02
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <TextField
                          color="secondary"
                          select
                          defaultValue={1}
                          size="small"
                          fullWidth
                        >
                          <MenuItem key={1} value={1}>
                            Table 1
                          </MenuItem>
                          <MenuItem key={2} value={2}>
                            Table 2
                          </MenuItem>
                          <MenuItem key={3} value={3}>
                            Table 3
                          </MenuItem>
                        </TextField>
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <TextField
                          color="secondary"
                          select
                          defaultValue={1}
                          size="small"
                          fullWidth
                        >
                          <MenuItem key={1} value={1}>
                            Table 1
                          </MenuItem>
                          <MenuItem key={2} value={2}>
                            Table 2
                          </MenuItem>
                          <MenuItem key={3} value={3}>
                            Table 3
                          </MenuItem>
                        </TextField>
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <TextField
                          color="secondary"
                          select
                          defaultValue={1}
                          size="small"
                          fullWidth
                        >
                          <MenuItem key={1} value={1}>
                            Start To Finish
                          </MenuItem>
                          <MenuItem key={2} value={2}>
                            Option 1
                          </MenuItem>
                          <MenuItem key={3} value={3}>
                            Option 2
                          </MenuItem>
                        </TextField>
                      </TableCell>
                    </TableRow>
                    {/* Row 3 */}
                    <TableRow>
                      <TableCell component="th" scope="row">
                        03
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <TextField
                          color="secondary"
                          select
                          defaultValue={1}
                          size="small"
                          fullWidth
                        >
                          <MenuItem key={1} value={1}>
                            Table 1
                          </MenuItem>
                          <MenuItem key={2} value={2}>
                            Table 2
                          </MenuItem>
                          <MenuItem key={3} value={3}>
                            Table 3
                          </MenuItem>
                        </TextField>
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <TextField
                          color="secondary"
                          select
                          defaultValue={1}
                          size="small"
                          fullWidth
                        >
                          <MenuItem key={1} value={1}>
                            Table 1
                          </MenuItem>
                          <MenuItem key={2} value={2}>
                            Table 2
                          </MenuItem>
                          <MenuItem key={3} value={3}>
                            Table 3
                          </MenuItem>
                        </TextField>
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <TextField
                          color="secondary"
                          select
                          defaultValue={1}
                          size="small"
                          fullWidth
                        >
                          <MenuItem key={1} value={1}>
                            Start To Finish
                          </MenuItem>
                          <MenuItem key={2} value={2}>
                            Option 1
                          </MenuItem>
                          <MenuItem key={3} value={3}>
                            Option 2
                          </MenuItem>
                        </TextField>
                      </TableCell>
                    </TableRow>
                    {/* Row 4 */}
                    <TableRow>
                      <TableCell component="th" scope="row">
                        04
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <TextField
                          color="secondary"
                          select
                          defaultValue={1}
                          size="small"
                          fullWidth
                        >
                          <MenuItem key={1} value={1}>
                            Table 1
                          </MenuItem>
                          <MenuItem key={2} value={2}>
                            Table 2
                          </MenuItem>
                          <MenuItem key={3} value={3}>
                            Table 3
                          </MenuItem>
                        </TextField>
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <TextField
                          color="secondary"
                          select
                          defaultValue={1}
                          size="small"
                          fullWidth
                        >
                          <MenuItem key={1} value={1}>
                            Table 1
                          </MenuItem>
                          <MenuItem key={2} value={2}>
                            Table 2
                          </MenuItem>
                          <MenuItem key={3} value={3}>
                            Table 3
                          </MenuItem>
                        </TextField>
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <TextField
                          color="secondary"
                          select
                          defaultValue={1}
                          size="small"
                          fullWidth
                        >
                          <MenuItem key={1} value={1}>
                            Start To Finish
                          </MenuItem>
                          <MenuItem key={2} value={2}>
                            Option 1
                          </MenuItem>
                          <MenuItem key={3} value={3}>
                            Option 2
                          </MenuItem>
                        </TextField>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </TableX>
              </TableContainer>
            </Grid>
          </Grid>
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
          <Button
            onClick={handleClose}
            autoFocus
            variant="contained"
            disableElevation
            size="large"
            color="success"
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddExecutionDependency;
