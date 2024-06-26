import { Helmet } from "react-helmet";
import bgImage from "../../../../public/Images/About/Banner.jpeg";
import Banner from "../../../Layouts/Banner/Banner";
import FlatListed from "../../../Layouts/FlatListed/FlatListed";
import Navbar from "../../../Layouts/Navbar/Navbar";
import Testimonials from "../../../Layouts/Testimonials/Testimonials";
import Consultation from "../Consultation/Consultation";
import OurStoryBottom from "../OurStory/OurStoryBottom";
import OurStoryTop from "../OurStory/OurStoryTop";
import OurTeam from "../OurTeam/OurTeam";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>Heritage Nest | About</title>
      </Helmet>
      <Navbar></Navbar>
      <Banner backgroundImage={bgImage}></Banner>
      <div className="w-11/12 md:w-4/5 mx-auto">
        <div className="my-10">
          <FlatListed></FlatListed>
        </div>
        <OurStoryTop></OurStoryTop>
        <OurStoryBottom></OurStoryBottom>
        <OurTeam></OurTeam>
        <Consultation></Consultation>
        <Testimonials></Testimonials>
      </div>
    </div>
  );
};

export default About;
