import Chat from "./Chat";
import Login from "./Login";

import { CHAT_ROUTE, LOGIN_ROUTE} from "./utils/consts";


export const publicRoutes= [
    {
       path: LOGIN_ROUTE,
       Component: Login
    }
]
export const privetRoutes = [
    {
        path:CHAT_ROUTE,
        Component: Chat
    }
]




