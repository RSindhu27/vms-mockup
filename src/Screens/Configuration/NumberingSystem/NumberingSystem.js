import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import NavConfigure from "./NavConfigure";

const NumberingSystemLanding = lazy(() => import("./NumberingSystemLanding"));
const EditNumberingSystem = lazy(() => import("./EditNumberingSystem"));

function NumberingSystem() {
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
                <NumberingSystemLanding />
              </Suspense>
            }
          />
          <Route
            path="edit-numbering-system"
            element={
              <Suspense fallback={<>Loading...</>}>
                <EditNumberingSystem />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default NumberingSystem;
