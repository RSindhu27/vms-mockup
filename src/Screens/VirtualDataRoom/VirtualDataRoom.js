import React, { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import VirtualDataRoomLanding from "./VirtualDataRoomLanding";
import EditDataRoom from "./EditDataRoom/EditDataRoom";
import NewDataRoom from "./NewDataRoom/NewDataRoom";

const NavConfigure = lazy(() => import("./NavConfigure"));

function VirtualDataRoom() {
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
          <Route index element={<Navigate to="virtual-data-room" replace />} />
          <Route
            path="virtual-data-room"
            element={
              <Suspense fallback={<>Loading...</>}>
                <VirtualDataRoomLanding />
              </Suspense>
            }
          />
          <Route
            path="edit-room"
            element={
              <Suspense fallback={<>Loading...</>}>
                <EditDataRoom />
              </Suspense>
            }
          />
          <Route
            path="create-room"
            element={
              <Suspense fallback={<>Loading...</>}>
               <NewDataRoom />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default VirtualDataRoom;
