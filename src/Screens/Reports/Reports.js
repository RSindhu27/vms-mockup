import React, { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ReportsLanding from "./ReportsLanding";

const NavConfigure = lazy(() => import("./NavConfigure"));

function Reports() {
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
          <Route index element={<Navigate to="reports" replace />} />
          <Route
            path="reports"
            element={
              <Suspense fallback={<>Loading...</>}>
                <ReportsLanding />
              </Suspense>
            }
          />
          {/* <Route
            path="view-object"
            element={
              <Suspense fallback={<>Loading...</>}>
                <ObjectTypeName />
              </Suspense>
            }
          />
          <Route
            path="view-details"
            element={
              <Suspense fallback={<>Loading...</>}>
                <ViewBinding />
              </Suspense>
            }
          /> */}
        </Route>
      </Routes>
    </>
  );
}

export default Reports;
