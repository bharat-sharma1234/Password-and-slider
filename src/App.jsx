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
import Product from './Product'
import Addtocart from './Addtocart'

function App() {

  const data = [
    {
      id : 1,
      image: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg",
      productName: "burger",
      price: 90565,
      detail:'sjcnsjc'
    },
    {
      id : 2,
      image: "https://images.pexels.com/photos/15316227/pexels-photo-15316227.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      productName: "burgevhnvhfhfr",
      price: 909,
      detail:'sjcnsjckmlk'
    },
    {
      id : 3,
      image: "https://images.pexels.com/photos/10543821/pexels-photo-10543821.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      productName: "burgbbfhfhfher",
      price: 90242424,
      detail:'sjcnsjjncksdcjdkc'
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
  <Route path='/' element={<Home data={data}/>}></Route>
  <Route path='/about' element={<About/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/signup' element={<Signup/>}></Route>
  <Route path='/password' element={<Password/>}></Route>
  <Route path='/product/:id' element={<Product data={data}/>}></Route>
  <Route path='/addtocart/:id' element={<Addtocart data={data}/>}></Route>
</Routes>
<Footer/>
</BrowserRouter>

    </>
  )
}

export default App
