import React, { Fragment } from "react";
import "./home.css";
import Slider from "../header/Slider/Slider";
import Categ from "../header/categery/Images";
import { Link } from 'react-router-dom';
import Entry from "../header/nav/Nav";

import HomeProduct from "./HomeProduct";


const Home = () => {
  return (
    <Fragment>

      <div>
        <Entry/>
      </div>

      <div className="Catg">
        <Link to={"/products"} > <Categ /></Link>
        <Link to={"/products"} > <Categ /></Link>
        <Link to={"/products"} > <Categ /></Link>
        <Link to={"/products"} > <Categ /></Link>
        <Link to={"/products"} > <Categ /></Link>
        <Link to={"/products"} > <Categ /></Link>
        
      </div>
      <div>
        <Slider/>
      </div>

      <div>
        <h1 style={{marginLeft:"100px",marginTop:"50px",padding:"20px" ,background:"white",color:"aqua"}} className="heading">Finding <span style={{color:"tomato"}}>Amzing</span> Book Here :-</h1>
      <HomeProduct/>
      </div>
      
    </Fragment>
  );
};

export default Home;
