import { useState } from "react"
import { agregarClub } from "../api/api"
import { useNavigate } from "react-router-dom";

const AgregarClub = () => {
  const [datosClub, setDatosClub] = useState({
    nombre: "",
    club: "",
    ano: "",
    ciudad: "",
    miembros: 0
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

      <label htmlFor="nombre">Nombre</label>
      <input name="nombre" id="nombre" value={datosClub.nombre} onChange={setAtributos}></input>

      <label htmlFor="club">Club</label>
      <input name="club" id="club" value={datosClub.club} onChange={setAtributos}></input>

      <label htmlFor="ano">Año</label>
      <input name="ano" type="date" id="ano" value={datosClub.ano} onChange={setAtributos}></input>

      <label htmlFor="ciudad">Ciudad</label>
      <input name="ciudad" id="ciudad" value={datosClub.ciudad} onChange={setAtributos}></input>

      <label htmlFor="miembros">Miembros</label>
      <input name="miembros" type="number" id="miembros" value={datosClub.miembros} onChange={setAtributos}></input>

      <div>
        <button type="submit">Enviar</button>
      </div>
    </form>
  )
}

export {
  AgregarClub
}
// nombre,
// club,
// ano,
// ciudad,
// miembros,