import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import NavConfigure from "./NavConfigure";
import ViewTemplate from "./ViewTemplate";

const TemplateLanding = lazy(() => import("./TemplateLanding"));
const EditTemplate = lazy(() => import("./EditTemplate"));

function TemplateY() {
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
                <TemplateLanding />
              </Suspense>
            }
          />
          <Route
            path="edit-template"
            element={
              <Suspense fallback={<>Loading...</>}>
                <EditTemplate />
              </Suspense>
            }
          />
          <Route
            path="view-template"
            element={
              <Suspense fallback={<>Loading...</>}>
                <ViewTemplate />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default TemplateY;
