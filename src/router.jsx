import { createBrowserRouter } from "react-router";
import ErrorPage from "./routes/error";
import Homepage from "./routes/home";
import ShopPage from "./routes/shop";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "shop",
        element: <ShopPage />,
        children: [
            {
                path: "shop/:item",
                /*
                element: <ItemPage />,
                */
            }
        ]
    }    
])

export default router;