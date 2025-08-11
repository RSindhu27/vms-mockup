import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import NavConfigure from "./NavConfigure";

const MappingKeywordLanding = lazy(() => import("./MappingKeywordLanding"));
const EditMappingKeyword = lazy(() => import("./EditMappingKeyword"));

function MappingKeyword() {
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
                <MappingKeywordLanding />
              </Suspense>
            }
          />
          <Route
            path="edit-mapping-keyword"
            element={
              <Suspense fallback={<>Loading...</>}>
                <EditMappingKeyword />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default MappingKeyword;
