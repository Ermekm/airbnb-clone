import React from 'react'

import filterBtn from "../../assets/filter/filter-icon.svg"

import "./FilterBtn.css"

const FilterBtn = () => {
  return (
    <button className='filter-btn filter__filter-btn'>
      <div className="filter-btn__img-wrap">
        <img src={filterBtn} alt="" className='filter-btn__img' />
      </div>
      <div className='filter-btn__text'>
        Фильтры
      </div>
    </button>
  )
}

export default FilterBtn