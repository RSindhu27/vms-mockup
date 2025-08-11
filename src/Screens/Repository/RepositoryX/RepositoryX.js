import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const NavConfigure = lazy(() => import("./NavConfigure"));

const ViewRepositories = lazy(() => import("./ViewRepositories"));
const DocumentView = lazy(() => import("./DocumentView"));

function RepositoryX() {
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
                <ViewRepositories />
              </Suspense>
            }
          />
          <Route
            path="document-view"
            element={
              <Suspense fallback={<>Loading...</>}>
                <DocumentView />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default RepositoryX;
