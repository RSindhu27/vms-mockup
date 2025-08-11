import React, { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const NavConfigure = lazy(() => import("./NavConfigure"));
const HardcopyManagement = lazy(() => import("./HardcopyManagement"));
const PrintTemplate = lazy(() => import("./PrintTemplate"));

function Print() {
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
            element={<Navigate to="hardcopy-management" replace />}
          />
          <Route
            path="hardcopy-management/*"
            element={
              <Suspense fallback={<>Loading...</>}>
                <HardcopyManagement />
              </Suspense>
            }
          />
          <Route
            path="print-template/*"
            element={
              <Suspense fallback={<>Loading...</>}>
                <PrintTemplate />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default Print;
