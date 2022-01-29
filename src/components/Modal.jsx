import btnCerrar from "../img/cerrar.svg"
import Mensaje from "./Mensaje"
import {useState, useEffect} from "react"

const Modal = ({
				gastoEditar, 
				setModal,
				animarModal,
				setAnimarModal,
				guardarGasto,
				ocultarModal,
				setGastoEditar
				}) => 
	{
	const [nombre, setNombre] = useState('')
	const [cantidad, setCantidad] = useState('')
	const [categoria, setCategoria] = useState('')
	const [mensaje, setMensaje] = useState('')
	const [id, setId] = useState('')
	const [fecha, setFecha] = useState('')


	useEffect( () =>{
  	if (Object.keys(gastoEditar).length > 0) {
  		//esto llamo los campos al formulario para editarlos
  		setNombre(gastoEditar.nombre)
  		setCantidad(gastoEditar.cantidad)
  		setCategoria(gastoEditar.categoria)
  		setId(gastoEditar.id)
  		setFecha(gastoEditar.fecha)
  	}
  },[gastoEditar])

	const handleSubmit = (e) => {
		e.preventDefault()
		//validacion
		if([nombre, cantidad, categoria].includes('')){
			setMensaje('Todos los campos son obligatorios')
			setTimeout( () => {
	  			setMensaje('')
	  			
	  		}, 3000)
			return;
		}
		//esta funcion le envio los datos como un objeto y en app.jsx la recibo
		guardarGasto({nombre, cantidad, categoria, id, fecha})
		ocultarModal()
	}
	
	return(
		<div className="modal">
			<div className="cerrar-modal">
				<img onClick={ocultarModal} src={btnCerrar} alt="cerrar modal"/>

			</div>
			<form onSubmit={handleSubmit} className={`formulario ${animarModal ? "animar" : 'cerrar'}`}>
			    <legend>{gastoEditar.nombre ? "Editar Gasto" : "Nuevo Gasto"}</legend>
			    {mensaje && <Mensaje tipo={'error'}>{mensaje}</Mensaje>}
			    <div className="campo">
			    	<label htmlFor="nombre">Nombre Gasto</label>
			    	<input 
			    		value={nombre}
			    		onChange={e => setNombre(e.target.value)}
			    		id="nombre"
			    		type="text"
			    		placeholder="Añade el nombre del gasto"
			    		/>
			    </div>

			    <div className="campo">
			    	<label htmlFor="cantidad">Cantidad</label>
			    	<input 
			    		value={cantidad}
			    		onChange={e => setCantidad(Number(e.target.value))}
			    		id="cantidad"
			    		type="number"
			    		placeholder="Añade la cantidad"
			    		/>
			    </div>
			    <div className="campo">
			    	<label htmlFor="categoria">Categoria</label>
			    	<select 
			    	    value={categoria}
			    		onChange={e => setCategoria(e.target.value)}
			    		id="categoria"
			    	>
				    	<option value="">-- seleccione --</option>
				    	<option value="ahorro">Ahorro</option>
				    	<option value="comida">Comida</option>
				    	<option value="casa">Casa</option>
				    	<option value="salud">Salud</option>
				    	<option value="suscripciones">suscripciones</option>
				    	<option value="gastos">gastos varios</option>
			    	</select>
			    </div>
			    <input type="submit"  value={gastoEditar.nombre ? "Guardar Cambios" : "Añadir Gasto"}/>
			</form>
		</div>

		
	)

}

export default Modal