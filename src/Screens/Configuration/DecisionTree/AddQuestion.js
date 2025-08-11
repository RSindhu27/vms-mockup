import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Table } from "../../../Components/Table";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { Grid, IconButton, TextField, Typography } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import { PopupContainer } from "../../../Components/Page";

function AddQuestion() {
  const [open, setOpen] = useState(false);
  const [addQuestion, setAddQuestion] = useState("");
  const [helpText, setHelpText] = useState("");
  const [answer, setAnswer] = useState("");
  const [answerList, setAnswerList] = useState([
    {
      id: 0,
      name: "Answer 1",
    },
    {
      id: 1,
      name: "Answer 2",
    },
  ]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddAnswer = () => {
    var newId = null;

    for (let i = 0; i <= answerList.length; i++) {
      if (answerList.some((n) => n.id === i)) {
        continue;
      } else {
        newId = i;
        break;
      }
    }

    const arrList = [...answerList, { id: newId, name: answer }];
    setAnswerList(arrList);
  };

  const handleRemoveAnswer = (removeIdx) => {
    setAnswerList((prevOptions) =>
      prevOptions.filter((option) => option.id !== removeIdx)
    );
  };

  const columns = [
    {
      field: "edit",
      headerName: "",
      width: 50,
      renderCell: (params) => (
        <IconButton
          size="small"
          color="error"
          onClick={() => handleRemoveAnswer(params.row.id)}
        >
          <DeleteOutlineOutlinedIcon fontSize="small" />
        </IconButton>
      ),
      sortable: false,
      filterable: false,
      hideable: false,
    },
    {
      field: "id",
      headerName: "Order",
      width: 90,
    },
    {
      field: "name",
      headerName: "Label",
      minWidth: 150,
      flex: 1,
    },
  ];

  return (
    <>
      <Button
        color="secondary"
        startIcon={<AddCircleIcon />}
        onClick={handleClickOpen}
        variant="contained"
        disableElevation
        size="small"
      >
        Add Question
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle sx={{ borderBottom: 1, borderColor: "divider" }}>
          Add Question
        </DialogTitle>
        <PopupContainer>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Enter Question
              </Typography>
              <TextField
                id="add_question_enter"
                fullWidth
                size="small"
                value={addQuestion}
                onChange={(event) => {
                  setAddQuestion(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Help Text
              </Typography>
              <TextField
                id="add_question_help_text"
                fullWidth
                size="small"
                value={helpText}
                onChange={(event) => {
                  setHelpText(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2} alignItems="flex-end">
                <Grid item xs>
                  <Typography variant="body2" gutterBottom>
                    Enter Answer
                  </Typography>
                  <TextField
                    id="add_question_add_answer"
                    fullWidth
                    size="small"
                    value={answer}
                    onChange={(event) => {
                      setAnswer(event.target.value);
                    }}
                  />
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={handleAddAnswer}
                  >
                    Add Answer
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5">Add Answer</Typography>
            </Grid>
            <Grid item xs={12}>
              <Table data={answerList} columns={columns} />
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

export default AddQuestion;
