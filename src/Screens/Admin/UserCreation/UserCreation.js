import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const NavConfigure = lazy(() => import("./NavConfigure"));
const UserCreationLanding = lazy(() => import("./UserCreationLanding"));
const EditUser = lazy(() => import("./EditUser"));

function UserCreation() {
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
                <UserCreationLanding />
              </Suspense>
            }
          />
          <Route
            path="edit-user"
            element={
              <Suspense fallback={<>Loading...</>}>
                <EditUser />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default UserCreation;
