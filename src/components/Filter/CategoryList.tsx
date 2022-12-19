import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

// import 'swiper/css';
// import "swiper/css/navigation";
import "./CategoryList.css"

import category_1 from "../../assets/filter/category-1.png"
import category_2 from "../../assets/filter/category-2.png"
import category_3 from "../../assets/filter/category-3.png"
import category_4 from "../../assets/filter/category-4.png"
import category_5 from "../../assets/filter/category-5.png"
import category_6 from "../../assets/filter/category-6.png"
import category_7 from "../../assets/filter/category-7.png"
import category_8 from "../../assets/filter/category-8.png"
import category_9 from "../../assets/filter/category-9.png"
import category_10 from "../../assets/filter/category-10.png"
import category_11 from "../../assets/filter/category-11.png"
import category_12 from "../../assets/filter/category-12.png"
import category_13 from "../../assets/filter/category-13.png"
import CategoryItem from './CategoryItem'



const categoryList = [
    {
        img: category_1,
        title: "Острова"
    },
    {
        img: category_2,
        title: "Парки"
    },
    {
        img: category_3,
        title: "Мини дома"
    },
    {
        img: category_4,
        title: "OMG!"
    },
    {
        img: category_5,
        title: "Кемпинг"
    },
    {
        img: category_6,
        title: "Хижины"
    },
    {
        img: category_7,
        title: "Дизайн"
    },
    {
        img: category_8,
        title: "Арктика"
    },
    {
        img: category_9,
        title: "Бассейны"
    },
    {
        img: category_10,
        title: "У озера"
    },
    {
        img: category_11,
        title: "Серфинг"
    },
    {
        img: category_12,
        title: "Вигвам"
    },
    {
        img: category_13,
        title: "Домик на дереве"
    },
]

const CategoryList = () => {
    return (
        <div className='category'>
            <Swiper
                slidesPerGroupAuto={true}
                slidesPerView={"auto"}
                spaceBetween={40}
                navigation={true} 
                modules={[Navigation]}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {categoryList.map((item) =>
                    <SwiperSlide key={item.title}><CategoryItem category={item} /></SwiperSlide>
                )}
            </Swiper>
        </div>
    )
}

export default CategoryList