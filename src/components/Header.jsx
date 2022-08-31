import React from "react";
import '../styles/Header.css';

const Header = () => {
    return (
        <div className="Header">
            <div className="contenedor-header-general">
                <div className="contenedor">
                    <nav>
                        <ul>
                            <li>
                                <a href="">Personas</a>
                            </li>
                            <li>
                                <a href="">Negocios</a>
                            </li>
                        </ul>
                        <div>
                            <img src="https://tiendaclaro.pe/assets/img/header/car-store.svg?date=2021020201" alt="" />
                            <span>Sigue tu pedido</span>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="contenedor-header-2">
                <div className="contenedor">
                    <nav>
                        <a href="">
                            <img src="https://tiendaclaro.pe/assets/img/header/logo.png?date=2021020201" alt="" />
                        </a>
                        <div>
                            <button>
                                <img src="https://tiendaclaro.pe/assets/img/ic_cart.svg?date=2021020201" alt="" />
                                <span>Mi Bolsa</span>
                            </button>
                            <button>
                                <img src="https://tiendaclaro.pe/assets/img/ic_search.svg?date=2021020201" alt="" />
                                <span>Buscar</span>
                            </button>
                            <button>
                                <img src="https://tiendaclaro.pe/assets/img/header/menu.png?date=2021020201" alt="" />
                                <span>Menú</span>
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Header;