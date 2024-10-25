import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegistrationPage from "./pages/RegistrationPage";
import ExamPage from "./pages/ExamPage";
import GraduationPage from "./pages/GraduationPage";
import ClearancePage from "./pages/ClearancePage";
import PaymentPage from "./ui/PaymentPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/exam" element={<ExamPage />} />
        <Route path="/graduation" element={<GraduationPage />} />
        <Route path="/clearance" element={<ClearancePage />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
