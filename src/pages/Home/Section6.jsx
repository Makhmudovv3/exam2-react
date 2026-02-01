import React from "react";
import "./Section6.css";
import img from "../../assets/brokli.png";
import img2 from "../../assets/bodiring.png";
import img3 from "../../assets/piyoz.png";
import img4 from "../../assets/chisnok.png";

const products = [
  {
    id: 1,
    name: "Mung Bean",
    oldPrice: "$20.00",
    price: "$11.00",
    tag: "Vegetable",
    img: "img",
  },
  {
    id: 2,
    name: "Brown Hazelnut",
    oldPrice: "$20.00",
    price: "$12.00",
    tag: "Vegetable",
    img: "img2",
  },
  {
    id: 3,
    name: "Onion",
    oldPrice: "$20.00",
    price: "$17.00",
    tag: "Vegetable",
    img: "img3",
  },
  {
    id: 4,
    name: "Cabbage",
    oldPrice: "$20.00",
    price: "$17.00",
    tag: "Vegetable",
    img: "img4",
  },
];

const Section6 = () => {
  return (
    <section className="offer-section">
      <div className="offer-container">
        <div className="offer-header">
          <div className="offer-title-group">
            <h3 className="offer-subtitle">Offer</h3>
            <h1 className="offer-title">We Offer Organic For You</h1>
          </div>
          <button className="view-all-btn">
            View All Product <span className="arrow">→</span>
          </button>
        </div>

        <div className="offer-grid">
          {products.map((item) => (
            <div key={item.id} className="offer-card">
              <span className="offer-tag">{item.tag}</span>
              <div className="offer-img-box">
                <img src={img} alt={item.name} />
              </div>
              <div className="offer-details">
                <h4 className="product-name">{item.name}</h4>
                <div className="divider"></div>
                <div className="offer-footer">
                  <div className="price-box">
                    <del>{item.oldPrice}</del>
                    <span className="current-price">{item.price}</span>
                  </div>
                  <div className="stars">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section6;
