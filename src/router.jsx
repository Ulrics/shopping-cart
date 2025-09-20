import { createBrowserRouter } from "react-router";
import Homepage from "./homepage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
        /*
        children: [
            {
                
            }
        ]
        */
    }
])

export default router;