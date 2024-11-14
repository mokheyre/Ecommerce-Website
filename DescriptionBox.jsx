import React from 'react'
import './DescriptionBox.css';
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
          <p>"An e-commerce website is an online platform that allows businesses to sell products and services directly to consumers over the internet. This type of site enables transactions, order processing, and customer management, providing a streamlined and convenient way for consumers to purchase goods and services from anywhere."</p>
        </div>
    </div>
  )
}

export default DescriptionBox