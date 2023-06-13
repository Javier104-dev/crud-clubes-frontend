import { useEffect, useState } from "react"
import { obtenerClubes } from "../api/api"
import { useNavigate } from "react-router-dom";
import { Boton, BorrarClub } from "./Botones";

const Clubes = () => {
  const [datos, setDatos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const prueba = async () => {
      const datos = await obtenerClubes()
      setDatos(datos);
    }
    prueba();
  }, [])

  return (
    <section>
      <Boton funcion={()=>{navigate(`/equipo/agregar`)}}>Agregar un equipo</Boton>
      <table>
        <tbody>
          <tr>
            <th>Equipo</th>
            <th>Pais</th>
            <th>Opciones</th>
          </tr>
          {datos.map((equipo)=>(
            <tr key={equipo.id}>
              <td>{equipo.name}</td>
              <td>{equipo.area.name}</td>
              <td>
                <Boton funcion={()=>{navigate(`/equipo/${equipo.id}/ver`)}}>Ver</Boton>
                <Boton funcion={()=>{navigate(`/equipo/${equipo.id}/editar`)}}>Editar</Boton>
                <Boton funcion={()=>{BorrarClub(equipo.id, equipo.name, datos, setDatos)}}>Borrar</Boton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default Clubes;