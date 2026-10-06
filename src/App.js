// Import React and the required React Hooks.
import React, { useContext, useEffect, useState } from "react";

import { UserContext } from "./context/usercontext";
import { ThemeContext } from "./context/ThemeContext";

// Create the main App component.
function App() {

    // Get login information from UserContext.
    const { loggedIn, login, logout } = useContext(UserContext);

    // Get theme information from ThemeContext.
    const { darkMode, toggleTheme } = useContext(ThemeContext);

    // Create state to store users received from the API.
    const [users, setUsers] = useState([]);

    // useEffect runs when the component first loads.
    useEffect(() => {

        // Send a request to the JSONPlaceholder API.
        fetch("https://jsonplaceholder.typicode.com/users")

            // Convert the API response into JSON.
            .then((response) => response.json())

            // Store the received users in the users state.
            .then((data) => setUsers(data))

            // Display an error if the API request fails.
            .catch((error) => console.log(error));

    // Empty array means this runs only once when the component mounts.
    }, []);

    // Get the first user from the API data.
    const user = users[0];

    // Return the application interface.
    return (

        // Main container for the application.
        <div

            // Add inline CSS based on the selected theme.
            style={{

                // Make the page at least the full screen height.
                minHeight: "100vh",

                // Set background color based on the theme.
                backgroundColor: darkMode ? "#222" : "#fff",

                // Set text color based on the theme.
                color: darkMode ? "#fff" : "#222",

                // Add space around the content.
                padding: "30px",

            }} // End style.
        >

            {/* Display the application title. */}
            <h1>User Authentication App</h1>

            {/* Button for changing between light and dark mode. */}
            <button onClick={toggleTheme}>

                {/* Display the correct button text. */}
                {darkMode ? "Light Mode" : "Dark Mode"}

            </button>

            {/* Add space between buttons. */}
            <br />

            {/* Add another line break. */}
            <br />

            {/* Check whether the user is logged in. */}
            {!loggedIn ? (

                // Show Login button when the user is logged out.
                <button onClick={login}>

                    {/* Login button text. */}
                    Login

                </button>

            ) : (

                // Show logged-in content.
                <>

                    {/* Show Logout button. */}
                    <button onClick={logout}>

                        {/* Logout button text. */}
                        Logout

                    </button>

                    {/* Check if API user data is available. */}
                    {user && (

                        // Display the user's name.
                        <h2>

                            {/* Show the name received from the API. */}
                            Welcome, {user.name}

                        </h2>

                    )}

                </>

            )}

        </div>

    ); // End return.
} // End App component.

// Export App so it can be used in index.js.
export default App;