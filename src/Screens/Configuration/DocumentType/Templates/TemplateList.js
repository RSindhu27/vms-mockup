import React from "react";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { TableDeleteRow } from "../../../../Components/Table";

const Item = ({ itemData }) => {
  return (
    <Box>
      <Paper
        sx={{
          p: 1,
          mb: 1,
          position: "relative",
          boxSizing: "border-box",
          bgcolor: "default.paper",
        }}
      >
        <Grid
          container
          spacing={1}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs>
                <Typography variant="body1">{itemData.label}</Typography>
              </Grid>
              <Grid item xs>
                <Typography variant="body1">{itemData.type}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <TableDeleteRow onDelete={() => {}} />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

const NumberingSystemList = [
  {
    id: "item-1",
    label: "Template 01",
    type: "CSV",
  },
  {
    id: "item-2",
    label: "Template 02",
    type: "Draft",
  },
  { id: "item-3", label: "Template 03", type: "N/A" },
];

function TemplateList() {
  const [nsList, setNSList] = React.useState(NumberingSystemList);

  return (
    <>
      <Box sx={{ overflow: "auto", px: 1 }}>
        <Box sx={{ minWidth: 400 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box px={0.5}>
                <Grid
                  container
                  spacing={1}
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Grid item xs>
                    <Grid container spacing={1}>
                      <Grid item xs>
                        <Typography variant="body1">Name</Typography>
                      </Grid>
                      <Grid item xs>
                        <Typography variant="body1">Type</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Box sx={{ width: 24 }} />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12}>
              {nsList.map((e) => (
                <Item key={e.id} itemData={e} />
              ))}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default TemplateList;
