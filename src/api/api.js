const BASE = "http://127.0.0.1:8080";

const obtenerClubes = async () => {
  const respuesta = await fetch(`${BASE}/clubes`);

  return respuesta.json();
}

const verClubSeleccionado = async (id) => {
  const respuesta = await fetch(`${BASE}/club/${id}/ver`);

  return respuesta.json();
}

export {
  obtenerClubes,
  verClubSeleccionado,
}