import { useEffect, useState } from "react"
import { obtenerClubes } from "../api/api"
import { NavLink } from "react-router-dom";

const Clubes = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const prueba = async () => {
      const datos = await obtenerClubes()
      setDatos(datos);
    }
    prueba();
  }, [])

  return (
    <section>
      {<table>
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
                <NavLink to={`/equipo/${equipo.id}/ver`}>Ver</NavLink>
                <NavLink to={`/equipo/${equipo.id}/editar`}>Editar</NavLink>
                <NavLink to={`/equipo/${equipo.id}/borrar`}>Borrar</NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>}
    </section>
  )
}

export default Clubes;