import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Blogs from "./Blogs";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import Quizes from "./Quizes";
import Statistics from "./Statistics";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
                element: <Home />
            },
            { path: 'quizes', element: <Quizes /> },
            { path: 'statistics', element: <Statistics /> },
            { path: 'blogs', element: <Blogs /> }
        ],

    }
])