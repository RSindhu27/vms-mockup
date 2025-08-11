import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import NavConfigure from "./NavConfigure";

const ChecklistLanding = lazy(() => import("./ChecklistLanding"));
const EditChecklist = lazy(() => import("./EditChecklist"));

function Checklist() {
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
                <ChecklistLanding />
              </Suspense>
            }
          />
          <Route
            path="edit-checklist"
            element={
              <Suspense fallback={<>Loading...</>}>
                <EditChecklist />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default Checklist;
