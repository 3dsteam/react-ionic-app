import React from "react";
import ReactDOM from "react-dom/client";
import { setupIonicReact } from "@ionic/react";
import { Provider as ReduxProvider } from "react-redux";
import store from "@store/index.ts";
import App from "./App.tsx";
import "./global.scss";

setupIonicReact();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ReduxProvider store={store}>
            <App />
        </ReduxProvider>
    </React.StrictMode>,
);
