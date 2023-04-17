# Rent Cars

Rent Cars is a web application built using React. The application allows users to perform various actions, such as creating and deleting items, and viewing details about those items.

# Installation and Setup

To run the application, follow these steps:

-   Clone the repository from GitHub.
-   Install the necessary dependencies using `npm i`.
-   Start the server-side API by running `npm run dev`.
-   Start the client-side application by running `npm start`.

# Usage

There are guests and users.

## Guests

They can:

-   Browse the catalog.
-   Look up the details of each item.
-   Register to become users.

## Users

They gain access to:

-   Create items for the catalog.
-   Edit their own items.
-   Delete their own items.
-   Favourite other users' items.
-   Look up all favourited items.

# Folder Structure

The client-side code is organized into several folders, each serving a specific purpose:

-   `src/components`: Contains all components (exepct context).
-   `src/components/common`: Contains all components used by other components.
-   `src/contexts`: Contains all contexts.
-   `src/hooks`: Contains all custom hooks.
-   `src/services`: Contains all HTTP requests to the server.
-   `src/utils`: Contains utility functions.

# Components

The web application uses several components to create the user interface.

-   `App`: The root component of the application, which renders all the other components.
-   `Header`: Renders the navigation links.
-   `Footer`: Renders a sentance.
-   `Home`: Renders the hom page for the application.
-   `Register`: Renders the register form.
-   `Login`: Renders the login form.
-   `Catalog`: Renders all items retrieved from the server with basic information about them.
-   `CarDetails`: Renders all information about a specific item retrieved from the server.Based on authorization and authentication gives access to 3 buttons(Edit,Delete,Favourite).
-   `EditCar`: Renders the edit form.
-   `Favourites`: Renders all items retrieved from the server that belong to a specific user.
-   `ErrorMessage`: Renders an error message upon failed validation.

# Routing

The application uses React Router for client-side routing, allowing users to navigate between different pages of the application without having to refresh the page. The routing configuration can be found in the src/App.js file.

# API Requests

The application uses `src/services/request.js` to communicate with the server-side API. The API requests are handled by functions, which return Promises that resolve with the API response data.

# Styling

The application uses CSS for styling, with styles defined in separate CSS files for each component. The CSS files can be found in the same folder as their corresponding components.

# Validation

The application uses `src/utils/validator` to validate input from the user.
