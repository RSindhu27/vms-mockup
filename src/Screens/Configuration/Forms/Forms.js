import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import NavConfigure from "./NavConfigure";

const FormLanding = lazy(() => import("./FormLanding"));
const EditForm = lazy(() => import("./EditForm"));

function Forms() {
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
                <FormLanding />
              </Suspense>
            }
          />
          <Route
            path="edit-form"
            element={
              <Suspense fallback={<>Loading...</>}>
                <EditForm />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default Forms;
