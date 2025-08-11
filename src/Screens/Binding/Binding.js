import React, { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import BindingLanding from "./BindingLanding";
import ObjectTypeName from "../Binding/ObjectTypeNameList/ObjectTypeName";
import ViewBinding from "./ViewBindingDetails/ViewBinding";

const NavConfigure = lazy(() => import("./NavConfigure"));

function Binding() {
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
          <Route index element={<Navigate to="binding" replace />} />
          <Route
            path="binding"
            element={
              <Suspense fallback={<>Loading...</>}>
                <BindingLanding />
              </Suspense>
            }
          />
          <Route
            path="view-object"
            element={
              <Suspense fallback={<>Loading...</>}>
                <ObjectTypeName />
              </Suspense>
            }
          />
          <Route
            path="view-details"
            element={
              <Suspense fallback={<>Loading...</>}>
                <ViewBinding />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default Binding;
