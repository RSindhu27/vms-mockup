import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const NavConfigure = lazy(() => import("./NavConfigure"));
const ExecutionList = lazy(() => import("./ExecutionList"));
const EditExecution = lazy(() => import("./EditExecution"));

function ExecutionX() {
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
                <ExecutionList />
              </Suspense>
            }
          />
          <Route
            path="edit-execution"
            element={
              <Suspense fallback={<>Loading...</>}>
                <EditExecution />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default ExecutionX;
