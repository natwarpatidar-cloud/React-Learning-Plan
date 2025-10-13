import { Route, Routes } from "react-router-dom";
import { CustomErrorBoundary } from "./tasks/task1/CustomErrorBoundary";
import { Tasks } from "./tasks/Tasks";
import AddCommentButton from "./tasks/task1/AddComment";
import { Parent } from "./tasks/task2/Parent";
import { ChatScreen } from "./tasks/task3/ChatScreen";
import { ThemeToggle } from "./tasks/task4/ThemeToggle";
import { FormWizard } from "./tasks/task5/FormWizard";
import { ModalPage } from "./tasks/task6/ModalPage";
import { Search } from "./tasks/task7/SearchComponent";
import { VirtualizedList } from "./tasks/task8/List";

function App() {
  return (
    <CustomErrorBoundary>
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
      </Routes>
    </CustomErrorBoundary>
  );
}

export default App;
