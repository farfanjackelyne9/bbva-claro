import React from "react";
import Formulario from "../components/Formulario";
import '../styles/Banner.css';

const Banner = () => {
    return (
        <div className="banner-content">
            <div className="content-banner-ppal">
            <div className="content-img-banner">
                <img className="logo-banco" src="https://static.claro.com.pe/img/otros/logo-bbva-12-08.png" alt="" />
                <img className="img-text" src="https://static.claro.com.pe/img/otros/Web-bbva-15-09.png" alt="" />
                <img className="img-segundaria" src="https://static.claro.com.pe/img/otros/2-bbva-13-09.png" alt="" />
            
            
            </div>
            <Formulario />
            </div>
            <div className="content-text-bottom">
                <h1>Exclusivo con tu tarjeta de crédito BBVA Visa o Mastercard.</h1>
            </div>
        </div>
        

    );
}

export default Banner;