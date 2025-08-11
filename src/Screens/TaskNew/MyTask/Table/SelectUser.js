import { Box, Collapse, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { PageIconPrimaryButton } from "../../../../Components/Page";
import { Table, TableDeleteRow, ViewMore } from "../../../../Components/Table";
import Data1 from "./DataThree.json";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const columns = [
  {
    field: "action",
    headerName: "",
    renderCell: (params) => <TableDeleteRow />,
    minWidth: 50,
    flex: 1,
  },
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "user",
    headerName: "User",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "decision",
    headerName: "Decision",
    renderCell: (params) => (
      <Typography variant="body2" color="info.main">
        {params.row.decision}
      </Typography>
    ),
    minWidth: 150,
    flex: 1,
  },
  {
    field: "sequence",
    headerName: "Sequence",
    renderCell: (params) => (
      <Box sx={{ pt: 1, pb: 1, width: 100 + "%" }}>
        <TextField
          id={params.row.sequence.replace(/\s/g, "")}
          color="secondary"
          value={1}
          disabled
          size="small"
          fullWidth
        />
      </Box>
    ),
    minWidth: 150,
    flex: 1,
  },
  {
    field: "period_in_days",
    headerName: "Period In Days",
    renderCell: (params) => (
      <Box sx={{ pt: 1, pb: 1, width: 100 + "%" }}>
        <TextField
          id={params.row.id}
          color="secondary"
          value={params.row.period_in_days}
          disabled
          size="small"
          fullWidth
        />
      </Box>
    ),
    minWidth: 150,
    flex: 1,
  },
  {
    field: "alert_in_days",
    headerName: "Alert In Days",
    renderCell: (params) => (
      <Box sx={{ pt: 1, pb: 1, width: 100 + "%" }}>
        <TextField
          id={params.row.id}
          color="secondary"
          defaultValue={params.row.alert_in_days}
          disabled
          size="small"
          type="number"
          fullWidth
        />
      </Box>
    ),
    minWidth: 150,
    flex: 1,
  },
  {
    field: "order",
    headerName: "Order",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "email",
    headerName: "Email",
    renderCell: (params) => (
      <>
        {typeof params.row.email === "string" ? (
          <Typography variant="body2" noWrap>
            {params.row.email}
          </Typography>
        ) : (
          <ViewMore primaryText="View All" dataList={params.row.email} />
        )}
      </>
    ),
    minWidth: 150,
    flex: 1,
  },
];

function SelectUser({ role, order }) {
  const [checked, setChecked] = useState(false);

  const handleExpand = () => {
    setChecked((prev) => !prev);
  };

  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            spacing={2}
          >
            <Grid item>
              <Typography variant="body1">
                Role: <b>{role}</b>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                Order:{" "}
                <Typography component="span" color="info.main">
                  {order}
                </Typography>
              </Typography>
            </Grid>
            <Grid item>
              <PageIconPrimaryButton size="small" onClick={handleExpand}>
                {checked ? <RemoveIcon /> : <AddIcon />}
              </PageIconPrimaryButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Collapse in={checked}>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <Box sx={{ p: 1 }} />
                <Table
                  data={Data1.picklist}
                  columns={columns}
                  getRowHeight={() => "auto"}
                  checkboxSelection
                  disableRowSelectionOnClick
                />
              </Grid>
            </Grid>
          </Collapse>
        </Grid>
      </Grid>
    </>
  );
}

export default SelectUser;
