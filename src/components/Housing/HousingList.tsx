import React from 'react'
import HousingItem from './HousingItem'

import image_1 from "../../assets/main/image-1.png"
import image_2 from "../../assets/main/image-2.png"
import image_3 from "../../assets/main/image-3.png"
import image_4 from "../../assets/main/image-4.png"

import "./HousingList.css"

const housingList = [
    {
        id: "1",
        city: "MV",
        country: "Maldives",
        distance: "2,776 kilometers away",
        availableDates: "23-28 June",
        constPerNight: "183",
        rating: 5,
        img: [image_1, image_2, image_3, image_4]
    },
    {
        id: "2",
        city: "Kastaki",
        country: "Greece",
        distance: "6,945 kilometers away",
        availableDates: "1-7 Nov",
        constPerNight: "443",
        rating: 3.9,
        img: [image_2, image_3, image_4, image_1,]

    },
    {
        id: "3",
        city: "Ile-de-Brehat",
        country: "France",
        distance: "2,776 kilometers away",
        availableDates: "23-28 June",
        constPerNight: "360",
        rating: 3.2,
        img: [image_3, image_4, image_1, image_2,]

    },
    {
        id: "4",
        city: "Gildeskai",
        country: "Norway",
        distance: "2,776 kilometers away",
        availableDates: "23-28 June",
        constPerNight: "389",
        rating: 4.2,
        img: [image_4, image_1, image_2, image_3,]
    },
    {
        id: "5",
        city: "MV",
        country: "Maldives",
        distance: "2,776 kilometers away",
        availableDates: "23-28 June",
        constPerNight: "183",
        rating: 5,
        img: [image_1, image_2, image_3, image_4]
    },
    {
        id: "6",
        city: "Kastaki",
        country: "Greece",
        distance: "6,945 kilometers away",
        availableDates: "1-7 Nov",
        constPerNight: "443",
        rating: 3.9,
        img: [image_2, image_3, image_4, image_1,]

    },
    {
        id: "7",
        city: "Ile-de-Brehat",
        country: "France",
        distance: "2,776 kilometers away",
        availableDates: "23-28 June",
        constPerNight: "360",
        rating: 3.2,
        img: [image_3, image_4, image_1, image_2,]

    },
    {
        id: "8",
        city: "Gildeskai",
        country: "Norway",
        distance: "2,776 kilometers away",
        availableDates: "23-28 June",
        constPerNight: "389",
        rating: 4.2,
        img: [image_4, image_1, image_2, image_3,]
    },
]



const HousingList = () => {
    return (
        <div className='housing-list'>
            <div className="wrapper_lg">
                <div className="housing-list__wrapper">
                    {housingList.map((item) =>
                        <HousingItem housingItem={item} key={item.id} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default HousingList