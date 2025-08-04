import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CssBaseline } from "@mui/material";

import App from "./App.tsx";
import { StoreProvider } from "./stores/app-context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CssBaseline>
      <StoreProvider>
        <App />
      </StoreProvider>
    </CssBaseline>
  </StrictMode>
);
