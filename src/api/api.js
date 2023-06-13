const BASE = "http://127.0.0.1:8080";

const obtenerClubes = async () => {
  const respuesta = await fetch(`${BASE}/clubes`);
  return respuesta.json();
}

const verClubSeleccionado = async (id) => {
  const respuesta = await fetch(`${BASE}/club/${id}/ver`);
  return respuesta.json();
}

const borrarClub = async (id) => {
  const respuesta = await fetch(`${BASE}/club/${id}/eliminar`, {method: 'DELETE'});
  return respuesta;
}

const agregarClub = async (body) => {
  await fetch(`${BASE}/club/agregar`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
}

export {
  obtenerClubes,
  verClubSeleccionado,
  borrarClub,
  agregarClub
}