import Main from "./Layout/Main";
import Login from "./components/Login/Login";
import Checkout from "./components/Pages/Checkout/Checkout";
import Home from "./components/Pages/Home/Home";
import Register from "./components/Register/Register";
import Orders from "./components/Pages/Orders/Orders";
import ErrorPage from "./components/Pages/ErrorPage/ErrorPage";
import PrivateRoute from "./Routes/PrivateRoute";


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
                path: '/cakes/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/cakes/${params.id}`),
                element: <Checkout></Checkout>
            },
            {
                path: '/orders',
                element: <PrivateRoute><Orders></Orders></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            }

        ],
    }
])