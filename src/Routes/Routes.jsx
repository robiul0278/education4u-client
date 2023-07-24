import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../LoginRegister/Login/Login";
import SignUp from "../LoginRegister/Register/SignUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Profile from "../Pages/Profile/Profile";
import ForgotPassword from "../LoginRegister/ForgotPassword/ForgotPassword";
import College from "../Pages/Home/College/College";
import Colleges from "../Pages/Collages/Colleges";
import PopularCollegeDetails from "../Pages/Home/PopularCollege/PopularCollegeDetails";
import Admission from "../Pages/Admission/Admission";
import AdmissionApply from "../Pages/Admission/AdmissionApply";
import MyCollege from "../Pages/MyCollege/MyCollege";
import AddReview from "../Pages/AddReview/AddReview";

export const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: "/forgot",
                element: <ForgotPassword></ForgotPassword>
            },
            {
                path: "/college",
                element: <College></College>
            },
            {
                path: "/colleges",
                element: <Colleges></Colleges>
            },
            {
                path: 'popularcollegedetails/:id',
                element: <PopularCollegeDetails></PopularCollegeDetails>,
                loader: ({ params }) => fetch(`https://college-server-rose.vercel.app/college/${params.id}`)
            },
            {
                path: 'apply/:id',
                element: <AdmissionApply></AdmissionApply>,
                loader: ({ params }) => fetch(`https://college-server-rose.vercel.app/college/${params.id}`)
            },
            {
                path: "/admission",
                element: <Admission></Admission>
            },
            {
                path: "/mycollege",
                element: <MyCollege></MyCollege>
            },
            {
                path: "review/:id",
                element: <AddReview></AddReview>,
                loader: ({ params }) => fetch(`https://college-server-rose.vercel.app/apply/${params.id}`)
            }
        ]
    },
]);