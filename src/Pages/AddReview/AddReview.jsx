import { useLoaderData } from "react-router-dom";
import useTitle from "../useTitle/useTitle";
import { AuthContext } from "../../providers/AuthProviders";
import { useContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const AddReview = () => {
    const review = useLoaderData();
    const { user } = useContext(AuthContext);
    console.log(review)
    useTitle("Add Review")


    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const rating = form.rating.value;
        const description = form.description.value;
        const saveData = { avatar: user?.photoURL, name: user?.displayName, email: user?.email, description, rating: parseInt(rating) };
        console.log(saveData)

        fetch('https://college-server-rose.vercel.app/review', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(saveData)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Added Successfully!',
                    showConfirmButton: false,
                    timer: 1500
                })
                form.reset()
                console.log(data)
            })
    }
    return (
        <div>
            <div className="bg-gray-100">
                <div className=" mx-auto px-4 py-8">
                    <div className="text-center outline outline-offset-2 outline-cyan-500 bg-white p-12">
                        <h1 className="text-4xl font-bold ">{review.collegeName}</h1>
                        <p className=""> Unlock Your Potential with Engaging Education and Inspiring Knowledge</p>
                    </div>
                    <form onSubmit={handleReview} className="gap-5 grid grid-cols-1 py-16 md:px-32 mx-auto">
                    <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">
                                Rating
                            </label>
                            <input
                                type="number"
                                id="rating"
                                required
                                name="rating"
                                placeholder="rating"
                                className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">
                                Review Description
                            </label>
                            <textarea
                                id="description"
                                required
                                name="description"
                                placeholder="description"
                                rows="4"
                                className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                        </div>
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="btn-info btn md:btn-wide hover:bg-blue-600 text-white font-bold  rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;