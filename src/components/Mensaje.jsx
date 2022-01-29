import React from 'react';
import Nuevopresupuesto from './Nuevopresupuesto';


const Mensaje = ({children, tipo}) => {
	return(
		<div className={`alerta ${tipo}`}>{children}</div>
	)

}

export default Mensaje