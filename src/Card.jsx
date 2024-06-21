import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

function Card({image,productName,price}) {
  return (
    <>
       {/* <div class="card-container">
            <div class="card">
                <img src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg" alt="Delicious Food"/>
                <div class="card-content">
                    <h2>Gourmet Burger</h2>
                    <p>Experience the taste of gourmet burgers with this simple yet delicious recipe.</p>
                </div>
            </div>
        </div> */}

<div class="card-container">
            <div class="card">
                <img src={image} alt={productName}/>
                <div class="card-content">
                    <h2>{productName}</h2>
                    <p>{price}</p>
                    <Link to={`/product/${item.id}`}><button>View More</button></Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card
