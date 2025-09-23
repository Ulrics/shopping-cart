import { createBrowserRouter } from "react-router";
import ErrorPage from "./routes/error";
import Homepage from "./routes/home";
import ShopPage from "./routes/shop";
import ItemPage from "./routes/item";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "shop",
        element: <ShopPage />,
    },
    {
        path: "shop/:itemtitle",
        element: <ItemPage />,
    }        
])

export default router;