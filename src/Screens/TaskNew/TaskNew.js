import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const NavConfigure = lazy(() => import("./NavConfigure"));
const AssignTask = lazy(() => import("./AssignTask"));
const MyTask = lazy(() => import("./MyTask"));

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
          <Route index element={<Navigate to="my-task" replace />} />
          <Route
            path="my-task/*"
            element={
              <Suspense fallback={<>Loading...</>}>
                <MyTask />
              </Suspense>
            }
          />
          <Route
            path="assign-task/*"
            element={
              <Suspense fallback={<>Loading...</>}>
                <AssignTask />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default TaskNew;
