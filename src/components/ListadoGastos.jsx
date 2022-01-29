import React from 'react';
import Gasto from "./Gasto"	


const ListadoGastos = ({filtro,
						gastosFiltrados,
						gasto, 
						setGastoEditar,
						eliminarGasto}) =>
 {
	return(
		<div className="Listado-gastos contenedor">
			

			 {
			 	filtro ? (
			 		<>
			 		<h2>{gastosFiltrados.length ? 'Gastos' : 'No hay gastos aún'}</h2>
			 		{gastosFiltrados.map( gastos => (
								<Gasto
										key={gastos.id}
										gastos={gastos}
										setGastoEditar={setGastoEditar}
										eliminarGasto={eliminarGasto}
								/>
							))}
			 		</>
			 		) : (
			 		<>
			 		<h2>{gasto.length ? 'Gastos' : 'No hay gastos aún'}</h2>
			 			{gasto.map( gastos => (
								<Gasto
										key={gastos.id}
										gastos={gastos}
										setGastoEditar={setGastoEditar}
										eliminarGasto={eliminarGasto}
								/>
							))}
			 		
			 		   </>
			 		)
			 }
			

		</div>
	)

}

export default ListadoGastos