import {createBrowserRouter} from "react-router"
import Login from "./features/auth/pages/login"
import Register from "./features/auth/pages/register"
import Protected from "./features/auth/components/Protected"
/**
 * createbrowserrouter needs a routes array 
 */
export const router = createBrowserRouter([
    {
        path:"/",
        element: <Protected><div>Home</div></Protected>
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