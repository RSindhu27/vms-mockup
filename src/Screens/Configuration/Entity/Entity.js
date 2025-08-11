import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import NavConfigure from "./NavConfigure";

const EntityLanding = lazy(() => import("./EntityLanding"));
const EditEntity = lazy(() => import("./EditEntity"));

function Entity() {
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
                <EntityLanding />
              </Suspense>
            }
          />
          <Route
            path="edit-entity"
            element={
              <Suspense fallback={<>Loading...</>}>
                <EditEntity />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default Entity;
