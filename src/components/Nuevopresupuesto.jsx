import React from 'react';
import Mensaje from "./Mensaje"

import {useState} from "react";
const Nuevopresupuesto = ({presupuesto,
						 setPresupuesto, 
 							setisValidPresupuesto
 						}) => {
	const [mensaje, setMensaje] = useState('')

	const handlePresupuesto = (e) => {
			e.preventDefault();
			
			if (!presupuesto || presupuesto < 0) {
				setMensaje("No es un presupuesto valido")
				//con el return se rompen las siguientes lineas hasta aqui llega el if
				return;
			}
			setMensaje('')
			setisValidPresupuesto(true)		
			
	}
	return(
		<div className='contenedor-presupuesto contenedor sombra'>
			<form onSubmit={handlePresupuesto} className="formulario">
				<div className="campo">
					<label htmlFor="presupuesto" >Definir Presupuesto</label>
					<input 
						type="number"						
						className="nuevo-presupuesto"
						placeholder="Añade tu presupuesto"
						value={presupuesto}
						onChange={ e => setPresupuesto(Number(e.target.value)) }
				 />
				</div>
				<input type="submit" value="añadir" />
				{mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
			</form>
		</div>
	)

}

export default Nuevopresupuesto