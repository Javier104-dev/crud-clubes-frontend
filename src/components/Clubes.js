import { useEffect, useState } from "react"
import { obtenerClubes } from "../api/api"
import { useNavigate } from "react-router-dom";
import { VerClub, EditarClub, BorrarClub, AgregarEquipo } from "./Botones";

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
      <button onClick={()=>{AgregarEquipo(navigate)}}>Agregar nuevo equipo</button>
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
                <button onClick={()=>{VerClub(equipo.id, navigate)}} >Ver</button>
                <button onClick={()=>{EditarClub(equipo.id, navigate)}}>Editar</button>
                <button onClick={()=>{BorrarClub(equipo.id, equipo.name)}}>Borrar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default Clubes;