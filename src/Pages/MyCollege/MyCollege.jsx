import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import useTitle from "../useTitle/useTitle";
import Swal from "sweetalert2";

const MyCollege = () => {
    const { user } = useContext(AuthContext);
    const [college, setCollege] = useState([])
    console.log(college)

    useTitle("My College")

    const url = `https://college-server-rose.vercel.app/apply?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setCollege(data))
    }, [url])

    const handleDelete = id => {
        const proceed = confirm('Are You Sure ?')
        if (proceed) {
            fetch(`https://college-server-rose.vercel.app/apply/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Delete Successfully!',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        const remaining = college?.filter(item => item._id !== id);
                        setCollege(remaining)
                    }
                    console.log(data)
                })
        }
    }

    return (
        <div className="bg-gray-100">
            <div className="container mx-auto px-4 py-8">
                <div className="text-center bg-white p-12">
                    <h1 className="text-4xl font-bold ">My College</h1>
                    <p className=" text-center">This is my selected college</p>
                </div>
                <table className="min-w-full text-center bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">College Name</th>
                            <th className="py-2 px-4 border-b">Candidate</th>
                            <th className="py-2 px-4 border-b">Subject</th>
                            <th className="py-2 px-4 border-b">Phone Number</th>
                            <th className="py-2 px-4 border-b">Email Address</th>
                            <th className="py-2 px-4 border-b">Delete</th>
                            <th className="py-2 px-4 border-b">Add Review</th>
                        </tr>
                    </thead>
                    {
                        college?.map(colleges => (
                            <tbody key={colleges?._id}>
                                <tr>
                                    <td className="py-4 px-4 border-b">{colleges?.collegeName}</td>
                                    <td className="py-4 px-4 border-b">{colleges?.name}</td>
                                    <td className="py-4 px-4 border-b">{colleges?.subject}</td>
                                    <td className="py-4 px-4 border-b">{colleges?.number}</td>
                                    <td className="py-4 px-4 border-b">{colleges?.email}</td>
                                    <td className="py-4 px-4 border-b">
                                        <button onClick={() => handleDelete(colleges?._id)} className="text-red-500 hover:text-red-700 focus:outline-none">Delete</button>
                                    </td>
                                    <td className="py-4 px-4 border-b">
                                        <Link to={`/review/${colleges?._id}`} className="text-blue-500 hover:text-blue-700 focus:outline-none">Review</Link>
                                    </td>
                                </tr>
                            </tbody>
                        ))
                    }
                </table>
            </div>
        </div>
    );
};

export default MyCollege;