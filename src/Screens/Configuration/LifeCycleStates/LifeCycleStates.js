import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import NavConfigure from "./NavConfigure";

const LifeCycleStatesLanding = lazy(() => import("./LifeCycleStatesLanding"));
const EditLifeCycleStates = lazy(() => import("./EditLifeCycleStates"));

function LifeCycleStates() {
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
                <LifeCycleStatesLanding />
              </Suspense>
            }
          />
          <Route
            path="edit-life-cycle-states"
            element={
              <Suspense fallback={<>Loading...</>}>
                <EditLifeCycleStates />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default LifeCycleStates;
