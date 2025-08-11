import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import NavConfigure from "./NavConfigure";

const DocumentTypeLanding = lazy(() => import("./DocumentTypeLanding"));
const EditDocumentType = lazy(() => import("./EditDocumentType"));
const AutoLocationPath = lazy(() => import("./AutoLocationPath"));
const SelectTemplate = lazy(() => import("./SelectTemplate"));

function DocumentType() {
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
                <DocumentTypeLanding />
              </Suspense>
            }
          />
          <Route
            path="edit-document-type"
            element={
              <Suspense fallback={<>Loading...</>}>
                <EditDocumentType />
              </Suspense>
            }
          />
          <Route
            path="auto-location-path"
            element={
              <Suspense fallback={<>Loading...</>}>
                <AutoLocationPath />
              </Suspense>
            }
          />
          <Route
            path="select-template"
            element={
              <Suspense fallback={<>Loading...</>}>
                <SelectTemplate />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default DocumentType;
