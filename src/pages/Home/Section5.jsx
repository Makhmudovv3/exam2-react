import "./Section5.css";
import img from "../../assets/orqafon.png";
import img2 from "../../assets/odom.png";
import img3 from "../../assets/star.png";
import img4 from "../../assets/yoma.png";

const Section5 = () => {
  return (
    <div className="Section5">
      <div className="sec5">
        <div className="sec5text">
          <h3>Testimonial</h3>
          <h1>What Our Customer Saying?</h1>
          <div className="odom">
            <img src={img2} />
          </div>
          <img src={img3} className="a"/>
          <p>
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy <br /> text of the printing and typesetting
            industry. Lorem Ipsum has been.
          </p>
          <h2>Sara Taylor</h2>
          <p className="p1">Consumer</p>
          <img src={img4} />
        </div>

        <div className="border">
        </div>

        <div className="sec5box">
          <div className="boxx">
            <h2>100%</h2>
            <p>Organic</p>
          </div>

          <div className="boxx">
            <h2>285</h2>
            <p>Active Product</p>
          </div>

          <div className="boxx">
            <h2>385+</h2>
            <p>Organic Orchads</p>
          </div>

          <div className="boxx">
            <h2>25%</h2>
            <p>Years of Farming</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
