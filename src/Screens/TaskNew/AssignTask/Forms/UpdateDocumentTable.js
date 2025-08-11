import { Button, Grid, Stack, Typography } from "@mui/material";
import DocumentTable from "../Tables/DocumentTable";

function UpdateDocumentTable({ close, update }) {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="body1">
            <b>Tables In Document</b>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <DocumentTable />
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={2} direction="row" justifyContent="flex-end">
            <Button
              onClick={close}
              variant="contained"
              disableElevation
              size="large"
              color="inherit"
            >
              Cancel
            </Button>
            <Button
              onClick={update}
              autoFocus
              variant="contained"
              disableElevation
              size="large"
              color="success"
            >
              Update
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}

export default UpdateDocumentTable;
