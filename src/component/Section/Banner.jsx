import "../Section/Banner.scss";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="Banner">
      <div className="Banner-dereption">
        <h5>This is a website about me</h5>
        <h2>
          Hello my name is Phan Chinh <br />
          I'm a web developer
        </h2>
        <Link to="/">Explore Now</Link>
      </div>
    </div>
  );
};

export default Banner;
