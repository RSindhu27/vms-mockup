import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const NavConfigure = lazy(() => import("./NavConfigure"));
const HardcopyLanding = lazy(() => import("./HardcopyLanding"));

function HardcopyManagement() {
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
                <HardcopyLanding />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default HardcopyManagement;
