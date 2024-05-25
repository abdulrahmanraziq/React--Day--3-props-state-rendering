import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./Component/Navbar";
import Card from "./Component/Card";
import Header from "./Component/Header";
import image1 from './assets/image1.jpg'
import image2 from './assets/image2.jpg'
import image3 from './assets/image3.jpg'
import image4 from './assets/image4.jpg'
import image5 from './assets/image5.jpg'
import image6 from './assets/image6.jpg'
import image7 from './assets/image7.jpg'
import image8 from './assets/image8.jpg'

function App() {
const [cart, setCart] = useState(0)
let data = [
  {
    id:1,
    image: image1,
    title: 'Half Slevees Shirt',
    price: '$40.00 - $80.00',
    isStrikePrice: false,
    sale: false,
    saleText: '',
    star : false
  },

  {
    id:2,
    image: image2,
    title: 'Full Slevees Shirt',
    price: '$18.00',
    isStrikePrice: true,
    strikePrice: '$20.00',
    sale: true,
    saleText: 'sale',
    star : true
  },

  {
    id:3,
    image: image3,
    title: 'Slim Fit Shirt',
    price: '$25.00',
    isStrikePrice: true,
    strikePrice: '$50.00',
    sale: true,
    saleText: 'sale',
    star : false 
  },

  {
    id:4,
    image: image4,
    title: 'Designer Shirt',
    price: '$40.00',
    isStrikePrice: false,
    strikePrice: '',
    sale: false,
    saleText: '',
    star : false 
  },

  {
    id:5,
    image: image5,
    title: 'T-Shirt',
    price: '$25.00',
    isStrikePrice: true,
    strikePrice: '$50.00',
    sale: true,
    saleText: 'sale',
    star : false 
  },

  {
    id:6,
    image: image6,
    title: 'Full Hand T-Shirt',
    price: '$120.00 - $280.00',
    isStrikePrice: false,
    strikePrice: '',
    sale: false,
    saleText: '',
    star : false 
  },

  {
    id:7,
    image: image7,
    title: 'Round Neck T-Shirt',
    price: '$18.00',
    isStrikePrice: true,
    strikePrice: '$20.00',
    sale: true,
    saleText: 'sale',
    star : true 
  },

  {
    id:8,
    image: image8,
    title: 'Pant',
    price: '$40.00',
    isStrikePrice: false,
    strikePrice: '',
    sale: false,
    saleText: 'sale',
    star : false 
  }

]
  return (
    <>
      <Navbar cart={cart}></Navbar>
      <Header></Header>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {data.map((item, index) => {
              return <Card dataset={item} setCart={setCart} key={index}></Card>
            })}
            
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
