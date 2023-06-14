const { useReducer, useEffect } = require("react");

const estadoInicial = { cargando: false, datos: null, error: null }

const estados = (estadoActual, accion) => { 
  const { tipo, carga } = accion;

  switch (tipo) {
    case 'CARGANDO':
      return { ...estadoActual, cargando: true, datos: null, error: null};

    case 'EXITO':
      return { ...estadoActual, cargando: false, datos: carga, error: null};

    case 'ERROR':
      return { ...estadoActual, cargando: false, datos: null, error: carga};

    default:
      return estadoActual;
  }
}

const useObtenerDatos = (peticion, parametro = undefined) => {
  const [estado, dispatch] = useReducer(estados, estadoInicial);

  useEffect(() => {
    const obtenerDatos = async () => {
      dispatch({ tipo: 'CARGANDO' });
      try {
        const datos = await peticion(parametro);
        dispatch({ tipo: 'EXITO', carga: datos })

      } catch (error) {
        dispatch({ tipo: 'ERROR', carga: error})
      }
    }
    obtenerDatos();
  },[peticion, parametro])

  return estado;
}

export {
  useObtenerDatos
}