import { Route, Routes } from "react-router-dom";
import Page404 from "./pages/Page404";
import DesktopPage from "./pages/DesktopPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DesktopPage />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
