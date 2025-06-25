import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./routes/Routes";
import { RouterProvider } from "react-router";

import AuthProvider from "./providers/AuthProvider";
import ThemeProvider from "./providers/ThemeProvider";
import ScrollProvider from "./providers/ScrollProvider";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ScrollProvider>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </ScrollProvider>
    </AuthProvider>
  </StrictMode>
);
