import React, { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const NavConfigure = lazy(() => import("./NavConfigure"));
const BusinessUnitTheme = lazy(() => import("./BusinessUnitTheme"));
const Role = lazy(() => import("./Role"));
const UserCreation = lazy(() => import("./UserCreation"));
const UserGroup = lazy(() => import("./UserGroup"));
const UserLogoutOrRelease = lazy(() => import("./UserLogoutOrRelease"));

function Admin() {
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
            element={<Navigate to="business-unit-theme" replace />}
          />
          <Route
            path="business-unit-theme"
            element={
              <Suspense fallback={<>Loading...</>}>
                <BusinessUnitTheme />
              </Suspense>
            }
          />
          <Route
            path="role/*"
            element={
              <Suspense fallback={<>Loading...</>}>
                <Role />
              </Suspense>
            }
          />
          <Route
            path="user-creation/*"
            element={
              <Suspense fallback={<>Loading...</>}>
                <UserCreation />
              </Suspense>
            }
          />
          <Route
            path="user-group/*"
            element={
              <Suspense fallback={<>Loading...</>}>
                <UserGroup />
              </Suspense>
            }
          />
          <Route
            path="user-logout-release/*"
            element={
              <Suspense fallback={<>Loading...</>}>
                <UserLogoutOrRelease />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default Admin;
