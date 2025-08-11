import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import NavConfigure from "./NavConfigure";

const DecisionTreeLanding = lazy(() => import("./DecisionTreeLanding"));
const EditDecisionTree = lazy(() => import("./EditDecisionTree"));

function DecisionTree() {
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
                <DecisionTreeLanding />
              </Suspense>
            }
          />
          <Route
            path="edit-decision-tree"
            element={
              <Suspense fallback={<>Loading...</>}>
                <EditDecisionTree />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default DecisionTree;
