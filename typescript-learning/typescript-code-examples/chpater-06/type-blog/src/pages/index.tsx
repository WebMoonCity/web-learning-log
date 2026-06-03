import { createBrowserRouter } from "react-router-dom";
import MainPage from "./main.page";
import DetailPage from "./detail.page";
import PublishPage from "./publish.page";
import LoginPage from "./login.page";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
    },
    {
        path: "/publish",
        element: <PublishPage />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "detail/:postID",
        element: <DetailPage />,
    },
]);