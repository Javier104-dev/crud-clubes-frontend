import { useEffect, useState } from "react"
import { verClubSeleccionado } from "../api/api"
import { useNavigate, useParams } from "react-router-dom";
import { useObtenerDatos } from "../hook/useObtenerDatos";
import Cargando from "./Cargando";
import { modificarClub } from "./Botones";

const EditarClub = () => {
  const { id } = useParams();
  const { cargando, datos, error } = useObtenerDatos(verClubSeleccionado, id);
  const navigate = useNavigate();

  const [club, setClub] = useState({
    pais: "",
    name: "",
    address: "",
    website: "",
    clubColors: "",
    phone: "",
  });

  useEffect(() => {
    if (datos) {
      setClub({
        pais: datos.area.name,
        name: datos.name,
        address: datos.address,
        website: datos.website,
        clubColors: datos.clubColors,
        phone: datos.phone || ""
      });
    }
  }, [datos]);

  const setAtributos = (e) => {
    setClub({
      ...club,
      [e.target.name]: e.target.value
    })
  }

  const onSubmitEditar = async (e) => {
    e.preventDefault();
    await modificarClub(id, club, navigate);
  }

  return (
  <>
  {cargando && <Cargando/>}
  {datos && (
    <form onSubmit={onSubmitEditar}>
    <div>
      <img></img>
      <span>{datos.name}</span>
    </div>

    <label htmlFor="pais">Pais</label>
    <input
      id="pais"
      name="pais"
      value={club.pais}
      onChange={setAtributos}
    />

    <label htmlFor="nombre">Nombre</label>
    <input
      id="nombre"
      name="name"
      value={club.name}
      onChange={setAtributos}
    />

    <label htmlFor="direccion">Direccion</label>
    <input
      id="direccion"
      name="address"
      value={club.address}
      onChange={setAtributos}
    />

    <label htmlFor="pagina">Pagina</label>
    <input
      id="pagina"
      name="website"
      value={club.website}
      onChange={setAtributos}
    />

    <label htmlFor="clubColors">Colores del Club</label>
    <input
      id="clubColors"
      name="clubColors"
      value={club.clubColors}
      onChange={setAtributos}
    />

    <label htmlFor="telefono">Telefono</label>
    <input
      id="telefono"
      name="phone"
      value={club.phone}
      onChange={setAtributos}
    />

    <div>
      <button type="submit">Enviar</button>
    </div>
  </form>
  )}
{error && <div>{error}</div>}
</>
  )
}

export {
  EditarClub
}