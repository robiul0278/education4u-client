// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'




const Review = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("https://college-server-rose.vercel.app/review")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);



    return (
        <section className='bg-gray-100 p-5'>
            <div className="text-center bg-white p-12">
                <h1 className="text-4xl font-bold ">Student Says About Us</h1>
                <p className=" text-center">Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. <br /> It is a paradisematic country</p>
            </div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    reviews.map((review) => (
                        <div key={review._id}>
                            <SwiperSlide>
                                <div className="items-center justify-center">
                                    <div className="w-full bg-white p-8 rounded-md shadow-lg flex flex-col items-center">
                                        <div className="flex items-center mb-4">
                                            <img src={review.avatar} alt="User Avatar" className="w-12 h-12 rounded-full mr-4" />

                                        </div>
                                        <div>
                                            <h2 className="text-xl font-bold">{review.name}</h2>
                                        </div>
                                        <p className="text-gray-800 text-base mb-4 w-3/4 text-center">
                                         {review.description}
                                        </p>
                                        <div className="flex">
                                            <span>Rating: </span>
                                            <Rating style={{ maxWidth: 100 }} value={review.rating} readOnly />
                                            <span>{''}</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>
                    ))
                }
            </Swiper>
        </section>
    );
};

export default Review;