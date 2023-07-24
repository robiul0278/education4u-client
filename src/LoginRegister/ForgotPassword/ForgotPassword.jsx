import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";


  const auth = getAuth();

  const ForgotPassword = () => {
    const [error, setError] = useState('')


  const handlePassword = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    console.log(email);

    sendPasswordResetEmail(auth, email)
    .then(() => {
        form.reset()
       })
    .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
    });
  };

  return (
    <form onSubmit={handlePassword} className="max-w-md my-6 mx-auto p-4 border rounded">
      <h2 className="text-xl font-semibold mb-4">Forgot Password</h2>
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        className="w-full p-2 border rounded mb-4"
      />
      <button className="bg-blue-500 text-white py-2 px-4 rounded">
        Send
      </button>
      {/* error message */}
      <p className="text-red-500">{error}</p>
    </form>
  );
};

export default ForgotPassword;
