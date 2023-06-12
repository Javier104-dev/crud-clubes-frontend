import { borrarClub } from "../api/api";

const VerClub = (id, navigate) => {
  navigate(`/equipo/${id}/ver`);
}

const EditarClub = (id, navigate) => {
  navigate(`/equipo/${id}/editar`);
}

const BorrarClub = async (id, nombre) => {
  if (window.confirm('Deseas eliminar este equipo?')) {
    await borrarClub(id);
    window.location.reload();
    window.alert(`Club ${nombre} eliminado con exito`)
  }
}

const AgregarEquipo = (navigate) => {
  navigate('equipo/agregar');
}

export {
  VerClub,
  EditarClub,
  BorrarClub,
  AgregarEquipo
}
