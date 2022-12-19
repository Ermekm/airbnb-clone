import React, { FC, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import star from "../../assets/main/star.svg"
import heart from "../../assets/main/heart.svg"

// import "swiper/css";
// import "swiper/css/pagination";
import "./HousingItem.css"

interface HousingItem {
    id: string;
    city: string;
    country: string;
    distance: string;
    availableDates: string;
    constPerNight: string;
    rating: number;
    img: string[]
}

interface HousingItemProps {
    housingItem: HousingItem
}

const HousingItem: FC<HousingItemProps> = ({ housingItem }) => {
    const [isHover, setIsHover] = useState(false);

    return (
        <div className='housing' onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            <div className="housing__img-wrapper">
                <Swiper
                    pagination={true}
                    modules={[Pagination, Navigation]}
                    className={["mySwiper", isHover ? "hover" : ""].join(" ")}
                    navigation={true}
                >
                    {housingItem.img.map((img, index) =>
                        <SwiperSlide key={index}>
                            <img src={img} alt="housing image" className="housing__img" />
                        </SwiperSlide>
                    )}
                </Swiper>
                <div className='housing__like-wrapper'>
                    <img src={heart} alt="like" className='housing__like-img' />
                </div>
            </div >
            <div className="housing__info">
                <div className="housing__address-rating-wrapper">
                    <div className="housing__address">{housingItem.city}, {housingItem.country} </div>
                    <div className="housing__rating">
                        {housingItem.rating}
                        <img src={star} alt="rating" className='housing__rating-icon' />
                    </div>
                </div>
                <div className="housing__distance"> {housingItem.distance} </div>
                <div className="housing__available-dates"> {housingItem.availableDates} </div>
                <div className="housing__cost">${housingItem.constPerNight} ночь</div>
            </div>
        </div >
    )
}

export default HousingItem