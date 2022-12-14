import React, { FC } from 'react'

import "./CategoryItem.css"

interface Category {
    img: string;
    title: string;
}

interface CategoryProps {
    category: Category
}

const CategoryItem: FC<CategoryProps> = ({ category }) => {
    return (
        <div className='category__item'>
            <div className="category__img-wrap">
                <img src={category.img} alt="" className='category__img' />
            </div>
            <div className="category__text">
                {category.title}
            </div>
        </div>
    )
}

export default CategoryItem