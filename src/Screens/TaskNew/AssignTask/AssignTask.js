import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import NavConfigure from "./NavConfigure";

const AssignTaskLanding = lazy(() => import("./AssignTaskLanding"));
const EditAssignTask = lazy(() => import("./EditAssignTask"));

function AssignTask() {
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
                <AssignTaskLanding />
              </Suspense>
            }
          />
          <Route
            path="edit-assign-task"
            element={
              <Suspense fallback={<>Loading...</>}>
                <EditAssignTask />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default AssignTask;
