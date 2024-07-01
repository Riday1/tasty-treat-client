import React from 'react';
import image1 from '../../../assets/banner photo/banner-1.jpg'
import image2 from '../../../assets/banner photo/banner-2.jpg'
import image3 from '../../../assets/banner photo/banner-3.jpg'
import image4 from '../../../assets/banner photo/banner-4.jpg'
import SingleBanner from './SingleBanner';

const Banner = () => {

    const bannerInfo = [
        { id: 1, image: image1, next: 2, prev: 4 },
        { id: 2, image: image2, next: 3, prev: 1 },
        { id: 3, image: image3, next: 4, prev: 2 },
        { id: 4, image: image4, next: 1, prev: 3 },
    ]
    return (
        <div className="carousel w-full">
            {/* <div id="slide1" className="carousel-item relative w-full">
                <img src={image1} alt='' className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div> */}
            {
                bannerInfo.map(banner => <SingleBanner key={banner.id} banner={banner}></SingleBanner>)
            }
        </div>
    );
};

export default Banner;