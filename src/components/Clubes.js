import { useEffect, useState } from "react"
import { obtenerClubes } from "../api/api"
import { useNavigate } from "react-router-dom";
import { BorrarClub } from "./Botones";
import { useObtenerDatos } from "../hook/useObtenerDatos";
import Cargando from "./Cargando";

const Clubes = () => {
  const [clubes, setClubes] = useState([]);
  const { cargando, datos, error } = useObtenerDatos(obtenerClubes);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (datos) {
      setClubes(datos);
    }
  }, [datos]);
  
  return (
    <section>
      {cargando && <Cargando/> }
      <button onClick={()=>{navigate(`/equipo/agregar`)}}>Agregar un equipo</button>
      {datos && (
        <table>
        <tbody>
          <tr>
            <th>Equipo</th>
            <th>Pais</th>
            <th>Opciones</th>
          </tr>
          {clubes.map((equipo)=>(
            <tr key={equipo.id}>
              <td>{equipo.name}</td>
              <td>{equipo.area.name}</td>
              <td>
                <button onClick={()=>{navigate(`/equipo/${equipo.id}/ver`)}}>Ver</button>
                <button onClick={()=>{navigate(`/equipo/${equipo.id}/editar`)}}>Editar</button>
                <button onClick={()=>{BorrarClub(equipo.id, equipo.name, clubes, setClubes)}}>Borrar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      )}
      {error && <div>{error}</div>}
    </section>
  )
}

export default Clubes;