import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TermsAndConditions from "../features/legal/components/TermsAndConditions.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TermsAndConditions />
  </StrictMode>,
);
