import Home from "./pages/Home/Home.jsx";
import LogIn from "./pages/Log/LogIn.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/log" element={<LogIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
