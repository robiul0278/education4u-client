import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
  
    let from = location.state?.from?.pathname || "/";

    const handleGooglePop = () => {
      googleSignIn()
        .then((result) => {
          const user = result.user;
          console.log(user);
          const saveUser = { name: user.displayName, email: user.email, image: user.photoURL }
          fetch("https://college-server-rose.vercel.app/users", {
            method: "POST",
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(saveUser)
          })
            .then((response) => response.json())
            .then(() => {
              navigate(from, { replace: true });
            })
  
        }).catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage)
        });
    }
    return (
        <div className="gap-5 justify-center align-middle flex">
        <button onClick={handleGooglePop} className="btn bg-white hover:bg-white text-black md:w-44">
          <FcGoogle className="mr-2"></FcGoogle> Google
        </button>
      </div>
    );
};

export default SocialLogin;