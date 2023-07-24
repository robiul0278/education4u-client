import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';
import useTitle from '../useTitle/useTitle';

const Colleges = () => {
    const [college, setCollege] = useState([]);

    useEffect(() => {
        fetch("https://college-server-rose.vercel.app/college")
            .then((res) => res.json())
            .then((data) => setCollege(data));
    }, []);


    useEffect(() => {
        AOS.init();
    }, []);


    useTitle("Colleges")
    return (
        <div className="bg-gray-100 p-5">
            <div data-aos="flip-up" className="text-center bg-white p-12">
                <h1 className="text-4xl font-bold ">Discover Our Gallery</h1>
                <p className="">Discover Our Exciting Toy Collection and Ignite Your Imagination</p>
            </div>
            <div data-aos="zoom-in" className="container mx-auto">
                <div className="min-w-full text-center bg-white grid md:grid-cols-3 grid-cols-1 gap-5 p-5">
                    {
                        college.map((college) => (
                            <div key={college._id}>
                                <div className="card w-full h-96 bg-base-100 shadow-xl image-full">
                                    <figure><img src={college.image} alt="Shoes" /></figure>
                                    <div className="card-body text-start" >
                                        <h2 className="card-title">{college.name}</h2>
                                        <h4>Research history: {college.research_history}</h4>
                                        <p>Admission date: {college.admission_date}</p>
                                        <div className="flex">
                                            <span>Rating: </span>
                                            <Rating style={{ maxWidth: 100 }} value={college.rating} readOnly />
                                            <span>{''}</span>
                                        </div>
                                        <div className="card-actions justify-end">
                                        <Link to={`/popularcollegedetails/${college._id}`} className="btn hover:bg-blue-600 border-none mr-5">Details</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Colleges;