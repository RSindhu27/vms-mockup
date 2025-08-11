import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import NavConfigure from "./NavConfigure";
import ViewExecution from "./ViewExecution";
import EditExecution from "./EditExecution";
import ViewDiscrepancy from "../../Discrepancy/ViewDiscrepancy";
import AssessDiscrepancy from "../../Discrepancy/AssessDiscrepancy";

const MyTaskLanding = lazy(() => import("./MyTaskLanding"));
const ViewTask = lazy(() => import("./ViewTask"));

function MyTask() {
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
                <MyTaskLanding />
              </Suspense>
            }
          />
          <Route
            path="view-discrepancy"
            element={
              <Suspense fallback={<>Loading...</>}>
                <ViewDiscrepancy />
              </Suspense>
            }
          />
          <Route
            path="/assess-discrepancy"
            element={
              <Suspense fallback={<>Loading...</>}>
                <AssessDiscrepancy />
              </Suspense>
            }
          />
          <Route
            path="view-task"
            element={
              <Suspense fallback={<>Loading...</>}>
                <ViewTask />
              </Suspense>
            }
          />
          <Route
            path="view-execution"
            element={
              <Suspense fallback={<>Loading...</>}>
                <ViewExecution />
              </Suspense>
            }
          />
          <Route
            path="edit-execution"
            element={
              <Suspense fallback={<>Loading...</>}>
                <EditExecution />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default MyTask;
