import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpgi"
        alt="image"
      />
      <div className="home__row">
        <Product
          id="12345323"
          title="Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor"
          price={378}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51fbpKt3-JL._SX331_BO1,204,203,200_.jpg"
        />
        <Product
          id="2341231212"
          title="Whirlpoor 265 L 3 star double door Refrigerator"
          price={25490}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71uiII0RR3L._SY500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="7733231212"
          title="Apple iphone 11 (128GB) - Black"
          price={59900}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71i2XhHU3pL._SX679_.jpg"
        />
        <Product
          id="234123987542"
          title="Sennheiser Over Ear HD 820 Headphones (Black)"
          price={189990}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61WDbXoPQHL._SL1312_.jpg"
        />
        <Product
          id="54345231212"
          title="Microsoft Surface Book 2 Intel Core i7 8th Gen 15 inch Touchscreen 2-in-1 Laptop"
          price={223973}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/619-tSIK3TL._SX679_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="65823121212"
          title="LG 195 cms (77 inches) 4K Ultra HD Smart OLED TV OLED77C9PTA"
          price={774490}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/81s0JxBkzRL._SX679_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
