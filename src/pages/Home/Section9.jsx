import React from 'react'
import "./Section9.css"
import { MoveRight, User } from 'lucide-react'; 

const Section9 = () => {
    return (
        <div className='section9'>
            <h4>News</h4>
            <div className='section9-text'>
                <h1>Discover weekly content about <br />
                    organic food, & more</h1>
                <button className="more-news-btn">
                    More News <div className="icon-circle"><MoveRight size={14} /></div>
                </button>
            </div>

            <div className="section9-container">
                <div className="card">
                    <div className="card-header first-bg">
                        <div className="date-badge">25 <br /> Nov</div>
                    </div>
                    <div className="card-body">
                        <p className="author"><User size={14} color="#EFD372" fill="#EFD372" /> By Rachi Card</p>
                        <h3 className="title">The Benefits of Vitamin D & How to Get It</h3>
                        <p className="desc">Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                        <button className="read-more">Read More <div className="icon-circle-small"><MoveRight size={12} /></div></button>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header second-bg">
                        <div className="date-badge">25 <br /> Nov</div>
                    </div>
                    <div className="card-body">
                        <p className="author"><User size={14} color="#EFD372" fill="#EFD372" /> By Rachi Card</p>
                        <h3 className="title">Our Favourite Summertime Tomato</h3>
                        <p className="desc">Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                        <button className="read-more">Read More <div className="icon-circle-small"><MoveRight size={12} /></div></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section9