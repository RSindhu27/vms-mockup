import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import NavConfigure from "./NavConfigure";

const ChecklistLanding = lazy(() => import("./CategoryLanding"));
const EditCategory = lazy(() => import("./EditCategory"));

function Category() {
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
            path="edit-category"
            element={
              <Suspense fallback={<>Loading...</>}>
                <EditCategory />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default Category;
