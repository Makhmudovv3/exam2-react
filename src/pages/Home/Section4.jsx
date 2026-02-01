import React from "react";
import "./Section4.css";
import img from "../../assets/kokat.png";
import img2 from "../../assets/star.png";
import img3 from "../../assets/banana.png";
import img4 from "../../assets/pista.png";
import img5 from "../../assets/pomidor.png";
import img6 from "../../assets/mosh.png";
import img7 from "../../assets/yong'oq.png";
import img8 from "../../assets/tuhum.png";
import img9 from "../../assets/non.png";

const Section4 = () => {
  return (
    <>
      <div className="Section4">
        <div className="Sec4text">
          <h3>Categories</h3>
          <h1>Our Products</h1>
        </div>
        <div className="Sec4box">
          <div className="box1">
            <button>Vegetable</button>
            <img src={img} className="img1" />
            <h2>Calabrese Broccoli</h2>
            <hr />
            <div className="sec4text2">
              <div className="sec4textt">
                <del>%20.00 </del>
                <h3>$13.00</h3>
              </div>
              <img src={img2} />
            </div>
          </div>

          <div className="box1">
            <button>Fresh</button>
            <img src={img3} className="img1" />
            <h2>Fresh Banana Fruites</h2>
            <hr />
            <div className="sec4text2">
              <div className="sec4textt">
                <del>%20.00 </del>
                <h3>$14.00</h3>
              </div>
              <img src={img2} />
            </div>
          </div>

          <div className="box1">
            <button>Millets</button>
            <img src={img4} className="img1" />
            <h2>White Nuts</h2>
            <hr />
            <div className="sec4text2">
              <div className="sec4textt">
                <del>%20.00 </del>
                <h3>$14.00</h3>
              </div>
              <img src={img2} />
            </div>
          </div>

          <div className="box1">
            <button>Vegetable</button>
            <img src={img5} className="img1" />
            <h2>Vegan Red Tomato</h2>
            <hr />
            <div className="sec4text2">
              <div className="sec4textt">
                <del>%20.00 </del>
                <h3>$17.00</h3>
              </div>
              <img src={img2} />
            </div>
          </div>

          <div className="box1">
            <button>Health</button>
            <img src={img6} className="img1" />
            <h2>Mung Bean</h2>
            <hr />
            <div className="sec4text2">
              <div className="sec4textt">
                <del>%20.00 </del>
                <h3>$11.00</h3>
              </div>
              <img src={img2} />
            </div>
          </div>

          <div className="box1">
            <button>Nuts</button>
            <img src={img7} className="img1" />
            <h2>Brown Hazelnut</h2>
            <hr />
            <div className="sec4text2">
              <div className="sec4textt">
                <del>%20.00 </del>
                <h3>$12.00</h3>
              </div>
              <img src={img2} />
            </div>
          </div>

          <div className="box1">
            <button>Fresh</button>
            <img src={img8} className="img1" />
            <h2>Eggs</h2>
            <hr />
            <div className="sec4text2">
              <div className="sec4textt">
                <del>%20.00 </del>
                <h3>$17.00</h3>
              </div>
              <img src={img2} />
            </div>
          </div>

          <div className="box1">
            <button>Fresh</button>
            <img src={img9} className="img1" />
            <h2>Zelco Suji Elaichi Rusk</h2>
            <hr />
            <div className="sec4text2">
              <div className="sec4textt">
                <del>%20.00 </del>
                <h3>$15.00</h3>
              </div>
              <img src={img2} />
            </div>
          </div>
        </div>

        <div className="sec4btn">
        <button>Load More</button>
        </div>
      </div>
    </>
  );
};

export default Section4;
