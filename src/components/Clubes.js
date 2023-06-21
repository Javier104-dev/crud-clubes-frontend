import { useEffect, useState } from "react"
import { obtenerClubes } from "../api/api"
import { useNavigate } from "react-router-dom";
import { BorrarClub } from "./Botones";
import { useObtenerDatos } from "../hook/useObtenerDatos";
import Cargando from "./Cargando";
import "./Clubes.css"

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
      <div className="clubes__registros">
        <button className="boton" onClick={()=>{navigate(`/equipo/agregar`)}}>Agregar un equipo</button>
        <div>Clubes registrados: {clubes.length}</div>
      </div>
      {cargando && <Cargando/> }
      {datos &&
        <table className="clubes__tabla estilos__tabla">
          <tbody>
            <tr className="clubes__tabla_encabezado">
              <th className="estilos__tabla">Equipo</th>
              <th className="estilos__tabla">Pais</th>
              <th className="estilos__tabla">Opciones</th>
            </tr>
            {clubes.map((equipo)=>(
              <tr key={equipo.id} className="clubes__tabla_registros">
                <td className="estilos__tabla">{equipo.name}</td>
                <td className="estilos__tabla">{equipo.area.name}</td>
                <td className="estilos__tabla">
                  <button className="boton" onClick={()=>{navigate(`/equipo/${equipo.id}/ver`)}}>Ver</button>
                  <button className="boton" onClick={()=>{navigate(`/equipo/${equipo.id}/editar`)}}>Editar</button>
                  <button className="boton" onClick={()=>{BorrarClub(equipo.id, equipo.name, clubes, setClubes)}}>Borrar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      }
      {error && <div>{error}</div>}
    </section>
  )
}

export default Clubes;