import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Landing } from "./pages/Landing";
import { PrivacyPage } from "./pages/Privacy";
import { TermsPage } from "./pages/Terms";
import { AccountDeletionPage } from "./pages/AccountDeletion";
import { ConfirmEmailPage } from "./pages/ConfirmEmail";
import { CartonPage } from "./pages/CartonPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/privacidad" element={<PrivacyPage />} />
          <Route path="/terminos" element={<TermsPage />} />
          <Route path="/eliminar-cuenta" element={<AccountDeletionPage />} />
          <Route path="/confirm-email/:token" element={<ConfirmEmailPage />} />
          <Route path="/carton" element={<CartonPage />} />
          <Route path="/carton/:shareId" element={<CartonPage />} />
          <Route path="*" element={<Landing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
