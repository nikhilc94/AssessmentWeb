import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";

import "./index.css";
import i18n from "./locales/i18n.tsx";
import Setup from "./setup/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <I18nextProvider i18n={i18n}>
    <Setup />
  </I18nextProvider>
);
