import { borrarClub } from "../api/api";

const Boton = (props) => {
  return (
    <button onClick={props.funcion}>{props.children}</button>
  )
}

const BorrarClub = async (id, nombre, datos, setDatos) => {
  if (window.confirm('Deseas eliminar este equipo?')) {
    await borrarClub(id);
    const nuevosDatos = datos.filter(equipo => equipo.id !== id);
    setDatos(nuevosDatos);
    window.alert(`Club ${nombre} eliminado con exito`)
  }
}

export {
  BorrarClub,
  Boton
}
