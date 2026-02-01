import React from 'react'
import "./Section10.css"

const Section10 = () => {
    return (
        <div className="news-section">
            <div className="news-box">
                <h2 className="news-txt">
                    Subscribe to <br /> our Newsletter
                </h2>

                <div className="news-form">
                    <input
                        type="email"
                        className="news-inp"
                        placeholder="Your Email Address"
                    />
                    <button className="news-btn">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Section10