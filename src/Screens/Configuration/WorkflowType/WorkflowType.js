import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const NavConfigure = lazy(() => import("./NavConfigure"));
const WorkflowTypeLanding = lazy(() => import("./WorkflowTypeLanding"));
const EditWorkflowType = lazy(() => import("./EditWorkflowType"));

function WorkflowType() {
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
            path="edit-workflow-type"
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

export default WorkflowType;
