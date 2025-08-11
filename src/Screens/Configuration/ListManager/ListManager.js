import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const NavConfigure = lazy(() => import("./NavConfigure"));
const ListManagerLanding = lazy(() => import("./ListManagerLanding"));
const EditPickList = lazy(() => import("./EditPickList"));

function ListManager() {
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
                <ListManagerLanding />
              </Suspense>
            }
          />
          <Route
            path="edit-pick-list"
            element={
              <Suspense fallback={<>Loading...</>}>
                <EditPickList />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default ListManager;
