// Import React.
import React from "react";

// Import ReactDOM to render the application.
import ReactDOM from "react-dom/client";

// Import App.js from the src folder.
import App from "./App";

// Import UserProvider from usercontext.js.
import { UserProvider } from "./context/usercontext";

// Import ThemeProvider from ThemeContext.js.
import { ThemeProvider } from "./context/ThemeContext";

// Create the React root.
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the application.
root.render(


    <UserProvider>

       
        <ThemeProvider>

            <App />

        </ThemeProvider>

    </UserProvider>

); 