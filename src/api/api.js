const BASE = "http://127.0.0.1:8080/clubes";

const obtenerClubes = async () => {
  const respuesta = await fetch(BASE);
  if (!respuesta.ok) {
    throw new Error('API Error');
  }
  
  return respuesta.json();
}

const verClubSeleccionado = async (id) => {
  const respuesta = await fetch(`${BASE}/${id}`);
  if (!respuesta.ok) {
    throw new Error('API Error');
  }

  return respuesta.json();
}

const borrarClub = async (id) => {
  const respuesta = await fetch(`${BASE}/${id}`, {method: 'DELETE'});
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
  
  const respuesta = await fetch(BASE, {
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

  const respuesta = await fetch(`${BASE}/${id}`, {
    method: "PUT",
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