import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const NavConfigure = lazy(() => import("./NavConfigure"));
const ExecutionX = lazy(() => import("./ExecutionX"));

function TaskNew() {
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
          <Route index element={<Navigate to="execution" replace />} />
          <Route
            path="execution/*"
            element={
              <Suspense fallback={<>Loading...</>}>
                <ExecutionX />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default TaskNew;
