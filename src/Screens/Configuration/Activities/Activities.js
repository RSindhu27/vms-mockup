import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import NavConfigure from "./NavConfigure";

const ActivitiesLanding = lazy(() => import("./ActivitiesLanding"));
const EditActivities = lazy(() => import("./EditActivities"));

function Activities() {
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
                <ActivitiesLanding />
              </Suspense>
            }
          />
          <Route
            path="edit-activities"
            element={
              <Suspense fallback={<>Loading...</>}>
                <EditActivities />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default Activities;
