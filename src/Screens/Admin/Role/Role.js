import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const NavConfigure = lazy(() => import("./NavConfigure"));
const RoleLanding = lazy(() => import("./RoleLanding"));
const EditRole = lazy(() => import("./EditRole"));

function Role() {
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
                <RoleLanding />
              </Suspense>
            }
          />
          <Route
            path="edit-role"
            element={
              <Suspense fallback={<>Loading...</>}>
                <EditRole />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default Role;
