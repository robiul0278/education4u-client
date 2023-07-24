import { useEffect, useState } from "react";
import useTitle from "../../useTitle/useTitle";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const College = () => {
    const [college, setCollege] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const filteredCollege = college.filter((toy) =>
        toy.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    console.log(college);
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    useEffect(() => {
        fetch("https://college-server-rose.vercel.app/college")
            .then((res) => res.json())
            .then((data) => setCollege(data));
    }, []);



    useTitle("");


    return (
        <div className="bg-gray-100 p-5">
            <div className="text-center outline outline-offset-2 outline-cyan-500 bg-white p-12">
                <h1 className="text-4xl font-bold ">LearnSmart: Empowering Minds, Enriching Lives</h1>
                <p className=""> Unlock Your Potential with Engaging Education and Inspiring Knowledge</p>
            </div>
            <div className="container mx-auto">
                <h1 className="text-4xl text-center font-bold mb-6"></h1>
                <div>
                    <input
                        type="text"
                        placeholder="Search by college name"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="mb-4 px-4 py-2 text-center w-full rounded-md"
                    />
                </div>

                <div className="overflow-x-auto">
                    <div className="min-w-full text-center bg-white border border-gray-300 grid md:grid-cols-3 grid-cols-1 gap-5 p-5">
                        {filteredCollege.length === 0 && <p className="text-orange-500">No matching college found.</p>}
                        {filteredCollege.slice(3, 9).map((college) => (
                            <div key={college._id}>
                                <div className="card h-96 w-full border-2 shadow-sm">
                                    <figure><img src={college.image} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">

                                            <div className="md:badge md:badge-outline">{college.name}</div>
                                        </h2>
                                        <div className="text-start">
                                            <h2 className="font-bold">Events</h2>
                                            <h2>1.{college.events[0]}</h2>
                                            <h2>2.{college.events[1]}</h2>
                                            <h2>3.{college.events[2]}</h2>
                                        </div>
                                        <div className="">
                                            <div className="flex">Research count: {college.research_count}</div>
                                            
                                            <div className="flex">
                                                <span>Rating: </span>
                                                <Rating style={{ maxWidth: 100 }} value={college.rating} readOnly />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default College;