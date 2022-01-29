import React from 'react';
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';	
import {formatearFecha} from '../helpers/'

import IconoAhorro from "../img/icono_ahorro.svg"
import IconoCasa from "../img/icono_casa.svg"
import IconoComida from "../img/icono_comida.svg"
import IconoOcio from "../img/icono_ocio.svg"
import IconoSalud from "../img/icono_salud.svg"
import IconoSuscripciones from "../img/icono_suscripciones.svg"
import IconoGastos from "../img/icono_gastos.svg"

const diccionarioIconos = {
	ahorro : IconoAhorro,
	casa : IconoCasa,
	comida : IconoComida,
	ocio : IconoOcio,
	salud : IconoSalud,
	suscripciones : IconoSuscripciones,
	gastos : IconoGastos

}

const Gasto = ({gastos, setGastoEditar, eliminarGasto}) => {

	const leadingActions = () =>(
		<LeadingActions>
			<SwipeAction onClick={() => setGastoEditar(gastos) }>
			Editar
			</SwipeAction>
		</LeadingActions>
	)

	
	const trailingActions = () => (
		<TrailingActions>
			<SwipeAction onClick={() => eliminarGasto(gastos.id) }
						destructive={true}
			>
				eliminar
			</SwipeAction>
		</TrailingActions>
	)
		
	

	return(
		<SwipeableList>
			<SwipeableListItem 
				leadingActions={leadingActions()}
				trailingActions={trailingActions()}
			>
				<div className="gasto sombra">
					<div className="contenido-gasto">
					<img
					 src={diccionarioIconos[gastos.categoria]} alt="gastos"
					/>
						<div className="descripcion-gasto">	
							<p className="categoria">{gastos.categoria}</p>
							<p className="nombre-gasto">{gastos.nombre}</p>
							<p className="fecha-gasto">
								Agredo el {''}
								<span>	{formatearFecha(gastos.fecha)}</span>
							</p>
						</div>

					</div>
					<p className="cantidad-gasto">${gastos.cantidad}</p>
				</div>
			</SwipeableListItem>
		</SwipeableList>
	)

}

export default Gasto