import { Box, Chip, Grid, Stack, TextField, Typography } from "@mui/material";
import { CustomTab, CustomTabs } from "../../../Components/Tabs";
import { PageButton, TabWrapper } from "../../../Components/Page";
import Data from "./././DataDetails.json";
import { useState } from "react";
import { Table } from "../../../Components/Table";
import { Link } from "react-router-dom";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import WorkflowStatus from "./WorkflowStatus";

function ViewBinding() {
  const [objectData, setObjectData] = useState(Data.picklist);
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleOpenDialog = () => setDialogOpen(true);
  const handleCloseDialog = () => setDialogOpen(false);
  return (
    <>
      <Box width={100 + "%"}>
        <CustomTabs>
          <CustomTab label="Bound List- (65)" />
        </CustomTabs>
      </Box>

      <TabWrapper>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="body2" gutterBottom>
              Select Object Type
            </Typography>
            <TextField
              id="select_object_type"
              variant="outlined"
              size="small"
              fullWidth
              disabled
              value="Document"
            ></TextField>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="body2" gutterBottom>
              Bind From
            </Typography>
            <TextField
              id="inherit_from"
              variant="outlined"
              size="small"
              fullWidth
              disabled
              value={"Strides"}
            ></TextField>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="body2" gutterBottom>
              Bind To
            </Typography>
            <TextField
              id="inherit_to"
              variant="outlined"
              size="small"
              fullWidth
              disabled
              value={"Arcolab"}
            ></TextField>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="body2" gutterBottom>
              Document Type
            </Typography>
            <TextField
              id="task_type"
              variant="outlined"
              size="small"
              fullWidth
              disabled
              value={"Authored"}
            ></TextField>
          </Grid>
          {/* <Grid item xs={3}>
            <Typography variant="body2" gutterBottom>
              Content Function
            </Typography>
            <TextField
              id="content_function"
              variant="outlined"
              size="small"
              fullWidth
              disabled
              value={"Requirement"}
            ></TextField>
          </Grid> */}
        </Grid>
      </TabWrapper>

      <TabWrapper sx={{ mt: 2, borderTopLeftRadius: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="body1" gutterBottom fontWeight={700}>
              Bind From:
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body2" gutterBottom>
              Category
            </Typography>
            <TextField
              id="category"
              variant="outlined"
              size="small"
              fullWidth
              disabled
              value={"Computer System Validation"}
            ></TextField>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body2" gutterBottom>
              Sub Category
            </Typography>
            <TextField
              id="sub_category"
              variant="outlined"
              size="small"
              fullWidth
              disabled
              value={"Enterprise Application"}
            ></TextField>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body2" gutterBottom>
              Entity
            </Typography>
            <TextField
              id="entity"
              variant="outlined"
              size="small"
              fullWidth
              disabled
              value={"CSV"}
            ></TextField>
          </Grid>
        </Grid>
        {/* Documents Section */}
        <Grid item xs={12} mt={3}>
          <Grid container>
            <Grid item xs={6}>
              <Typography
                variant="body2"
                fontWeight={600}
                gutterBottom
                sx={{ pl: 1 }}
              >
                Documents:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant="body2"
                fontWeight={600}
                gutterBottom
                sx={{ pl: 1 }}
              >
                Bind As
              </Typography>
            </Grid>
          </Grid>

          {objectData.map((item) => (
            <Grid
              container
              alignItems="center"
              spacing={2}
              key={item.id}
              sx={{ mb: 1 }}
            >
              <Grid item xs={6}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <InsertDriveFileIcon
                    sx={{ color: "info.main", fontSize: 20 }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      color: "info.main",
                      textDecoration: "underline",
                      cursor: "pointer",
                      fontWeight: 500,
                    }}
                  >
                    {item.name}
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6}>
                <Chip
                  label={item.bind_as}
                  color="success"
                  size="small"
                  sx={{ fontWeight: "bold", textTransform: "uppercase" }}
                />
              </Grid>
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={1} mt={2}>
          <Grid item xs={12}>
            <Typography variant="body1" gutterBottom fontWeight={700}>
              Bind To:
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body2" gutterBottom>
              Category
            </Typography>
            <TextField
              id="category"
              variant="outlined"
              size="small"
              fullWidth
              disabled
              value={"Computer System Validation"}
            ></TextField>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body2" gutterBottom>
              Sub Category
            </Typography>
            <TextField
              id="sub_category"
              variant="outlined"
              size="small"
              fullWidth
              disabled
              value={"Enterprise Application"}
            ></TextField>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body2" gutterBottom>
              Entity
            </Typography>
            <TextField
              id="entity"
              variant="outlined"
              size="small"
              fullWidth
              disabled
              value={"CSV"}
            ></TextField>
          </Grid>
        </Grid>
      </TabWrapper>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        py={2}
        spacing={2}
      >
        <Box>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 600, color: "text.primary", mb: 0.5 }}
          >
            Workflow Status:
          </Typography>
          <Typography
            variant="body2"
            onClick={handleOpenDialog}
            sx={{
              color: "error.main",
              fontWeight: 500,
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Review Rejected / Approval Pending
          </Typography>
        </Box>
        <Box>
          <PageButton color="error">Cancel</PageButton>
        </Box>
      </Stack>
      <WorkflowStatus open={dialogOpen} onClose={handleCloseDialog} />
    </>
  );
}

export default ViewBinding;
