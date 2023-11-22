<h1 align='center'>Crud de clubes front-end</h1>

### Introducción
Segunda parte del Crud de clubes, para completar el proyecto se diseñó la estructura y estilos de la página que utilizara el usuario para poder interactuar con el servidor back-end, para el desarrollo se usó la herramienta `Create React App` para trabajar con `React`.

La página no tiene un diseño muy desarrollado por que el propósito real era el de poder comunicarnos con la parte back que desarrollamos antes y poder completar el proyecto.

Posee los formularios necesarios para poder editar y agregar registros que luego serán enviados al servidor, las validaciones son básicas, solo se encargan de verificar que el tipo de dato sea el correcto y que no existan campos vacíos.

### Rutas
Las rutas que componen la página son:

| URL                                     | Descripción                                                                                               |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| http://localhost:3000/                  | Página principal, renderiza el título y una tabla donde expone los clubes almacenados en la base de datos |
| http://localhost:3000/equipo/agregar    | Página que contiene el formulario para agregar un equipo                                                  |
| http://localhost:3000/equipo/:id/ver    | Dirección de la página donde se muestra un club y todas sus características en formato de tabla           |
| http://localhost:3000/equipo/:id/editar | Formulario donde se puede editar un club seleccionado                                                     |

### Especificaciones
- Servidor: http://localhost:3000
- Api utilizada: http://127.0.0.1:8080/clubes
- Versión: 1.0.0
- Autor: Javier Anibal Villca
- Repositorio GitHub: git+https://github.com/Javier104-dev/crud-clubes-frontend.git

### Tecnologías utilizadas
- **Node.js v18.16.0:** Plataforma de ejecución de JavaScript del lado del servidor.
- **ESLint:** Herramienta de linting para mantener un código JavaScript/Node.js consistente y legible.
- **Create React App:** Herramienta que facilita el desarrollo de aplicaciones `React`.

<h2 align='center'>Instrucciones de instalación</h2>

### Requerimientos
- IDE - Visual Studio Code v1.84.2
- Git v2.43.0
- Node.js v20.9.0
- Parte back-end del proyecto.

### Preparando el ambiente
Para poder utilizar esta parte front-end del proyecto, se debe `iniciar` antes la parte `back-end` donde desarrollamos el servidor API que utilizaremos aquí, de lo contrario se generaran algunos errores y la página no se renderizará correctamente.

- Primer paso
  - Descargar o clonar el repositorio que contiene el servidor back-end [Crud de clubes back-end](https://github.com/Javier104-dev/crud-clubes-backend.git).
  - Instalar las dependencias necesarias usando el comando `npm install`.
  - Usar el comando `npm start` para iniciar el servidor.

- Segundo paso
  - Descargar o clonar el repositorio.
  - Instalar las dependencias necesarias con el comando `npm install`.
  - Iniciar el proyecto con el comando `npm start`, puede demorar un poco.
  - Se abrirá una ventana del navegador con la ruta del proyecto `http://localhost:3000/`.

<h2 align='center'>Lo que encontrarás</h2>

### Página principal
<p align='left'>
  <img
    alt='Página principal'
    src='https://github.com/Javier104-dev/crud-clubes-frontend/assets/105408069/08e2d683-0f5c-49a2-88d7-1b0a51df0487'
  >
</p>
<br>

### Agregar club
<p align='left'>
  <img
    alt='Agregar club'
    src='https://github.com/Javier104-dev/crud-clubes-frontend/assets/105408069/1847bbe0-b9e6-4230-8d72-141f19391280'
  >
</p>
<br>

### Ver club seleccionado
<p align='left'>
  <img
    alt='Ver club seleccionado'
    src='https://github.com/Javier104-dev/crud-clubes-frontend/assets/105408069/3528a7b4-95ef-488f-a0b4-67423d9af355'
  >
</p>
<br>

### Editar club seleccionado
<p align='left'>
  <img
    alt='Editar club seleccionado'
    src='https://github.com/Javier104-dev/crud-clubes-frontend/assets/105408069/8e7ff93b-f916-4aaf-89e0-41d98a758065'
  >
</p>
<br>

---

### Autor
| [<img src='https://avatars.githubusercontent.com/u/105408069?v=4' width=115><br><sub>Javier Anibal Villca</sub>](https://github.com/Javier104-dev) |
| :------------------------------------------------------------------------------------------------------------------------------------------------: |
