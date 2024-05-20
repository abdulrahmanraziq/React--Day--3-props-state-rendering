import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./Component/Navbar";
import Card from "./Component/Card";
import Header from "./Component/Header";

function App() {
const [cart, setCart] = useState(0)
let data = [
  {
    id:1,
    image: 'src/assets/image1.jpg',
    title: 'Half Slevees Shirt',
    price: '$40.00 - $80.00',
    isStrikePrice: false,
    sale: false,
    saleText: '',
    star : false
  },

  {
    id:2,
    image: 'src/assets/image2.jpg',
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
    image: 'src/assets/image3.jpg',
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
    image: 'src/assets/image4.jpg',
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
    image: 'src/assets/image5.jpg',
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
    image: 'src/assets/image6.jpg',
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
    image: 'src/assets/image7.jpg',
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
    image: 'src/assets/image8.jpg',
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
