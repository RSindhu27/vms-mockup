import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import NavConfigure from "./NavConfigure";

const EntityTypeLanding = lazy(() => import("./EntityTypeLanding"));
const EditEntityType = lazy(() => import("./EditEntityType"));

function EntityType() {
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
                <EntityTypeLanding />
              </Suspense>
            }
          />
          <Route
            path="edit-entity-type"
            element={
              <Suspense fallback={<>Loading...</>}>
                <EditEntityType />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default EntityType;
