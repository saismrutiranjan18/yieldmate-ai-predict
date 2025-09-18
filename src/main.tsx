import { createRoot } from "react-dom/client";
import { LanguageProvider } from './contexts/LanguageContext';
import App from "./App.tsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")!).render(
  <LanguageProvider>
    <App />
  </LanguageProvider>
);
