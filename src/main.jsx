import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./App.jsx";
import "./index.css";
import { SiteProvider } from "./context/SiteContext.js";
import { GramsProvider } from "./context/GramsContext.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <SiteProvider value={{ cleanerThan: 0 }}>
        <GramsProvider>
          <App />
        </GramsProvider>
      </SiteProvider>

      {process.env.NODE_ENV === "development" && <ReactQueryDevtools />}
    </QueryClientProvider>
  </React.StrictMode>
);
