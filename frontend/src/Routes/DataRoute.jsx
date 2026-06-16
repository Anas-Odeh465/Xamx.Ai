import CheckEmail from "../Pages/Login/CheckEmail";
import LoginOrRegister from "../Pages/Login/LoginOrRegister";
import ChatTest from "../Pages/Test_chat/chattest";
import LoginTest from "../Pages/Test/LoginTest";
import Home from "../Pages/Home/Home";

export const dataRoute = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/chat-test",
        element: <ChatTest />
    },
    {
        path: "/login",
        element: <CheckEmail />
    },
    {
        path: "/login/password",
        element: <LoginOrRegister />
    },
    {
        path: "/create-account/password",
        element: <LoginOrRegister />
    },
    {
        path: "/test/page-test",
        element: <LoginTest />
    },
]