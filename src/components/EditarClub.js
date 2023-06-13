import { useEffect, useState } from "react"
import { verClubSeleccionado } from "../api/api"
import { useParams } from "react-router-dom";

const EditarClub = () => {
  const { id } = useParams()
  const [club, setClub] = useState({
    pais: "",
    name: "",
    address: "",
    website: "",
    clubColors: "",
    phone: 0,
  });

  const setAtributos = (e) => {
    setClub({
      ...club,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    const datos = async () => {
      const club = await verClubSeleccionado(id);
      setClub(club)
    }
    datos();
  }, [id]);

  return (
    <form >
      <div>
        <img></img>
        <span>{club.name}</span>
      </div>

      <label htmlFor="nombre">Pais</label>
      <input
        name="pais"
        value={club.area.name}
        onChange={setAtributos}
      />

      <label htmlFor="nombre">Nombre</label>
      <input
        name="name"
        value={club.name}
        onChange={setAtributos}
      />

    <label htmlFor="club">Direccion</label>
    <input
      name="address"
      value={club.address}
      onChange={setAtributos}
    />

    <label htmlFor="ano">Pagina</label>
    <input
      name="website"
      value={club.website}
      onChange={setAtributos}
    />

    <label htmlFor="ciudad">Colores del Club</label>
    <input
      name="clubColors"
      value={club.clubColors}
      onChange={setAtributos}
    />

    <label htmlFor="miembros">Numero</label>
    <input
      name="phone"
      value={club.phone}
      onChange={setAtributos}
    />
  
    <div>
      <button type="submit">Enviar</button>
    </div>
  </form>
  )
}

export {
  EditarClub
}