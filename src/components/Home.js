import  './Home.css';
import Products from './Products';
import Star from './Star';
import React from 'react'
import Footer from './Footer';
import prime from '../images/primeIndependence.jpg';
function Home() {
  return (
        <div className="home">
        
         <img className="home-banner-image" src={prime} alt="amazonbanner"/>
            
         
            {/* Products here */}
            <div className="home-row">
                <Products 
                id="36595915"
                title=" HP Pavilion x360 Core i7 8th Gen 14-inch Touchscreen 2-in-1 FHD Thin and Light Laptop (16GB/512GB SSD/Windows 10/MS Office/2GB Graphics/Mineral Silver/1.59 kg), 14- dh0045TX"
                price={700.99}
                rating={<Star/>}
                image="https://m.media-amazon.com/images/I/712apOL4JaL._AC_UY218_.jpg"/>
                <Products 
                id="45672435"
                title="Mask and hand sanitizer keeps away from corona.Be safe at home.King Shine Anti Pollution Protection K N 95 face Mask & Respirator Combo (2 Mask And One Hand Sanitizer)"
                price={4.90}
                rating={<Star/>}
                image="https://images-na.ssl-images-amazon.com/images/I/41xU103tGDL._SX425_.jpg"/>
            </div>
          
            <div className="home-row">
                <Products 
                id="12761002"
                title="Fire TV Stick streaming media player with Alexa built in, includes all-new Alexa Voice Remote, HD, easy set-up, released 2019"
                price={58.60}
                rating={<Star/>}
                image="https://m.media-amazon.com/images/I/51FWoUi2uiL._AC_UY218_.jpg"/>
                <Products 
                id="10099426"
                title="Samsung Galaxy M21 (Raven Black, 4GB RAM, 64GB Storage)"
                price={200.90}
                rating={<Star/>}
                image="https://m.media-amazon.com/images/I/71QLvGIAq5L._AC_UY218_.jpg"/>
                <Products 
                id="25007231"
                title="Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens, 16GB Card and Carry Case"
                price={475.90}
                rating={<Star/>}
                image="https://images-eu.ssl-images-amazon.com/images/I/51UHoxzInpL._AC_SY200_.jpg"/>
             </div>
             
             
            <div className="home-row">
                <Products 
                id="12661802"
                title="Apple Watch Series 5 (GPS, 44mm) - Silver Aluminium Case with White Sport Band"
                price={698.60}
                rating={<Star/>}
                image="https://m.media-amazon.com/images/I/71HtGqb9vXL._AC_UY218_.jpg"/>
                <Products 
                id="15559505"
                title="VPRINT QUALITY Hanuman murti Multicolor (3X5)"
                price={4.90}
                rating={<Star/>}
                image="https://m.media-amazon.com/images/I/51V6j1R0PiL._AC_UL320_.jpg"/>
                <Products 
                id="20907011"
                title="pTron Boom3 Ultima 4D Dual Driver in-Ear Wired Headphones with Mic - (Black and Silver)"
                price={11.50}
                rating={<Star/>}
                image="https://m.media-amazon.com/images/I/61SOGzRa7+L._AC_UY218_.jpg"/>
                <Products 
                id="30924300"
                title="BelleVie
                Cotton Salwar for women and girls_free size"
                price={14.99}
                rating={<Star/>}
                image="https://m.media-amazon.com/images/I/615qYe2A7lL._AC_UL320_.jpg"/>
         </div>

             <div className="home-row">
                <Products 
                id="10002311"
                title="Branded Men's and Women Fashion"
                price={7.89}
                rating={<Star/>}
                image="https://images-eu.ssl-images-amazon.com/images/I/31+k-XGy4+L._AC_SY200_.jpg"/>
                <Products 
                id="10002311"
                title="Bacca Bucci® Men's Phantom Running Shoes Lightweight Shockproof Walking Shoes Cushioning Men Sneakers for Gym Sports Casual Athletic Outdoor-Size-UK-6 to 13/Big"
                price={13.89}
                rating={<Star/>}
                image="https://m.media-amazon.com/images/I/71hfZ8yu-5L._AC_UL320_.jpg"/>
            </div>
      <Footer/>
        </div>
    );
}

export default Home;
