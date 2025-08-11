import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const NavConfigure = lazy(() => import("./NavConfigure"));

const WorkflowLanding = lazy(() => import("./WorkflowLanding"));

const EditWorkflow = lazy(() => import("./EditWorkflow"));

function WorkflowX() {
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
                <WorkflowLanding />
              </Suspense>
            }
          />
          <Route
            path="edit-workflow"
            element={
              <Suspense fallback={<>Loading...</>}>
                <EditWorkflow />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default WorkflowX;
