import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import NavConfigure from "./NavConfigure";

const WorkflowTypeLanding = lazy(() => import("./WorkflowTypeLanding"));
const EditWorkflowType = lazy(() => import("./EditWorkflowType"));

function MappingKeyword() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<>Loading...</>}>
              <NavConfigure />
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<>Loading...</>}>
                <WorkflowTypeLanding />
              </Suspense>
            }
          />
          <Route
            path="edit-workflow"
            element={
              <Suspense fallback={<>Loading...</>}>
                <EditWorkflowType />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default MappingKeyword;
