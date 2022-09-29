import React from "react";
import '../styles/Formulario.css';

const Formulario = () => {
    return (
        <div className="contenedor-formulario">
            <h2>Ingresa tus datos y te llamaremos.</h2>
            <form>
            <div className="content-campos-form">
                <input type="text" name="myname[0]" />
                <label>
                    Nombres y apellidos
                </label>
                <span className="boder-form"></span>
            </div>

            <div className="content-campos-form">
                <input type="number" name="myname[1]" />
                <label>
                    Número de documento de identidad
                </label>
                <span className="boder-form"></span>
            </div>

            <div className="content-campos-form">
                <input type="number" name="myname[2]" />
                <label>
                    Número de celular
                </label>
            <span className="boder-form"></span>
            </div>

            <div className="content-campos-form">
                <input type="mail" name="myname[3]" />
                <label>
                    Correo electrónico
                </label>
                <span className="boder-form"></span>
            </div>
            <div className="content-campos-form">
                <select name="myname[4]" id="">
                    <option value="" name="myname[4]">¿Eres cliente de Claro?</option>
                    <option value="Si" name="myname[4]">Si</option>
                    <option value="No" name="myname[4]">No</option>
                </select>
                <span className="boder-form"></span>
            </div>
            <div className="content-campos-form">
                <input type="checkbox" name="myname[6]"/>
                <div>Autorizo el <a href="#">Tratamiento de datos personales</a></div>
            </div>
            <div className="content-campos-form">
                <input type="checkbox" name="myname[6]"/>
                <div>Acepto los términos y condiciones.</div>
            </div>
            <div>
                <button type="submit" value="Te llamamos" className="btn-enviar">Te llamamos</button></div>
            </form>
        </div>
    );
}

export default Formulario;