import Main from "./Layout/Main";
import Login from "./components/Login/Login";
import Home from "./components/Pages/Home/Home";
import Register from "./components/Register/Register";

const { createBrowserRouter } = require("react-router-dom");


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }

        ],
    }
])