import { useEffect, useState } from "react"
import { verClubSeleccionado } from "../api/api";
import { NavLink, useParams } from "react-router-dom";

const VerEquipo = () => {
  const { id } = useParams();
  const [equipo, setEquipo] = useState({});

  useEffect(()=>{
    const datos = async () => {
      const equipo = await verClubSeleccionado(id);
      setEquipo(equipo)
  }
  datos()
  }, [id])

  return (
    <section>
      <div>
        <img></img>
        <span>{equipo.name}</span>
      </div>
      <div>
        <table>
          <tbody>
            <tr>
              <th>Informacion</th>
              <th>valor</th>
            </tr>
            <tr>
              <td>Nombre</td>
              <td>{equipo.name}</td>
            </tr>
            <tr>
              <td>Direccion</td>
              <td>{equipo.address}</td>
            </tr>
            <tr>
              <td>pagina</td>
              <td><NavLink to={equipo.website}>{equipo.website}</NavLink></td>
            </tr>
            <tr>
              <td>Colores del club</td>
              <td>{equipo.clubColors}</td>
            </tr>
            <tr>
              <td>numero</td>
              <td>{equipo.phone}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export {
  VerEquipo
}