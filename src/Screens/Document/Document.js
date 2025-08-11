import React, { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const NavConfigure = lazy(() => import("./NavConfigure"));
const DocumentX = lazy(() => import("./DocumentX"));
const DocumentVMS = lazy(() => import("./DocumentVMS"));

function Document() {
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
          <Route index element={<Navigate to="document" replace />} />
          <Route
            path="document/*"
            element={
              <Suspense fallback={<>Loading...</>}>
                <DocumentX />
              </Suspense>
            }
          />
          <Route
            path="document-vms/*"
            element={
              <Suspense fallback={<>Loading...</>}>
                <DocumentVMS />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default Document;
