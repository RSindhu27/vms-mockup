import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Activities from "./Activities";
import { Checklist } from "./Checklist";

const NavConfigure = lazy(() => import("./NavConfigure"));

const ListManager = lazy(() => import("./ListManager"));
const SystemDataFieldsType = lazy(() => import("./SystemDataFieldsType"));
const DocumentType = lazy(() => import("./DocumentType"));
const NumberingSystem = lazy(() => import("./NumberingSystem"));
const LifeCycleStates = lazy(() => import("./LifeCycleStates"));
const WorkflowType = lazy(() => import("./WorkflowType"));
const EmailTemplate = lazy(() => import("./EmailTemplate"));
const Category = lazy(() => import("./Category"));
const Forms = lazy(() => import("./Forms"));
const Framework = lazy(() => import("./Framework"));
const DecisionTree = lazy(() => import("./DecisionTree"));
const EntityType = lazy(() => import("./EntityType"));
const MappingKeyword = lazy(() => import("./MappingKeyword"));
const AssessmentTemplate = lazy(() => import("./AssessmentTemplate"));
const WorkFlowTypeNew = lazy(() => import("./WorkFlowTypeNew"));
const Entity = lazy(() => import("./Entity"));

function Configuration() {
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
          <Route index element={<Navigate to="list-manager" replace />} />
          <Route
            path="list-manager/*"
            element={
              <Suspense fallback={<>Loading...</>}>
                <ListManager />
              </Suspense>
            }
          />
          <Route
            path="system-data-fields-types/*"
            element={
              <Suspense fallback={<>Loading...</>}>
                <SystemDataFieldsType />
              </Suspense>
            }
          />
          <Route
            path="numbering-system/*"
            element={
              <Suspense fallback={<>Loading...</>}>
                <NumberingSystem />
              </Suspense>
            }
          />
          <Route
            path="document-type/*"
            element={
              <Suspense fallback={<>Loading...</>}>
                <DocumentType />
              </Suspense>
            }
          />
          <Route
            path="life-cycle-states/*"
            element={
              <Suspense fallback={<>Loading...</>}>
                <LifeCycleStates />
              </Suspense>
            }
          />
          <Route
            path="activities/*"
            element={
              <Suspense fallback={<>Loading...</>}>
                <Activities />
              </Suspense>
            }
          />
          <Route
            path="checklist/*"
            element={
              <Suspense fallback={<>Loading...</>}>
                <Checklist />
              </Suspense>
            }
          />
          <Route
            path="workflow-type/*"
            element={
              <Suspense fallback={<>Loading...</>}>
                <WorkflowType />
              </Suspense>
            }
          />
          <Route
            path="email-template/*"
            element={
              <Suspense fallback={<>Loading...</>}>
                <EmailTemplate />
              </Suspense>
            }
          />
          <Route
            path="category/*"
            element={
              <Suspense fallback={<>Loading...</>}>
                <Category />
              </Suspense>
            }
          />
          <Route
            path="forms/*"
            element={
              <Suspense fallback={<>Loading...</>}>
                <Forms />
              </Suspense>
            }
          />
          <Route
            path="framework/*"
            element={
              <Suspense fallback={<>Loading...</>}>
                <Framework />
              </Suspense>
            }
          />
          <Route
            path="decision-tree/*"
            element={
              <Suspense fallback={<>Loading...</>}>
                <DecisionTree />
              </Suspense>
            }
          />
          <Route
            path="entity-type/*"
            element={
              <Suspense fallback={<>Loading...</>}>
                <EntityType />
              </Suspense>
            }
          />
          <Route
            path="mapping-keyword/*"
            element={
              <Suspense fallback={<>Loading...</>}>
                <MappingKeyword />
              </Suspense>
            }
          />
          <Route
            path="assessment-template/*"
            element={
              <Suspense fallback={<>Loading...</>}>
                <AssessmentTemplate />
              </Suspense>
            }
          />
          <Route
            path="workflow-type-new/*"
            element={
              <Suspense fallback={<>Loading...</>}>
                <WorkFlowTypeNew />
              </Suspense>
            }
          />
          <Route
            path="entity/*"
            element={
              <Suspense fallback={<>Loading...</>}>
                <Entity />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default Configuration;
