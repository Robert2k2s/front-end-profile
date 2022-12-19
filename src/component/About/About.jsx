import Nav from "../Nav/Nav";
import Banner from "../Section/Banner";
import Footer from "../Footer/Footer";
import "../Nav/Nav.scss";
import "../Footer/Footer.scss";
import "../Section/Banner.scss";
import "../About/Aubout.scss";
const About = () => {
  return (
    <div className="About">
      <Nav />
      <Banner />
      <Footer />
    </div>
  );
};

export default About;
