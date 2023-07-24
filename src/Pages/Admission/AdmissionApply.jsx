import { useLoaderData } from "react-router-dom";
import useTitle from "../useTitle/useTitle";
import { AuthContext } from "../../providers/AuthProviders";
import { useContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const AdmissionApply = () => {
    const colleges = useLoaderData();
    const { user } = useContext(AuthContext);
    console.log(colleges)
    useTitle("Apply")


    const handleApply = event => {
        event.preventDefault();
        const form = event.target;
        const picture = form.picture.value;
        const name = form.name.value;
        const subject = form.subject.value;
        const address = form.address.value;
        const number = form.number.value;
        const date = form.date.value;
        const saveData = { picture, name, email: user?.email, subject, address, date, number, collegeImg: colleges.image, collegeName: colleges.name }
        console.log(saveData)

        fetch('https://college-server-rose.vercel.app/apply', {
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
                    title: 'Apply Successfully!',
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
                        <h1 className="text-4xl font-bold ">{colleges.name}</h1>
                        <p className=""> Unlock Your Potential with Engaging Education and Inspiring Knowledge</p>
                    </div>
                    <form onSubmit={handleApply} className="gap-5 grid grid-cols-1 md:grid-cols-2 py-16 md:px-32 mx-auto">
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">
                                Candidate Photo
                            </label>
                            <input
                                type="url"
                                required
                                id="picture"
                                name="picture"
                                placeholder="photo url"
                                className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                required
                                id="name"
                                value={user?.displayName}
                                name="name"
                                placeholder="seller"
                                className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="sellerEmail"
                                value={user?.email}
                                name="sellerEmail"
                                placeholder="email"
                                className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">
                                Subject
                            </label>
                            <select
                                id="subject"
                                required
                                name="subject"
                                className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="Mathematics">Department of Mathematics</option>
                                <option value="Physics">Department of Physics</option>
                                <option value="Chemistry">Department of Chemistry</option>
                                <option value="Biology">Department of Biology</option>
                                <option value="English">Department of English</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">Date of Birth</label>
                            <input
                                type="date"
                                required
                                id="date"
                                name="date"
                                placeholder="date of birth"
                                className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">Address</label>
                            <input
                                type="text"
                                required
                                id="address"
                                name="address"
                                placeholder="address"
                                className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">
                                Phone Number
                            </label>
                            <input
                                type="number"
                                id="number"
                                required
                                name="number"
                                placeholder="candidate phone number"
                                className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="btn-info btn hover:bg-blue-600 text-white font-bold  rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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

export default AdmissionApply;