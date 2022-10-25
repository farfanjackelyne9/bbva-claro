import React from "react";
import '../styles/Infocentral.css';

const Infocentral = () => {
    return(
        <div className="container">
            <div className="row">
            <div className="col-lg-12">
                <div className="row box-info">
                <div className="col-lg-2 box">
                    <img src="https://static.claro.com.pe/img/otros/logo-ban.png" alt="logo-claro" className="logo-claro"/>
                </div>
                <div className="col-lg-7 box">
                    <p className="info-titulo">Promoción válida también en nuestros Centros de Atención Claro a nivel nacional.</p>
                    <h2 className="info-titulo-2">Encuentra el más cercano a ti</h2>
                </div>
                <div className="col-lg-3 box">
                    <a href="" className="button">
                        Encontrar tienda Claro
                    </a>
                </div>
                </div>

            </div>
            </div>

        </div>
    );
}
export default Infocentral;