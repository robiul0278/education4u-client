import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Link,} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useTitle from "../../Pages/useTitle/useTitle";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignUp = () => {
  const { createUser, logOut, profileUpdate } = useContext(AuthContext);
  const [error, setError] = useState("");

  useTitle("signUp")

  const handleRegister = (event) => {
    event.preventDefault();
    setError("");
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);


    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        logOut();
        console.log(user);
        setError("");
        form.reset();

        toast("registration successfully!");
        profileUpdate(name, photo)
          .then(() => {
            const saveUser = { name: name, email: user.email, image: photo }
            fetch("https://college-server-rose.vercel.app/users", {
              method: "POST",
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(saveUser)
            })
          })
          .catch((error) => console.log(error));
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
          <h1 className="text-5xl pb-7 font-bold">Please Register!</h1>
        </div>
        <form
          onSubmit={handleRegister}
          className="card flex-shrink-0 w-full p-2 bg-white max-w-md border-2"
        >
          <div className="card-body grid grid-cols-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                name="photo"
                type="text"
                placeholder="photo url"
                className="input input-bordered"
              />
            </div>
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
          </div>
          <h2 className=" text-orange-800">{error}</h2>
          <div className="form-control px-8">
            <button className="btn btn-primary">Register</button>
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
              You have already account?
              <Link to="/login" className=" text-blue-600">
                Login here
              </Link>{" "}
            </span>
          </div>
        </form>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default SignUp;