import React from "react";
import './contacto.css'

function Contacto () {
    return(
        <div>
            <h1 id="informacion"> Contacto</h1>
            <form action="" method="" >
                <label htmlFor="Nombre" className="nombre">Nombre</label>
                <input type="text"  name="name" id="name"/><br />   
                <label htmlFor="Apellido">Apellido</label>
                 <input type="text" name="Apellido" id="Apellido"/><br />   
                <label htmlFor="Genero"> Genero</label>
                <select name="Genero" id="Genero">
                    <option value="1">Seleccionar...</option>
                    <option value="2">Mujer</option>
                    <option value="3">Hombre</option>
                    <option value="4">Otro</option>
                </select><br />
                <label htmlFor="Telphone">Telefono</label>
                <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/><br />
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" id="email"/><br />
                <label htmlFor="Description" id="contacto">Razon de Contacto</label><br />
                <input type="text" name="Description" id="description" />
                <input type="button" value="enviar" />
                <input type="reset" value="" />

                

            </form>
        </div>
    )
}

export default Contacto