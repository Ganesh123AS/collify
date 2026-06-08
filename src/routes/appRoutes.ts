import { createBrowserRouter } from "react-router";
import Homepage from "../features/Homepage/Homepage";

export const appRoutes = createBrowserRouter([
    {
        path: '/',
        Component: Homepage,

    }
])