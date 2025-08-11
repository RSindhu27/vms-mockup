import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import NavConfigure from "./NavConfigure";

const FrameworkLanding = lazy(() => import("./FrameworkLanding"));
const EditFramework = lazy(() => import("./EditFramework"));

function Framework() {
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
                <FrameworkLanding />
              </Suspense>
            }
          />
          <Route
            path="edit-framework"
            element={
              <Suspense fallback={<>Loading...</>}>
                <EditFramework />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default Framework;
