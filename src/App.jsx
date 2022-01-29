import { useState, useEffect } from 'react'
import Header from './components/Header'
import Filtros from './components/Filtros'
import ListadoGastos from './components/ListadoGastos'
import Modal from './components/Modal'
import {generarId} from "./helpers"
import IconoNuevoGasto from "./img/nuevo-gasto.svg"
function App() {
  const [count, setCount] = useState(0)
  //asigno el valor inicial de lo que esta en localstore sino 0
  const [presupuesto, setPresupuesto] = useState(
  	Number(localStorage.getItem('presupuesto')) ?? 0)
  const [isValidPresupuesto, setisValidPresupuesto] = useState(false)
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)
  const [gasto, setGasto] = useState(
  	localStorage.getItem('gasto') ? JSON.parse(localStorage.getItem('gasto')) : [])
  const [gastoEditar,setGastoEditar] = useState({})
  const [filtro, setFiltro] = useState('')
  const [gastosFiltrados, setGastosFiltrados] = useState([])

  useEffect( () =>{
  	if (Object.keys(gastoEditar).length > 0) {
  		setModal(true)
	  
	  	setTimeout( () => {
	  			setAnimarModal(true)
	  			
	  	}, 500)
  	}
  },[gastoEditar])

useEffect( () =>{
	//creo localstore sino existe le asigno 0
	localStorage.setItem('presupuesto', presupuesto ?? 0)
},[presupuesto] )

useEffect( () => {
 const presupuestoLs = Number(localStorage.getItem('presupuesto')) ?? 0

 if (presupuestoLs > 0) {
 		setisValidPresupuesto(true)
 }

}, [])

useEffect( () => {
	localStorage.setItem('gasto', JSON.stringify( gasto ) ?? [])
},[gasto] )
  //oculto la ventana modal
  const ocultarModal = () => {
		
		setAnimarModal(false)
		setGastoEditar({})
		setTimeout( () => {
  			setModal(false)
  			
  		}, 500)
	}
useEffect( () => {
	if (filtro) {
		//filtras gastos por categoria
		const gastosFiltrados= gasto.filter( gasto => gasto.categoria === filtro)
		setGastosFiltrados(gastosFiltrados)
	}
},[filtro])
//añade un nuevo gasto
  const handleNuevoGasto = () => {
  	setModal(true)
  	setGastoEditar({})

  	setTimeout( () => {
  			setAnimarModal(true)
  			
  	}, 500)

  }

  // aca recibo los datos de modal y en la variable gastos, recibo el arreglo
const guardarGasto = gastos => {

	if(gastos.id){
		//actualizar
		const gastosActualizados = gasto.map( gastoState => gastoState.id === gastos.id ? gastos : gastoState)
		setGasto(gastosActualizados)
		setGastoEditar({})
	}else{
		gastos.id=generarId()
		gastos.fecha= Date.now()
		//añadimos el id del arreglo
		//gasto.id = generarId()
		//creamos una copia  de gastos [...gasto] y le agregamos el nuevo gasto.[gasto]
		setGasto([...gasto, gastos])
	}
	
	//oculto el modal
	ocultarModal()
}
 //eliminando
 const eliminarGasto = id => {
 	
 
	 	const gastosActualizados = gasto.filter( gastos => gastos.id !== id)
	 	setGasto(gastosActualizados)

	 	
 	
 }
  return (
  	<div className={modal ? 'fijar' : ''}>
    	
    	<Header
    			gasto={gasto}
    			setGasto={setGasto}
    			presupuesto={presupuesto}
    			setPresupuesto={setPresupuesto}
    			isValidPresupuesto={isValidPresupuesto}
    			setisValidPresupuesto={setisValidPresupuesto}

    	 />
    	
    	 {isValidPresupuesto && (
    	 	<>
	    	 	<main>
	    	 		<Filtros filtro={filtro} setFiltro={setFiltro} />
	    	 		<ListadoGastos
						eliminarGasto={eliminarGasto}
						setGastoEditar={setGastoEditar}
						gasto={gasto}
						filtro={filtro}
						gastosFiltrados={gastosFiltrados}
	    	 		 />

	    	 	</main>
	    	 	 <div className="nuevo-gasto">
		    	 	<img 
		    	 	src={IconoNuevoGasto} alt="Nuevo gasto"
		    	 	onClick={handleNuevoGasto}
		    	   />
	    	    </div>
    	    </>
    	 )}
    	 
    	

    	 {modal && <Modal
    	  gastoEditar={gastoEditar}
    	  ocultarModal={ocultarModal} 
    	  guardarGasto={guardarGasto}
    	  setAnimarModal={setAnimarModal}
    	  setModal={setModal}
    	  animarModal={animarModal}
    	  setGastoEditar={setGastoEditar}
    	  />}
    	 
    </div>
  )
}

export default App
