import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import { MessageBoxContainer } from "../../../../Components/Page";

function CommentBox() {
  const [comment, setComment] = useState("");
  return (
    <>
      <MessageBoxContainer sx={{ mb: 2, maxHeight: 300, overflow: "auto" }}>
        <Grid container spacing={2}>
          {/* Comment 1 */}
          <Grid item xs={12}>
            <Box sx={{ bgcolor: "info.extraLight", p: 1, borderRadius: 2 }}>
              <Grid
                container
                spacing={1}
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item xs={12}>
                  <Typography variant="caption">name@arcolab.com</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    tempor, arcu at ultricies convallis, enim lacus efficitur
                    tellus, et mollis est mi nec turpis. Maecenas quis euismod
                    odio, at ornare lacus. Maecenas nec diam dictum, hendrerit
                    diam ut, gravida quam.
                  </Typography>
                </Grid>
                <Grid item>
                  <Button color="secondary" size="small">
                    Reply
                  </Button>
                </Grid>
                <Grid item>
                  <Typography variant="caption">23 Jan 2024, 12:24</Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          {/* Comment 2 */}
          <Grid item xs={12}>
            <Box sx={{ bgcolor: "info.extraLight", p: 1, borderRadius: 2 }}>
              <Grid
                container
                spacing={1}
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item xs={12}>
                  <Typography variant="caption">name@arcolab.com</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    tempor, arcu at ultricies convallis, enim lacus efficitur
                    tellus, et mollis est mi nec turpis. Maecenas quis euismod
                    odio, at ornare lacus. Maecenas nec diam dictum, hendrerit
                    diam ut, gravida quam.
                  </Typography>
                </Grid>
                <Grid item>
                  <Button color="secondary" size="small">
                    Reply
                  </Button>
                </Grid>
                <Grid item>
                  <Typography variant="caption">23 Jan 2024, 12:24</Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </MessageBoxContainer>
      <Grid container spacing={2}>
        {/* Input Area */}
        <Grid item xs={12}>
          <Typography variant="body2" gutterBottom>
            Your Comment
          </Typography>
          <TextField
            id="activity_description"
            color="secondary"
            placeholder="Enter Comment Here"
            value={comment}
            fullWidth
            multiline
            rows={4}
            onChange={(event) => {
              setComment(event.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={1} direction="row" justifyContent="flex-end">
            <Button color="error" size="small">
              cancel
            </Button>
            <Button
              color="info"
              variant="outlined"
              startIcon={<TouchAppIcon fontSize="inherit" />}
              size="small"
            >
              Point Area
            </Button>
            <Button color="secondary" variant="outlined" size="small">
              Submit
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}

export default CommentBox;
