import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const NavConfigure = lazy(() => import("./NavConfigure"));
const UserGroupLanding = lazy(() => import("./UserGroupLanding"));
const EditUserGroup = lazy(() => import("./EditUserGroup"));

function UserGroup() {
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
          <Route
            path="edit-user-group"
            element={
              <Suspense fallback={<>Loading...</>}>
                <EditUserGroup />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default UserGroup;
