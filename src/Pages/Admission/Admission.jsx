import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../useTitle/useTitle";


const Admission = () => {
    const [college, setCollege] = useState([]);

    useEffect(() => {
        fetch("https://college-server-rose.vercel.app/college")
            .then((res) => res.json())
            .then((data) => setCollege(data));
    }, []);
    useTitle("Admission")
    return (
        <div className="p-5">
            <div className="text-center bg-white p-12">
                <h1 className="text-4xl font-bold ">Most popular College</h1>
                <p className="">Apply Our College and Ignite Your Imagination</p>
            </div>
            <div className='grid gap-2 md:grid-cols-3 grid-cols-1 my-6 md:px-16'>
                {
                    college.map((college) => (
                        <div className='' key={college._id}>
                            <div className="hero h-96" style={{ backgroundImage: `url(${college.image})` }}>
                                <div className="hero-overlay hover:bg-opacity-70"></div>
                                <div className="hero-content text-center text-neutral-content hero-overlay hover:bg-opacity-90">
                                    <div className="max-w-md">
                                        <h1 className="mb-5 text-5xl font-bold">{college.name}</h1>
                                        <Link to={`/apply/${college._id}`} className="btn hover:bg-blue-600 border-none mr-5">Details</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Admission;