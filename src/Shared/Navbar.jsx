import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png"
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import "./Navbar.css"

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch((error) => {
                console.log(error);
            });
    };

    const navItems = (
        <>
            <NavLink
              className={"px-5 py-2 font-semibold rounded mr-4"}
              exact
              to="/"
              activeClassName="active"
            >
              Home
            </NavLink>
            <NavLink
              className={"px-5 py-2 font-semibold rounded mr-4"}
              exact
              to="/colleges"
              activeClassName="active"
            >
              Colleges
            </NavLink>
            {user ? (
                <>
            <NavLink
              className={"px-5 py-2 font-semibold rounded mr-4"}
              exact
              to="/admission"
              activeClassName="active"
            >
              Admission
            </NavLink>
                    <NavLink
              className={"px-5 py-2 font-semibold rounded mr-4"}
              exact
              to="mycollege"
              activeClassName="active"
            >
              My College
            </NavLink>
                </>
            ) : (
                <></>
            )}
        </>
    );
    return (
        <div className="navbar bg-cyan-500 shadow-cyan-500/50 py-5 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box text-black font-semibold z-50 w-52"
                    >
                        {navItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img className="w-16 hidden lg:flex" src={logo} alt="" />
                    <h1 className="font-bold text-3xl">Education4u</h1>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu font-semibold menu-horizontal px-1">{navItems}</ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <div className=" align-middle flex">
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <NavLink
                                    to="/profile"
                                    className="px-4 btn logout py-1 rounded"
                                >
                                    {user.displayName}
                                </NavLink>
                                <NavLink
                                    to="/login"
                                    onClick={handleLogOut}
                                    activeClassName="active"
                                    className="px-4 btn logout py-1 rounded"
                                >
                                    LogOut
                                </NavLink>
                            </ul>
                        </div>
                    </div>

                ) : (
                    <div>
                        <NavLink to="/login" className="btn ml-4">
                            Login
                        </NavLink>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;