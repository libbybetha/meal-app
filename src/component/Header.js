import React from "react";
import {useNavigate } from "react-router-dom";

const Header = () =>{

    const history = useNavigate()

    const handleArea = () =>{
        history('/area')
    }

    const handleIngredient = () =>{
        history("/ingredients")
    }
    const handleHome = () =>{
        history("/")
    }
    return(
        <div className="header px-2">
             <div className='navbar-heading'>
                       <h1>Meal <span>App</span></h1>
        </div>
            <div className="d-flex">
                <button className="btn" onClick={handleHome}><strong>Meal</strong></button>
                <button className="btn " onClick={handleIngredient}>Meal by Type</button>
                <button className="btn " onClick={handleArea}>Food by Area</button>
            </div>
           
        </div>
    )
}

export default Header;