import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import theme from "./theme.tsx";
import { IMockDatabase, mockDatabase } from "./mocks/MockDatabase.ts";
import "./index.css";

export const MockDatabaseContext = createContext<IMockDatabase>(mockDatabase);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MockDatabaseContext.Provider value={mockDatabase}>
          <App />
        </MockDatabaseContext.Provider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
