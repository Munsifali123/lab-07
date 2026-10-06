// Import React and the functions needed to create Context and manage state.
import React, { createContext, useState } from "react";

// Create a UserContext to share login information across components.
export const UserContext = createContext();

// Create the UserProvider component.
export const UserProvider = ({ children }) => {

    // Create loggedIn state and load its value from localStorage.
    const [loggedIn, setLoggedIn] = useState(() => {

        // Check if "loggedIn" is saved as "true" in localStorage.
        return localStorage.getItem("loggedIn") === "true";

    }); // End loggedIn state.

    // Create the login function.
    const login = () => {

        // Change the login state to true.
        setLoggedIn(true);

        // Save the login state in localStorage.
        localStorage.setItem("loggedIn", "true");

    }; // End login function.

    // Create the logout function.
    const logout = () => {

        // Change the login state to false.
        setLoggedIn(false);

        // Save the logout state in localStorage.
        localStorage.setItem("loggedIn", "false");

    }; // End logout function.

    // Return the UserContext provider.
    return (

        // Provide login data to all child components.
        <UserContext.Provider value={{ loggedIn, login, logout }}>

            {/* Display the child components. */}
            {children}

        </UserContext.Provider>

    ); // End provider.
}; // End UserProvider.