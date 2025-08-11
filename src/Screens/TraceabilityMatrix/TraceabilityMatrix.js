import React, { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import TraceMatrixLanding from "./TraceMatrixLanding";
import ViewTraceMatrixDetails from "./ViewTraceMatrixDetails/ViewTraceMatrixDetails";
const NavConfigure = lazy(() => import("./NavConfigure"));

function TraceabilityMatrix() {
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
          <Route index element={<Navigate to="trace-matrix" replace />} />
          <Route
            path="trace-matrix"
            element={
              <Suspense fallback={<>Loading...</>}>
                <TraceMatrixLanding />
              </Suspense>
            }
          />
          <Route
            path="view/:matrix_id"
            element={
              <Suspense fallback={<>Loading...</>}>
                <ViewTraceMatrixDetails />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default TraceabilityMatrix;
