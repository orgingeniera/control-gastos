import React from 'react';
import Nuevopresupuesto from './Nuevopresupuesto';
import ControlPresupuesto from './ControlPresupuesto';

const Header = ({presupuesto, 
	setPresupuesto,
	setisValidPresupuesto,
	isValidPresupuesto,
	gasto,
	setGasto
	}) => {

	// en este codigo puedo cambiar de pagina valido si es verdadero o no {isValidPresupuesto ? (
	return(
		<header>
			<h1>Planificador de Gastos</h1>
			{isValidPresupuesto ? (
				<ControlPresupuesto 
						setisValidPresupuesto={setisValidPresupuesto}
						setPresupuesto={setPresupuesto}
						setGasto={setGasto}
						gasto={gasto}
						presupuesto={presupuesto}
				/>
			) : (
				<Nuevopresupuesto 
			    presupuesto={presupuesto}
    			setPresupuesto={setPresupuesto}
    			setisValidPresupuesto={setisValidPresupuesto}
    		 />
			)}
			
		</header>
	)

}

export default Header