import {Fade, Zoom} from "react-awesome-reveal";
import {Helmet} from "react-helmet";
import backgroundImage from "../../../../public/Images/BuyerScreen/Banner.jpeg";
import Banner from "../../../Layouts/Banner/Banner";
import FlatListed from "../../../Layouts/FlatListed/FlatListed";
import Navbar from "../../../Layouts/Navbar/Navbar";
import Testimonials from "../../../Layouts/Testimonials/Testimonials";
import FindProperty from "../FindProperty/FindProperty";
import NewListedProperty from "../NewListedPropperty/NewListedProperty";
import PopularProperties from "../PopularProperties/PopularProperties";
import PostProperty from "../PostProperty/PostProperty";

const BuyerScreen = () => {
  return (
    <div>
      <Helmet>
        <title>Heritage Nest | Buy Property</title>
      </Helmet>
      <Navbar></Navbar>
      <Banner backgroundImage={backgroundImage}></Banner>
      <Zoom>
        <FindProperty></FindProperty>
      </Zoom>

      <div className="w-11/12 md:w-4/5 mx-auto ">
        <div className="mt-[350px] md:mt-48">
          <FlatListed></FlatListed>
        </div>
        <Fade>
          <PopularProperties></PopularProperties>
        </Fade>
        <Fade>
          <NewListedProperty></NewListedProperty>
        </Fade>

        <Testimonials></Testimonials>
      </div>
      <div className="bg-[#fdf0e7]">
        <PostProperty></PostProperty>
      </div>
    </div>
  );
};

export default BuyerScreen;
