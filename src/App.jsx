import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'
// import Card from './Card'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import About from './About'
import Count from './Count'
import Password from './Password'

function App() {

  const data = [
    {
      id : 1,
      image: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg",
      productName: "burger",
      price: 90565
    },
    {
      id : 2,
      image: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg",
      productName: "burgevhnvhfhfr",
      price: 909
    },
    {
      id : 3,
      image: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg",
      productName: "burgbbfhfhfher",
      price: 90242424
    },
    

  ]


  return (
    <>
      {/* <Navbar />
      <div className='cardd'>
       
        {
          data.map((item) => {
            return <Card
            image={item.image}
            price={item.price}
            productName={item.productName}
            />
          })
        }
      </div>
      <Footer /> */}

<BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/home' element={<Home data={data}/>}></Route>
  <Route path='/about' element={<About/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/signup' element={<Signup/>}></Route>
  <Route path='/' element={<Password/>}></Route>
</Routes>
<Footer/>
</BrowserRouter>

    </>
  )
}

export default App
