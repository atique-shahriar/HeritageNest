import bgImage from "../../../../public/Images/About/Banner.jpeg";
import Banner from "../../../Layouts/Banner/Banner";
import FlatListed from "../../../Layouts/FlatListed/FlatListed";
import Testimonials from "../../../Layouts/Testimonials/Testimonials";
import Consultation from "../Consultation/Consultation";
import OurStory from "../OurStory/OurStory";
import OurTeam from "../OurTeam/OurTeam";

const About = () => {
  return (
    <div>
      <Banner backgroundImage={bgImage}></Banner>
      <div className="w-11/12 md:w-4/5 mx-auto my-10">
        <FlatListed></FlatListed>
      </div>
      <OurStory></OurStory>
      <OurTeam></OurTeam>
      <div className="w-11/12 md:w-4/5 mx-auto my-16">
        <Consultation></Consultation>
      </div>
      <Testimonials></Testimonials>
    </div>
  );
};

export default About;
