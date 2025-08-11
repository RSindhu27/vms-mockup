import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { PopupContainer } from "../../../../../Components/Page";
import VisibilityIcon from "@mui/icons-material/Visibility";

function ViewDiscrepancy() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton size="small" color="info" onClick={handleClickOpen}>
        <VisibilityIcon fontSize="small" />
      </IconButton>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle sx={{ borderBottom: 1, borderColor: "divider" }}>
          Discrepancy DIS/0001
        </DialogTitle>
        <PopupContainer>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TableContainer
                sx={{ border: 1, borderColor: "divider", borderRadius: 1 }}
              >
                <Table
                  size="small"
                  sx={{
                    borderCollapse: "separate",
                    tableLayout: "fixed",
                  }}
                >
                  <TableBody>
                    <TableRow key="1">
                      <TableCell>
                        <Typography variant="body2">ASSIGNER:</Typography>
                        <Typography variant="body1">
                          <b>Johndeo@Arcolab.Com</b>
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2" align="right">
                          ASSIGNED ON:
                        </Typography>
                        <Typography variant="body1" align="right">
                          <b>09-Jan-2025 | 15:25</b>
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow key="2">
                      <TableCell>
                        <Typography variant="body2">ASSIGNEE:</Typography>
                        <Typography variant="body1">
                          <b>Johndeo03@Arcolab.Com</b>
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2" align="right">
                          ACCEPTED ON:
                        </Typography>
                        <Typography variant="body1" align="right">
                          <b>12-Jan-2025 | 18:25</b>
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow key="4">
                      <TableCell>
                        <Typography variant="body2">
                          REVIEW REJECTED BY:
                        </Typography>
                        <Typography variant="body1">
                          <b>Johndeo03@Arcolab.Com</b>
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2" align="right">
                          REJECTED ON:
                        </Typography>
                        <Typography variant="body1" align="right">
                          <b>13-Jan-2025 | 18:25</b>
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow key="5">
                      <TableCell>
                        <Typography variant="body2">REVIEWED BY:</Typography>
                        <Typography variant="body1">
                          <b>R&D Group</b>
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2" align="right">
                          REVIEWED ON:
                        </Typography>
                        <Typography variant="body1" align="right">
                          <b>13-Jan-2025 | 18:25</b>
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow key="6">
                      <TableCell>
                        <Typography variant="body2">APPROVED BY: </Typography>
                        <Typography variant="body1">
                          <b>R&D Group</b>
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2" align="right">
                          APPROVED ON:
                        </Typography>
                        <Typography variant="body1" align="right">
                          <b>13-Jan-2025 | 18:25</b>
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow key="6">
                      <TableCell>
                        <Typography variant="body2">Status: </Typography>
                        <Typography variant="body1" color="success.main">
                          <b>Discrepancy Completed</b>
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
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
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ViewDiscrepancy;
