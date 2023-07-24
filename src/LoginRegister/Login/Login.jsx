import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from "../SocialLogin/SocialLogin";
import useTitle from "../../Pages/useTitle/useTitle";
import { AuthContext } from "../../providers/AuthProviders";

const Login = () => {
  const { logIn} = useContext(AuthContext)
  const [error, setError] = useState('')
  const navigate = useNavigate();
  const location = useLocation();

  useTitle("Login")

  let from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    setError('')

    logIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        form.reset()
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <div className="hero py-7">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl pb-7 font-bold">Please Login!</h1>
        </div>
        <form
          onSubmit={handleLogin}
          className="card flex-shrink-0 w-full p-2 bg-white max-w-md border-2"
        >
          <div className="card-body grid grid-cols-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <Link to="/forgot" className="text-sm text-blue-600">Forgot Password ?</Link>
          </div>
          <h2 className=" text-orange-800">{error}</h2>
          <div className="form-control px-8">
            <button className="btn btn-primary">Login</button>
          </div>
          <div>
            <h2 className="text-center pt-4  font-bold">OR</h2>
            <h2 className="font-semibold pb-2 text-center">
              Login easily with your Google account
            </h2>
          </div>
          <SocialLogin></SocialLogin>
          <div className="text-center card-body">
            <span>
              Create a new account?
              <Link to="/signup" className=" text-blue-600">
                sign up here
              </Link>{" "}
            </span>
          </div>
        </form>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;