import {
  Box,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { PageButton, TabWrapper } from "../../Components/Page";
import { useEffect, useState, useMemo } from "react";
import {
  TemplateList,
  DocumentList,
  FormList,
  DecisionTreeList,
  RoleList,
  FormsList,
} from "./NewBinding/";

const objectTypeList = [
  {
    value: 1,
    label: "Templates",
  },
  {
    value: 2,
    label: "Document",
  },
  // {
  //   value: 3,
  //   label: "Forms",
  // },
  {
    value: 4,
    label: "Decision Tree",
  },
  // {
  //   value: 5,
  //   label: "Role",
  // },
];

const inheritFromList = [
  {
    value: 1,
    label: "Strides",
  },
  {
    value: 2,
    label: "Arcolab",
  },
];
const inheritToList = [
  {
    value: 1,
    label: "XYZ Organization",
  },
  {
    value: 2,
    label: "ABC organization",
  },
];

const templateGroupList = [
  {
    value: 1,
    label: "Template Group 1",
  },
  {
    value: 2,
    label: "Template Group 2",
  },
  {
    value: 3,
    label: "Template Group 3",
  },
  {
    value: 4,
    label: "Template Group 4",
  },
];

const taskTypeList = [
  { value: 1, label: "Authored" },
  { value: 2, label: "Executed" },
];
const bindAsList = [
  { value: 1, label: "Copy" },
  { value: 2, label: "Link" },
];
const formTypeList = [
  { value: 1, label: "Discrepancy Form" },
  { value: 2, label: "Form Type B" },
];
const decisionTreeList = [
  { value: 1, label: "Single Decision" },
  { value: 2, label: "Multiple Decision" },
];

const renderComponent = (type) => {
  switch (type) {
    case 1:
      return <TemplateList />;
    case 2:
      return <DocumentList />;
    // case 3:
    //   return <FormList />;
    case 4:
      return <DecisionTreeList />;
    // case 5:
    //   return <RoleList />;
    default:
      return null;
  }
};

function NewBinding() {
  const [objectType, setObjectType] = useState("");
  const [inheritFrom, setInheritFrom] = useState(1);
  const [inheritTo, setInheritTo] = useState(1);
  // const [templateGroup, setTemplateGroup] = useState(1);
  const [selectedComponent, setSelectedComponent] = useState("");

  // Default states for dropdowns based on objectType
  const [templateGroup, setTemplateGroup] = useState(
    templateGroupList[0].value
  );
  const [taskType, setTaskType] = useState(taskTypeList[0].value);
  const [bindAs, setBindAs] = useState(bindAsList[0].value);
  const [formType, setFormType] = useState(formTypeList[0].value);
  const [decisionTree, setDecisionTree] = useState(decisionTreeList[0].value);

  useEffect(() => {
    setSelectedComponent(renderComponent(objectType));
  }, [objectType]);

  // Generate dropdowns based on objectType
  const dropdowns = useMemo(() => {
    switch (objectType) {
      case 1: // Templates
        return (
          <Grid item xs={4}>
            <Typography variant="body2" gutterBottom>
              Template Group
              <Typography color="error.main" component="span">
                *
              </Typography>
            </Typography>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              select
              value={templateGroup}
              onChange={(event) => setTemplateGroup(event.target.value)}
            >
              {templateGroupList.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        );

      case 2: // Document
        return (
          <>
            <Grid item xs={3}>
              <Typography variant="body2" gutterBottom>
                Document
                <Typography color="error.main" component="span">
                  *
                </Typography>
              </Typography>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                select
                value={taskType}
                onChange={(event) => setTaskType(event.target.value)}
              >
                {taskTypeList.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body2" gutterBottom>
                Bind As
                <Typography color="error.main" component="span">
                  *
                </Typography>
              </Typography>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                select
                value={bindAs}
                onChange={(event) => setBindAs(event.target.value)}
              >
                {bindAsList.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </>
        );

      case 3: // Forms
        return (
          <Grid item xs={4}>
            <Typography variant="body2" gutterBottom>
              Form Type
              <Typography color="error.main" component="span">
                *
              </Typography>
            </Typography>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              select
              value={formType}
              onChange={(event) => setFormType(event.target.value)}
            >
              {formTypeList.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        );

      case 4: // Decision Tree
        return (
          <Grid item xs={4}>
            <Typography variant="body2" gutterBottom>
              Decision Tree Type
              <Typography color="error.main" component="span">
                *
              </Typography>
            </Typography>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              select
              value={decisionTree}
              onChange={(event) => setDecisionTree(event.target.value)}
            >
              {decisionTreeList.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        );
      default:
        return null;
    }
  }, [objectType]);

  return (
    <>
      <TabWrapper>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="body2" gutterBottom>
              Select Object Type
              <Typography color="error.main" component="span">
                *
              </Typography>
            </Typography>
            <TextField
              id="select_object_type"
              variant="outlined"
              size="small"
              fullWidth
              select
              value={objectType}
              onChange={(event) => {
                setObjectType(event.target.value);
              }}
            >
              {objectTypeList.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid
            item
            xs={
              objectType === "" || objectType === 5
                ? 6
                : objectType === 2
                  ? 3
                  : 4
            } //object type 2 = Document
          >
            <Typography variant="body2" gutterBottom>
              Bind From
              <Typography color="error.main" component="span">
                *
              </Typography>
            </Typography>
            <TextField
              id="inherit_from"
              variant="outlined"
              size="small"
              fullWidth
              select
              value={inheritFrom}
              onChange={(event) => {
                setInheritFrom(event.target.value);
              }}
            >
              {inheritFromList.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid
            item
            xs={
              objectType === "" || objectType === 5
                ? 6
                : objectType === 2
                  ? 3
                  : 4
            } //object type 2 = Document
          >
            <Typography variant="body2" gutterBottom>
              Bind To
              <Typography color="error.main" component="span">
                *
              </Typography>
            </Typography>
            <TextField
              id="inherit_to"
              variant="outlined"
              size="small"
              fullWidth
              select
              value={inheritTo}
              onChange={(event) => {
                setInheritTo(event.target.value);
              }}
            >
              {inheritToList.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          {/* Dynamic Dropdowns */}
          {dropdowns}
          {/* default grid component */}
          {/* Render selected component dynamically */}
          <Grid container spacing={2} alignItems="center" pt={5} pl={2}>
            {selectedComponent}
          </Grid>
        </Grid>
      </TabWrapper>
      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        py={2}
        spacing={2}
      >
        {!selectedComponent && (
          <>
            <Box>
              <PageButton color="error">Cancel</PageButton>
            </Box>
            <Box>
              <PageButton color="primary">Reset</PageButton>
            </Box>
          </>
        )}
      </Stack>
    </>
  );
}

export default NewBinding;
