import React, { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const NavConfigure = lazy(() => import("./NavConfigure"));
const TemplateX = lazy(() => import("./TemplateX"));
const TemplateY = lazy(() => import("./TemplateY"));
const TemplateGroup = lazy(() => import("./TemplateGroup"));

function Template() {
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
          <Route index element={<Navigate to="template" replace />} />
          <Route
            path="template/*"
            element={
              <Suspense fallback={<>Loading...</>}>
                <TemplateX />
              </Suspense>
            }
          />
          <Route
            path="template-two/*"
            element={
              <Suspense fallback={<>Loading...</>}>
                <TemplateY />
              </Suspense>
            }
          />
          <Route
            path="template-group/*"
            element={
              <Suspense fallback={<>Loading...</>}>
                <TemplateGroup />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default Template;
