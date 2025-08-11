import React, { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PrintManagerLanding from "./PrintManagerLanding";
import PrintEventLanding from "./PrintEventLanding";
import ViewPrintEvents from "./PrintEventManager/ViewPrintEvents";

const NavConfigure = lazy(() => import("./NavConfigure"));

function PrintManager() {
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
          <Route index element={<Navigate to="print-manager" replace />} />
          <Route
            path="print-manager"
            element={
              <Suspense fallback={<>Loading...</>}>
                <PrintManagerLanding />
              </Suspense>
            }
          />
          <Route index element={<Navigate to="print-event" replace />} />
          <Route
            path="print-event"
            element={
              <Suspense fallback={<>Loading...</>}>
                <PrintEventLanding />
              </Suspense>
            }
          />
          <Route
            path="view-event"
            element={
              <Suspense fallback={<>Loading...</>}>
                <ViewPrintEvents />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default PrintManager;
