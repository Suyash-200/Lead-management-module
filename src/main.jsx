import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToastProvider } from "./store/ToastContext.jsx";
import Toast from "./Components/Toast/Toast.jsx";
import { LoadingProvider } from "./store/LoadingContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastProvider>
      <LoadingProvider>
        <App />
        <Toast />
      </LoadingProvider>  
      </ToastProvider>
  </StrictMode>
);
