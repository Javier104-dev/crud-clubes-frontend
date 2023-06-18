import { verClubSeleccionado } from "../api/api";
import { NavLink, useParams } from "react-router-dom";
import { useObtenerDatos } from "../hook/useObtenerDatos";
import Cargando from "./Cargando"

const VerClub = () => {
  const { id } = useParams();
  const { cargando, datos, error } = useObtenerDatos(verClubSeleccionado, id);

  return (
    <section>
      {cargando && <Cargando/>}
      {datos && (
        <>
        <div>
          <img src={datos.escudo} alt={datos.name}></img>
          <span>{datos.name}</span>
        </div>
        <table>
          <tbody>
            <tr>
              <th>Informacion</th>
              <th>valor</th>
            </tr>
            <tr>
              <td>Pais</td>
              <td>{datos.area.name}</td>
            </tr>
            <tr>
              <td>Nombre</td>
              <td>{datos.name}</td>
            </tr>
            <tr>
              <td>Direccion</td>
              <td>{datos.address}</td>
            </tr>
            <tr>
              <td>pagina</td>
              <td><NavLink to={datos.website}>{datos.website}</NavLink></td>
            </tr>
            <tr>
              <td>Colores del club</td>
              <td>{datos.clubColors}</td>
            </tr>
            <tr>
              <td>numero</td>
              <td>{datos.phone}</td>
            </tr>
          </tbody>
        </table>
        </>
      )}
      {error && <div>{error}</div>}
    </section>
  )
}

export {
  VerClub
}