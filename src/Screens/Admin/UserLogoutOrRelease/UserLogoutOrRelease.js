import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const NavConfigure = lazy(() => import("./NavConfigure"));
const UserGroupLanding = lazy(() => import("./UserGroupLanding"));

function UserLogoutOrRelease() {
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
                <UserGroupLanding />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default UserLogoutOrRelease;
