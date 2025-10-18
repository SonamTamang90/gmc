import { BrowserRouter, Route, Routes } from "react-router";
import GlobalLayout from "./components/layouts/GlobalLayout";
import Landing from "./pages/landing";
import { useLenis } from "./hooks/useLenis";

const App = () => {
  // Initialize Lenis smooth scrolling
  useLenis();

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GlobalLayout />}>
          <Route index path="/" element={<Landing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
