import React from 'react'
import "./Section3.css" 
import orange from "../../assets/orange.png"
import icon from "../../assets/icon.png"
import icon2 from "../../assets/icon2.png"



const Section3 = () => {
  return (
    <section className='sec3'>
        <img className='orangeimg' src={orange} alt="" />
        <div className='sec3text'>
            <h2>About Us</h2>
            <h1>We Believe in Working <br />Accredited Farmers</h1>
            <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to  <br />been the industry's standard dummy text ever since the 1500s, when an unknown <br /> printer took a galley.</p>
            <div className='iconwr'>
              <img src={icon} alt="" />
              <div>
                <h3>Organic Foods Only</h3>
                <h4>Simply dummy text of the printing and typesetting <br /> industry. Lorem Ipsum</h4>
              </div>
            </div>
            <div className='iconwr'>
              <img src={icon2} alt="" />
              <div>
                <h3>Quality Standards</h3>
                <h4>Simply dummy text of the printing and typesetting <br /> industry. Lorem Ipsum</h4>
              </div>
            </div>
              <button className='shopnow'>Shop Now</button>
        </div>
    </section>
  )
}

export default Section3