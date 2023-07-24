import { useLoaderData } from "react-router-dom";
import useTitle from "../../useTitle/useTitle";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const PopularCollegeDetails = () => {
    const colleges = useLoaderData();
    console.log(colleges)
    useTitle("Details")

    const { image, name, rating, admission_date, research_count, events, sports, research_history } = colleges;
    return (
        <div className="bg-gray-100 p-5">
            <div className="text-center bg-white p-12">
                <h1 className="text-4xl font-bold ">Discover Our College</h1>
                <p className="">Discover Our college details</p>
            </div>
            <div className="grid bg-white my-6 grid-cols-1 md:grid-cols-2 gap-10 p-5 h[calc(100-vh-28)]">
                <div>
                    <img className="rounded" src={image} alt="" />
                </div>
                <div className="grid justify-items-start py-10">
                    <h1 className="text-3xl font-bold">{name}</h1>
                    <h1 className="text-sm my-5 font-bold">Research History: {research_history}</h1>
                    <p>{''}</p>
                    <h4 className="text-xl my-3">Admission date: {admission_date}</h4>
                    <h4 className="">Research count: {research_count}</h4>
                    <div className="flex justify-items-center">
                        <span>Rating:  </span>
                        <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
                    </div>
                </div>
            </div>
            <div className="flex gap-5">
                <div className="card w-96 bg-base-100">
                    <div className="card-body">
                        <h2 className="card-title">Events!</h2>
                        <>
                        <li>{events[0]}</li>
                        <li>{events[1]}</li>
                        <li>{events[2]}</li>
                        </>
                    </div>
                </div>
                <div className="card w-96 bg-base-100">
                    <div className="card-body">
                        <h2 className="card-title">Sports!</h2>
                        <>
                        <li>{sports[0]}</li>
                        <li>{sports[1]}</li>
                        <li>{sports[2]}</li>
                        </>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularCollegeDetails;