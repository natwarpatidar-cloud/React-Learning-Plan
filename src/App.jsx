import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import Cart from "./tasks/task10/Cart";
import CustomErrorBoundary from "./tasks/task1/CustomErrorBoundary";
import Page from "./tasks/Task11/Page";
import { UserContextProvider } from "./tasks/Task11/UserContext";
import Email from "./tasks/Task11/Email";
import RenderList from "./tasks/task12/RenderList";

const AddCommentButton = React.lazy(() => import("./tasks/task1/AddComment"));
const Parent = React.lazy(() => import("./tasks/task2/Parent"));
const ChatScreen = React.lazy(() => import('./tasks/task3/ChatScreen'));
const VirtualizedList = React.lazy(() => import("./tasks/task8/List"));
const Search = React.lazy(() => import("./tasks/task7/SearchComponent"));
const ThemeToggle = React.lazy(() => import("./tasks/task4/ThemeToggle"));
const FormWizard = React.lazy(() => import("./tasks/task5/FormWizard"));
const ModalPage = React.lazy(() => import('./tasks/task6/ModalPage'));
const Tasks = React.lazy(() => import('./tasks/Tasks'));

function App() {
  return (
    <CustomErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Tasks />} />
          <Route path="/custom-error-boundary" element={<AddCommentButton />} />
          <Route path="/performance-optimization" element={<Parent />} />
          <Route path="/check-user-status" element={<ChatScreen />} />
          <Route path="/theme-toggle" element={<ThemeToggle />} />
          <Route path="/form-wizard" element={<FormWizard />} />
          <Route path="/compound-component" element={<ModalPage />} />
          <Route path="/debounced-input" element={<Search />} />
          <Route path="/infinite-scroll" element={<VirtualizedList />} />
          <Route path="/shopping-cart" element={<Cart />} />
          <Route path="/context-optimization" element={<>
            <Page /> <Email/>
          </>} />
          <Route path="/render-prop" element={<RenderList />} />
        </Routes>
        </UserContextProvider>
      </Suspense>
    </CustomErrorBoundary>
  );
}

export default App;