import { verClubSeleccionado } from "../api/api";
import { NavLink, useParams } from "react-router-dom";
import { useObtenerDatos } from "../hook/useObtenerDatos";
import Cargando from "./Cargando"
import "./VerClub.css"

const VerClub = () => {
  const { id } = useParams();
  const { cargando, datos, error } = useObtenerDatos(verClubSeleccionado, id);

  return (
    <section className="club">
      {cargando && <Cargando/>}
      {datos &&
        <>
        <div className="club__escudo">
          <img className="club__escudo__imagen" src={datos.escudo} alt={datos.name}></img>
          <span className="club__escudo__nombre">{datos.name}</span>
        </div>
        <table className="club__tabla estilos__tabla__club">
          <tbody>
            <tr className="club__tabla_encabezado">
              <th className="estilos__tabla__club">Informacion</th>
              <th className="estilos__tabla__club">Valor</th>
            </tr>
            <tr className="club__tabla__registros">
              <td className="estilos__tabla__club">Pais</td>
              <td className="estilos__tabla__club">{datos.area.name}</td>
            </tr>
            <tr className="club__tabla__registros">
              <td className="estilos__tabla__club">Nombre</td>
              <td className="estilos__tabla__club">{datos.name}</td>
            </tr>
            <tr className="club__tabla__registros">
              <td className="estilos__tabla__club">Direccion</td>
              <td className="estilos__tabla__club">{datos.address}</td>
            </tr>
            <tr className="club__tabla__registros">
              <td className="estilos__tabla__club">Pagina web</td>
              <td className="estilos__tabla__club"><NavLink to={datos.website}>{datos.website}</NavLink></td>
            </tr>
            <tr className="club__tabla__registros">
              <td className="estilos__tabla__club">Colores del club</td>
              <td className="estilos__tabla__club">{datos.clubColors}</td>
            </tr>
            <tr className="club__tabla__registros">
              <td className="estilos__tabla__club">Telefono</td>
              <td className="estilos__tabla__club">{datos.phone}</td>
            </tr>
          </tbody>
        </table>
        </>
      }
      {error && <div>{error}</div>}
    </section>
  )
}

export {
  VerClub
}