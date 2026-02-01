import React from 'react'
import back from "../../assets/back.png"
import "./Section1.css"


const Section1 = () => {
    return (
        <section className='sec1'>
                <div className='sec1text'>
                    <h2>100% Natural Food</h2>
                    <h1>Choose the best  <br />healthier way <br />of life</h1>
                    <button className='explore'>Explore Now</button>
                </div>
                <img className='back' src={back} alt="" />
        </section>
    )
}

export default Section1