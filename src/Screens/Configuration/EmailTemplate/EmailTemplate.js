import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import NavConfigure from "./NavConfigure";

const EmailTemplateLanding = lazy(() => import("./EmailTemplateLanding"));
const EditEmailTemplate = lazy(() => import("./EditEmailTemplate"));

function EmailTemplate() {
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
                <EmailTemplateLanding />
              </Suspense>
            }
          />
          <Route
            path="edit-email-template"
            element={
              <Suspense fallback={<>Loading...</>}>
                <EditEmailTemplate />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default EmailTemplate;
