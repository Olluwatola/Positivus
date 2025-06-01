import "./App.css";
import Home from "./pages/Home.tsx";
import AppLayout from "./layout/AppLayout.tsx"
import { Routes, Route } from "react-router-dom";

function App() {


  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
