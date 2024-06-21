import React from 'react'
import './Home.css'
import './Card.css'
import { Link } from 'react-router-dom'

function Home({ data }) {

  return (
    <>
      {
        data.map((item) => (
          /* <Card
           image={item.image}
           price={item.price}
           productName={item.productName}
           /> */
          <div class="card-container" key={item.id}>
            <div class="card">
              <img src={item.image} alt={item.productName} />
              <div class="card-content">
                <h2>{item.productName}</h2>
                <p>{item.price}</p>
                <Link to={`/product/${item.id}`}><button>View More</button></Link>
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
}


export default Home
