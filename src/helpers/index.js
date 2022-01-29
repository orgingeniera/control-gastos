//generar el id para los elementos
	export const generarId = () => {
		const ramdon = Math.random().toString(36).substr(2)
		const fecha = Date.now().toString(36).substr(2)

		return ramdon + fecha
	}

	export const formatearFecha = fecha => {
		const fechaNueva = new Date(fecha)
		const opciones = {
			year: 'numeric',
			month: 'long',
			day: '2-digit',
		}
		return fechaNueva.toLocaleDateString('es-ES', opciones)
	}

