import Footer from "../Footer/Footer";
import Banner from "./Banner";
import Container from "./Container";
import Desire from "./Desire";
import Future from "./Future";
import "./Section.scss";
const Section = () => {
  return (
    <div className="Section">
      <Banner />
      <Container />
      <Future />
      <Desire />
      <Footer />
    </div>
  );
};

export default Section;
