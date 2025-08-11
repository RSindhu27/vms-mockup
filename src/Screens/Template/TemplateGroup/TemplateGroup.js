import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import NavConfigure from "./NavConfigure";

const TemplateGroupLanding = lazy(() => import("./TemplateGroupLanding"));
const EditTemplateGroup = lazy(() => import("./EditTemplateGroup"));

function TemplateGroup() {
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
                <TemplateGroupLanding />
              </Suspense>
            }
          />
          <Route
            path="edit-template-group"
            element={
              <Suspense fallback={<>Loading...</>}>
                <EditTemplateGroup />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default TemplateGroup;
