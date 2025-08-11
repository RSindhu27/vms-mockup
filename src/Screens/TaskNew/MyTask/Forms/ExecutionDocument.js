import { Grid } from "@mui/material";
import { TabWrapper } from "../../../../Components/Page";
import DocumentX from "./ExecutionDocumentView";
import Attachments from "../Popup/Attachments";

function ExecutionDocument() {
  return (
    <TabWrapper>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <DocumentX />
        </Grid>
        <Grid item xs={12}>
          <Attachments />
        </Grid>
      </Grid>
    </TabWrapper>
  );
}

export default ExecutionDocument;
