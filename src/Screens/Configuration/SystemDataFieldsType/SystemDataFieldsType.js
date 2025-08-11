import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import NavConfigure from "./NavConfigure";

const SystemDataFieldsTypeLanding = lazy(
  () => import("./SystemDataFieldsTypeLanding")
);
const EditSystemDataFieldsType = lazy(
  () => import("./EditSystemDataFieldsType")
);

function SystemDataFieldsType() {
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
                <SystemDataFieldsTypeLanding />
              </Suspense>
            }
          />
          <Route
            path="edit-system-data-fields-types"
            element={
              <Suspense fallback={<>Loading...</>}>
                <EditSystemDataFieldsType />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default SystemDataFieldsType;
