import React, { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const NavConfigure = lazy(() => import("./NavConfigure"));
const WorkflowX = lazy(() => import("./WorkflowX"));

function Workflow() {
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
          <Route index element={<Navigate to="Workflow" replace />} />
          <Route
            path="Workflow/*"
            element={
              <Suspense fallback={<>Loading...</>}>
                <WorkflowX />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default Workflow;
