import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import NavConfigure from "./NavConfigure";

const AssessmentTemplateLanding = lazy(
  () => import("./AssessmentTemplateLanding")
);
const EditAssessmentTemplate = lazy(() => import("./EditAssessmentTemplate"));
const ViewAssessmentTemplate = lazy(() => import("./ViewAssessmentTemplate"));

function AssessmentTemplate() {
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
                <AssessmentTemplateLanding />
              </Suspense>
            }
          />
          <Route
            path="edit-assessment-template"
            element={
              <Suspense fallback={<>Loading...</>}>
                <EditAssessmentTemplate />
              </Suspense>
            }
          />
          <Route
            path="view-assessment-template"
            element={
              <Suspense fallback={<>Loading...</>}>
                <ViewAssessmentTemplate />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default AssessmentTemplate;
