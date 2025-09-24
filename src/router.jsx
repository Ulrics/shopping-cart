import { createBrowserRouter } from "react-router";
import ErrorPage from "./routes/error";
import Homepage from "./routes/home";
import ShopPage from "./routes/shop";
import ItemPage from "./routes/item";
import Root from "./root.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Homepage /> },
            {
                path: "shop",
                element: <ShopPage />,
            },
            {
                path: "shop/:itemtitle",
                element: <ItemPage />,
            }
        ]
    },        
])

export default router;