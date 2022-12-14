import React from 'react'
import CategoryList from './CategoryList'
import FilterBtn from './FilterBtn'

import "./Filter.css"

const Filter = () => {
    return (
        <div className='filter'>
            <div className="wrapper_lg">
                <div className="filter__wrapper">
                    <CategoryList></CategoryList>
                    <FilterBtn></FilterBtn>
                </div>
            </div>
        </div>
    )
}

export default Filter