import React from 'react'
import "./CategoryRow.css"

function CategoryRow({color, bgColor, title}) {
  return (
    <div className="category-row">
      <h2 
        className="row__title" 
        style={{backgroundColor: bgColor, color}}
      >
        {title}
        <span>See all</span>
      </h2>
      <div className="list">
        <div className="card">
          <img src="/images/collection/1.jpg" alt="" />
          <h5>LED TV</h5>
        </div>
        <div className="card">
          <img src="/images/collection/2.jpg" alt="" />
          <h5>IOS</h5>
        </div>
        <div className="card">
          <img src="/images/collection/3.jpg" alt="" />
          <h5>Air Buds</h5>
        </div>
        <div className="card">
          <img src="/images/collection/4.jpg" alt="" />
          <h5>Laptops</h5>
        </div>
        <div className="card">
          <img src="/images/collection/5.jpg" alt="" />
          <h5>Cutleries</h5>
        </div>
        <div className="card">
          <img src="/images/collection/6.jpg" alt="" />
          <h5>Ladies wig</h5>
        </div>
        <div className="card">
          <img src="/images/collection/7.jpg" alt="" />
          <h5>Playstation</h5>
        </div>
        <div className="card">
          <img src="/images/collection/8.jpg" alt="" />
          <h5>Fitness</h5>
        </div>
        <div className="card">
          <img src="/images/collection/9.jpg" alt="" />
          <h5>Refrigerators</h5>
        </div>
        <div className="card">
          <img src="/images/collection/10.png" alt="" />
          <h5>Bad Boys</h5>
        </div>
        <div className="card">
          <img src="/images/collection/11.png" alt="" />
          <h5>Printers</h5>
        </div>
        <div className="card">
          <img src="/images/collection/12.png" alt="" />
          <h5>Android</h5>
        </div>
      </div>
    </div>
  )
}

export default CategoryRow
