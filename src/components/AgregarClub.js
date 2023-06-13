import { useState } from "react"
import { agregarClub } from "../api/api"
import { useNavigate } from "react-router-dom";

const AgregarClub = () => {
  const [datosClub, setDatosClub] = useState({
    pais: "",
    name: "",
    address: "",
    website: "",
    clubColors: "",
    phone: 0
  });

  const setAtributos = (evento) => {
    const { name, value } = evento.target;
    setDatosClub({...datosClub, [name]: value});
  };

  const navigate = useNavigate();

  const prueba = async (evento) => {
    evento.preventDefault();
    await agregarClub(datosClub);
    navigate(-1);
  }

  return (
    <form onSubmit={prueba}>
      <h1>Agregar un Club</h1>

      <label htmlFor="nombre">Pais</label>
      <input
        name="pais"
        id="nombre"
        value={datosClub.pais}
        onChange={setAtributos}
      />

      <label htmlFor="nombre">Nombre</label>
      <input
        name="name"
        id="nombre"
        value={datosClub.name}
        onChange={setAtributos}
      />

      <label htmlFor="club">Direccion</label>
      <input
        name="address"
        id="club"
        value={datosClub.address}
        onChange={setAtributos}
      />

      <label htmlFor="ano">Website</label>
      <input
        name="website"
        id="ano"
        value={datosClub.website}
        onChange={setAtributos}
      />

      <label htmlFor="ciudad">Colores del Club</label>
      <input
        name="clubColors"
        id="ciudad"
        value={datosClub.clubColors}
        onChange={setAtributos}
      />

      <label htmlFor="miembros">Numero</label>
      <input 
        name="phone"
        type="number"
        id="miembros"
        value={datosClub.phone}
        onChange={setAtributos}
      />

      <div>
        <button type="submit">Enviar</button>
      </div>
    </form>
  )
}

export {
  AgregarClub
}