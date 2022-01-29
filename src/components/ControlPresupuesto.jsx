import {useEffect, useState} from "react"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ControlPresupuesto = ({
						presupuesto, 
						setPresupuesto, 
						gasto,
						setGasto,
						setisValidPresupuesto}) => 
{
	const [disponible, setDisponible] = useState(0)
	const [porcentaje, setPorcentaje] = useState(0)
	const [gastado, setGastado] = useState(0)

	useEffect(() =>{
		
			const totalGasto = gasto.reduce( (total, gastos) => gastos.cantidad + total, 0);
			const totalDisponible = presupuesto - totalGasto
			const nuevoPorcentaje = (((presupuesto - totalDisponible ) / presupuesto) * 100).toFixed(2)
			
			

			setDisponible(totalDisponible)
			setGastado(totalGasto)

			//setTimeout( () => {
  			setPorcentaje(nuevoPorcentaje)
  			
  			//}, 1500)

	}, [gasto])
	const handleResetApp = () => {
		const resultado = confirm("¿Esta seguro de resetear la APP - presuestos y gastos?")
		if (resultado) {
			//reinicio todo para comenzar de nuevo
			setGasto([])
			setPresupuesto(0)
			setisValidPresupuesto(false)
		}
	}
	//formatear valor a moneda
	const FormatearCantidad = (catidad) => {
		return catidad.toLocaleString('en-US',{
			style: 'currency',
			currency: 'USD'
		})

	}
	return(
		<div className="contenedor-presupuesto contenedor sombra dos-columnas">
			<div>
				<p>
					<CircularProgressbar
					 styles={buildStyles({
					 	pathColor: porcentaje > 100 ? 'red' :'#3B82F6',
					 	trailColor: '#F5F5F5',
					 	textColor: porcentaje > 100 ? 'red' :'#3B82F6',
					 	pathTransitionDuration: 2.00
					 })}
					 value={porcentaje} 
					 text={`${porcentaje}% Gastado`} 
					 />
				 </p>
			</div>
			<div className="contenido-presupuesto">
				<button
				 className="reset-app"
				 type="button"
				 onClick={handleResetApp}
				>
					Resetear App
				</button>
				<p>
					 <span>Presupuesto:</span>
					 {FormatearCantidad(presupuesto)}
				 </p>
				 <p className={`${disponible < 0 ? 'negativo' : '' }`}>
					 <span>Disponible:</span>
					 {FormatearCantidad(disponible)}
				 </p>
				 <p>
					 <span>Gastado:</span>
					 {FormatearCantidad(gastado)}
				 </p>
			</div>
		</div>
	)

}

export default ControlPresupuesto