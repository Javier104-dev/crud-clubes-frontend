const BASE = "http://127.0.0.1:8080";

const obtenerClubes = async () => {
  const respuesta = await fetch(`${BASE}/clubes`);
  if (!respuesta.ok) {
    throw new Error('API Error');
  }
  
  return respuesta.json();
}

const verClubSeleccionado = async (id) => {
  const respuesta = await fetch(`${BASE}/club/${id}/ver`);
  if (!respuesta.ok) {
    throw new Error('API Error');
  }

  return respuesta.json();
}

const borrarClub = async (id) => {
  const respuesta = await fetch(`${BASE}/club/${id}/eliminar`, {method: 'DELETE'});
  if (!respuesta.ok) {
    throw new Error('API Error');
  }

  return respuesta;
}

const agregarClub = async (body) => {
  const respuesta = await fetch(`${BASE}/club/agregar`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });

  if (!respuesta.ok) {
    throw new Error('API Error');
  }
}

const editarClub = async (id, bodys) => {
  const respuesta = await fetch(`${BASE}/club/${id}/editar`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(bodys)
  });

  if (!respuesta.ok) {
    throw new Error('API Error');
  }
}

export {
  obtenerClubes,
  verClubSeleccionado,
  borrarClub,
  agregarClub,
  editarClub
}