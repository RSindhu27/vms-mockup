import React, { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const NavConfigure = lazy(() => import("./NavConfigure"));

const AuditTrail = lazy(() => import("./AuditTrail"));

function System() {
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
          <Route index element={<Navigate to="audit-trail" replace />} />
          <Route
            path="audit-trail"
            element={
              <Suspense fallback={<>Loading...</>}>
                <AuditTrail />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default System;
