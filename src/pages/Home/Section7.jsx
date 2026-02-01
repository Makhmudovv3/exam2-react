import React from "react";
import "./Section7.css";
import future from "../../assets/Image.png";
const Section7 = () => {
  const points = [
    {
      title: "Start with Our Company",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.",
    },
    {
      title: "Learn How to Grow Yourself",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.",
    },
    {
      title: "Farming Strategies of Today",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.",
    },
  ];

  return (
    <section className="eco-section">
      <div className="eco-image-container">
        <img src={future} alt="Farm Landscape" className="eco-bg-img" />
      </div>

      <div className="eco-content-card">
        <div className="eco-header">
          <h3 className="eco-subtitle">Eco Friendly</h3>
          <h1 className="eco-main-title">Econis is a Friendly Organic Store</h1>
        </div>

        <div className="eco-points">
          {points.map((point, index) => (
            <div key={index} className="eco-item">
              <h4>{point.title}</h4>
              <p>{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section7;
