import {createBrowserRouter} from "react-router"
import Login from "./features/auth/pages/login"
import Register from "./features/auth/pages/register"
/**
 * createbrowserrouter needs a routes array 
 */
export const router = createBrowserRouter([
    {
        path:"/",
        element: <div>Home</div>
    }, 
    {
        path:"/login",
        element: <Login/>
    },
    {
        path:"/register",
        element:<Register/>
    }
])