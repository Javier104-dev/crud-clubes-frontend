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

  const formData = new FormData();
  
  Object.entries(body).forEach(([key, value]) => {
    formData.append(key, value);
  });
  
  const respuesta = await fetch(`${BASE}/club/agregar`, {
    method: "POST",
    body: formData
  });

  if (!respuesta.ok) {
    throw new Error('API Error');
  }
}

const editarClub = async (id, body) => {

  const formData = new FormData();
  
  Object.entries(body).forEach(([key, value]) => {
    formData.append(key, value);
  });
  
  const respuesta = await fetch(`${BASE}/club/${id}/editar`, {
    method: "PATCH",
    body: formData
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