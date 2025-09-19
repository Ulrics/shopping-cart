import { createBrowserRouter, RouterProvider, } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
        children: [
            {

            }
        ]
    }
])