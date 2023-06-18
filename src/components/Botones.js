import { agregarClub, borrarClub, editarClub } from "../api/api";

const agregarNuevoClub = async (body, navigate) => {
  try {
    await agregarClub(body);
    window.alert("Club agregado con exito");
    navigate(-1);

  } catch (error) {
    console.error(error);
  }
}

const modificarClub = async (id, body, navigate) => {
  try {
    await editarClub(id, body);
    window.alert("exito al editar")
    navigate(`/equipo/${id}/ver`);

  } catch (error) {
    console.error(error);
  }
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
  agregarNuevoClub,
  modificarClub
}
