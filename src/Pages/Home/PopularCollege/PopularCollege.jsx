import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const PopularCollege = () => {
    const [college, setCollege] = useState([]);

    useEffect(() => {
        fetch("https://college-server-rose.vercel.app/college")
            .then((res) => res.json())
            .then((data) => setCollege(data));
    }, []);


    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="bg-gray-100 p-5">
            <div data-aos="flip-up" className="text-center bg-white p-12">
                <h1 className="text-4xl font-bold ">Discover Our Most Popular College</h1>
                <p className="">The most popular college majors are well-loved for a reason. They address interesting topics, <br /> and they equip students with in-demand workforce skills.</p>
            </div>
            <div data-aos="zoom-in" className="container mx-auto">
                <div className="min-w-full text-center bg-white grid md:grid-cols-3 grid-cols-1 gap-5 p-5">
                    {
                        college.slice(0, 3).map((college) => (
                            <div key={college._id}>
                                <div className="card w-full h-96 bg-base-100 shadow-xl image-full">
                                    <figure><img src={college.image} className='' alt="Shoes" /></figure>
                                    <div className="card-body text-start" >
                                        <h2 className="card-title">{college.name}</h2>
                                        <h4>Research history: {college.research_history}</h4>
                                        <p>Admission date: {college.admission_date}</p>
                                        {/* <div className="text-start">
                                            <h2 className="font-bold">Events</h2>
                                            <h2>1.{college.events[0]}</h2>
                                            <h2>2.{college.events[1]}</h2>
                                            <h2>3.{college.events[2]}</h2>
                                        </div> */}
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

export default PopularCollege;