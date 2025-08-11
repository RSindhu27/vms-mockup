import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const NavConfigure = lazy(() => import("./NavConfigure"));

const TemplateLanding = lazy(() => import("./TemplateLanding"));
const EditTemplate = lazy(() => import("./EditTemplate"));
const TemplateView = lazy(() => import("./TemplateView"));

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
                <TemplateLanding />
              </Suspense>
            }
          />
          <Route
            path="edit-template"
            element={
              <Suspense fallback={<>Loading...</>}>
                <EditTemplate />
              </Suspense>
            }
          />
          <Route
            path="template-view"
            element={
              <Suspense fallback={<>Loading...</>}>
                <TemplateView />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default DocumentX;
