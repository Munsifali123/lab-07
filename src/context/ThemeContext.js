// Import React and the functions needed for Context and state.
import React, { createContext, useState } from "react";

// Create a ThemeContext to share theme information.
export const ThemeContext = createContext();

// Create the ThemeProvider component.
export const ThemeProvider = ({ children }) => {

    // Create darkMode state and load its value from localStorage.
    const [darkMode, setDarkMode] = useState(() => {

        // Check if dark mode was previously saved.
        return localStorage.getItem("darkMode") === "true";

    }); // End darkMode state.

    // Create the function for changing the theme.
    const toggleTheme = () => {

        // Change the current theme value.
        setDarkMode((prev) => {

            // Reverse the current theme value.
            const newValue = !prev;

            // Save the new theme value in localStorage.
            localStorage.setItem("darkMode", newValue);

            // Return the new theme value.
            return newValue;

        }); // End setDarkMode.
    }; // End toggleTheme function.

    // Return the ThemeContext provider.
    return (

        // Provide theme data to all child components.
        <ThemeContext.Provider value={{ darkMode, toggleTheme }}>

            {/* Display the child components. */}
            {children}

        </ThemeContext.Provider>

    ); // End provider.
}; // End ThemeProvider.