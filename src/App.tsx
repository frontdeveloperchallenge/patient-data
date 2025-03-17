import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import Patients from "./pages/Patients/Patients";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Patients />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
