import SetupProfile from "../pages/login/SetupProfile";
import SessionEnds from "../pages/session/SessionEnds";
import ChatTest from "../pages/test-chat/ChatTest";
import Verify from "../pages/verify/Verify";
import LoginTest from "../pages/test/LoginTest";
import Register from "../pages/login/Register";
import Login from "../pages/login/Login";
import Email from "../pages/login/Email";
import Home from "../pages/home/Home";

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
        element: <Email />
    },
    {
        path: "/login/password",
        element: <Login />
    },
    {
        path: "/create-account/password",
        element: <Register />
    },
    {
        path: "/test/page-test",
        element: <LoginTest />
    },
    {
        path: "/create-account/verify-email",
        element: <Verify />
    },
    {
        path: "/create-account/setup-profile",
        element: <SetupProfile />
    },
    {
        path: "/log-in-or-new-account/user=email",
        element: <SessionEnds />
    }
]