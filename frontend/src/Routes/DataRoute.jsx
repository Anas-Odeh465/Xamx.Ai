import SetupProfile from "../pages/login/SetupProfile";
import ChatTest from "../pages/test-chat/ChatTest";
import VerifyEmail from "../pages/verify/Verify";
import LoginTest from "../pages/test/LoginTest";
import Register from "../pages/login/Register";
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
        path: "/create-account/password",
        element: <Register />
    },
    {
        path: "/test/page-test",
        element: <LoginTest />
    },
    {
        path: "/create-account/verify-email",
        element: <VerifyEmail />
    },
    {
        path: "/create-account/setup-profile",
        element: <SetupProfile />
    },
]