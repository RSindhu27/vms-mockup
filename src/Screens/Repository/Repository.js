import React, { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const NavConfigure = lazy(() => import("./NavConfigure"));
const RepositoryX = lazy(() => import("./RepositoryX"));

function Repository() {
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
          <Route index element={<Navigate to="repository" replace />} />
          <Route
            path="repository/*"
            element={
              <Suspense fallback={<>Loading...</>}>
                <RepositoryX />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default Repository;
