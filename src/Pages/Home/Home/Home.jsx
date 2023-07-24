import useTitle from "../../useTitle/useTitle";
import College from "../College/College";
import ImageGallery from "../ImageGallery/ImageGallery";
import PopularCollege from "../PopularCollege/PopularCollege";
import ResearchPaper from "../ResearchPaper/ResearchPaper";
import Review from "../Review/Review";

const Home = () => {
    useTitle("Home");
    return (
        <div>
            <College></College>
            <PopularCollege></PopularCollege>
            <ImageGallery></ImageGallery>
            <ResearchPaper></ResearchPaper>
            <Review></Review>
        </div>
    );
};

export default Home;