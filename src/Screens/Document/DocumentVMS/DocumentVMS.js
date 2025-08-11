import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const NavConfigure = lazy(() => import("./NavConfigure"));

const DocumentLanding = lazy(() => import("./DocumentLanding"));
const EditDocument = lazy(() => import("./EditDocument"));
const DocumentView = lazy(() => import("./DocumentView"));

function DocumentX() {
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
                <DocumentLanding />
              </Suspense>
            }
          />
          <Route
            path="edit-document"
            element={
              <Suspense fallback={<>Loading...</>}>
                <EditDocument />
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

export default DocumentX;
