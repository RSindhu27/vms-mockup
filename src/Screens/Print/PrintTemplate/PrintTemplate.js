import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import NavConfigure from "./NavConfigure";

const PrintTemplateLanding = lazy(() => import("./PrintTemplateLanding"));
const EditPrintTemplate = lazy(() => import("./EditPrintTemplate"));

function PrintTemplate() {
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
                <PrintTemplateLanding />
              </Suspense>
            }
          />
          <Route
            path="edit-print-template"
            element={
              <Suspense fallback={<>Loading...</>}>
                <EditPrintTemplate />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default PrintTemplate;
