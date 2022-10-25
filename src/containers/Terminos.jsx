import React, { useState } from "react";
import '../styles/Terminos.css';

const Terminos = () => {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className="content">
            <div className="tabs">
                <h2>Términos y condiciones</h2>
                <div className="faq-container">
                    <div className="faq">
                        <h3 className="faq-title" >Sujeto a evaluación crediticia</h3>
                        {isActive && (
                            <div className="faq-text">
                                <p>
                                    Promoción es válida desde 09.07.21 al 31.12.22. Valido en todos los CACS a nivel nacional. Exclusivo en todos los Centros de Atencion de Claro a nivel nacional, encuentra el más cercano aquí: <a href="https://claro.com.pe/contactanos/">https://claro.com.pe/contactanos/</a>. Válido también para clientes que se inscriban en el formulario: <a href="https://tiendaclaro.pe/bbva">https://tiendaclaro.pe/bbva</a> Sujeto a evaluación crediticia. Aplica con acuerdo de equipos de 18 meses al contado con Claro. Válido para tarjetas titulares y adicionales. Aplica para portabilidad y renovación en planes desde Max 49.90. Aplica solo para líneas Postpago en operador cedente. La línea debe contar con el servicio activo y/o sin ningún tipo de bloqueo. No aplica a clientes corporativos. Válido para clientes con DNI, CE o RUC 10 sin negocio. Stock mínimo: 10 unidades por modelo. No aplica con otras promociones vigentes. No se manejarán puntos BBVA. El titular de la tarjeta BBVA necesariamente debe ser el titular de la línea Claro. No incluye accesorios. Monto mínimo de compra es de S/. 500. No válido en ACD, Cadenas y Distribuidores. Solo aplica para comprar de equipos con lineas (no aplica pago de servicios). No aplica para Claro Puntos. Participan todas las tarjetas de crédito del BBVA (Visa o Mastercard) - desde la básica hasta la infinite. No aplica para Tarjetas Empresariales (con excepción de la Tarjeta Capital de Trabajo del BBVA).El cliente debe elegir un número de cuotas desde 2 hasta 12 cuotas al momento de realizar la compra. No válido para POS Poket, VendeMás o Mpos. No válido para cobros cruzados, es decir, pagar con Tarjeta de Crédito Visa en un POS MasterCard, Izipay o Izilink ni pagar con una Tarjeta de Crédito MasterCard en un POS Niubiz, Mercado Pago, Pago Link Niubiz o POS web Niubiz. Para pagos presenciales recuerda revisar que en tu voucher figure la frase "Pago Sin Intereses" y/o verificar que el valor cuota corresponda sin intereses. Las transacciones realizadas con Tarjeta de Débito o Crédito se encuentran sujetas a confirmación por parte del comercio involucrado para ser cargadas, hasta no contar con dicha confirmación, el monto de las transacciones se refleja como "pendiente" en el correspondiente Estado de Cuenta. En ese sentido, BBVA no se responsabiliza por la confirmación de transacciones y demoras en las mismas, siendo éstas exclusiva responsabilidad del comercio elegido por el cliente. Cada comercio cuenta con condiciones distintas para la aplicación del beneficio Pagos Sin Intereses que puedes encontrar en "Términos y condiciones de la marca".
                                </p>
                            </div>
                        )}
                        <button className="faq-toggle">
                            <i className="button-d" onClick={e => setIsActive(!isActive)}></i>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Terminos;