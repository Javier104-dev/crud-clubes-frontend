import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { agregarNuevoClub } from "./Botones";

const AgregarClub = () => {
  const navigate = useNavigate();

  const [datosClub, setDatosClub] = useState({
    pais: "",
    name: "",
    address: "",
    website: "",
    clubColors: "",
    phone: "",
    escudo: null,
  });

  const setAtributos = (e) => {
    const {name, value, files} = e.target;
    setDatosClub({
      ...datosClub,
      [name] : files ? files[0] : value
    });
  };

  const onSubmitAgregar = async (evento) => {
    evento.preventDefault();
    await agregarNuevoClub(datosClub, navigate)
  }

  return (
    <form onSubmit={onSubmitAgregar}>
      <h1>Agregar un Club</h1>

      <label htmlFor="escudo">Imagen</label>
      <input
        id="escudo"
        type="file"
        name="escudo"
        onChange={setAtributos}
      />

      <label htmlFor="pais">Pais</label>
      <input
        id="pais"
        name="pais"
        value={datosClub.pais}
        onChange={setAtributos}
      />

      <label htmlFor="nombre">Nombre</label>
      <input
        id="nombre"
        name="name"
        value={datosClub.name}
        onChange={setAtributos}
      />

      <label htmlFor="direccion">Direccion</label>
      <input
        id="direccion"
        name="address"
        value={datosClub.address}
        onChange={setAtributos}
      />

      <label htmlFor="pagina">Website</label>
      <input
        id="pagina"
        name="website"
        value={datosClub.website}
        onChange={setAtributos}
      />

      <label htmlFor="colores">Colores del Club</label>
      <input
        id="colores"
        name="clubColors"
        value={datosClub.clubColors}
        onChange={setAtributos}
      />

      <label htmlFor="numero">Numero</label>
      <input 
        id="numero"
        name="phone"
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