import React, { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme/Theme";
import { FormLoading, PageLoading, SubLoading } from "./Components/Loading";

const Navigation = lazy(() => import("./Containers/Navigation"));
const Landing = lazy(() => import("./Containers/Landing"));
const Task = lazy(() => import("./Screens/Task"));
const Login = lazy(() => import("./Screens/Login"));
const Admin = lazy(() => import("./Screens/Admin"));
const Print = lazy(() => import("./Screens/Print"));
const System = lazy(() => import("./Screens/System"));
const TaskNew = lazy(() => import("./Screens/TaskNew"));
const Reports = lazy(() => import("./Screens/Reports"));
const Document = lazy(() => import("./Screens/Document"));
const Template = lazy(() => import("./Screens/Template"));
const Workflow = lazy(() => import("./Screens/Workflow"));
const Execution = lazy(() => import("./Screens/Execution"));
const Dashboard = lazy(() => import("./Screens/Dashboard"));
const Repository = lazy(() => import("./Screens/Repository"));
const Configuration = lazy(() => import("./Screens/Configuration"));
const ForgotPassword = lazy(() => import("./Screens/ForgotPassword"));
const Binding = lazy(() => import("./Screens/Binding"));
const VirtualDataRoom = lazy(() => import("./Screens/VirtualDataRoom"));
const PrintManager = lazy(() => import("./Screens/PrintManager"));
const TraceabilityMatrix = lazy(() => import("./Screens/TraceabilityMatrix"));

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<PageLoading />}>
                <Landing />
              </Suspense>
            }
          >
            <Route
              index
              element={
                <Suspense fallback={<FormLoading />}>
                  <Login />
                </Suspense>
              }
            />
            <Route
              path="/forgot-password"
              element={
                <Suspense fallback={<FormLoading />}>
                  <ForgotPassword />
                </Suspense>
              }
            />
          </Route>
          <Route
            path="/app"
            element={
              <Suspense fallback={<PageLoading />}>
                <Navigation />
              </Suspense>
            }
          >
            <Route index element={<Navigate to="dashboard" />} />
            <Route
              path="dashboard"
              element={
                <Suspense fallback={<SubLoading />}>
                  <Dashboard />
                </Suspense>
              }
            />
            <Route
              path="admin/*"
              element={
                <Suspense fallback={<SubLoading />}>
                  <Admin />
                </Suspense>
              }
            />
            <Route
              path="configuration/*"
              element={
                <Suspense fallback={<SubLoading />}>
                  <Configuration />
                </Suspense>
              }
            />
            <Route
              path="system/*"
              element={
                <Suspense fallback={<SubLoading />}>
                  <System />
                </Suspense>
              }
            />
            <Route
              path="workflow/*"
              element={
                <Suspense fallback={<SubLoading />}>
                  <Workflow />
                </Suspense>
              }
            />
            <Route
              path="repository/*"
              element={
                <Suspense fallback={<SubLoading />}>
                  <Repository />
                </Suspense>
              }
            />
            <Route
              path="template/*"
              element={
                <Suspense fallback={<SubLoading />}>
                  <Template />
                </Suspense>
              }
            />
            <Route
              path="document/*"
              element={
                <Suspense fallback={<SubLoading />}>
                  <Document />
                </Suspense>
              }
            />
            <Route
              path="reports"
              element={
                <Suspense fallback={<SubLoading />}>
                  <Reports />
                </Suspense>
              }
            />
            <Route
              path="binding/*"
              element={
                <Suspense fallback={<SubLoading />}>
                  <Binding />
                </Suspense>
              }
            />
            <Route
              path="print/*"
              element={
                <Suspense fallback={<SubLoading />}>
                  <Print />
                </Suspense>
              }
            />
            <Route
              path="print-manager/*"
              element={
                <Suspense fallback={<SubLoading />}>
                  <PrintManager />
                </Suspense>
              }
            />
            <Route
              path="virtual-data-room/*"
              element={
                <Suspense fallback={<SubLoading />}>
                  <VirtualDataRoom />
                </Suspense>
              }
            />
            <Route
              path="trace-matrix/*"
              element={
                <Suspense fallback={<SubLoading />}>
                  <TraceabilityMatrix />
                </Suspense>
              }
            />
            <Route
              path="task/*"
              element={
                <Suspense fallback={<SubLoading />}>
                  <Task />
                </Suspense>
              }
            />
            <Route
              path="task-new/*"
              element={
                <Suspense fallback={<SubLoading />}>
                  <TaskNew />
                </Suspense>
              }
            />
            <Route
              path="execution/*"
              element={
                <Suspense fallback={<SubLoading />}>
                  <Execution />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
