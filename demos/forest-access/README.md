# Forest Access: demo de portfolio

Demo autónoma de React y Vite basada en las pantallas y recorridos del frontend de Forest Access. Los nombres, predios, parcelas, cuadrillas, habilitaciones y tareas son ficticios. No hay conexión con el backend, autenticación ni persistencia: los cambios viven en el estado de React y se reinician al recargar.

## Desarrollo

Desde la raíz del sitio Astro (`clientes/jhon-guimaraens`):

```powershell
pnpm install
pnpm --dir demos/forest-access dev
```

Abrir la URL que muestre Vite con la ruta `/demos/forest-access/`.

## Compilación y publicación en Astro

El comando `pnpm run build` ejecutado desde la raíz del sitio compila Astro y ambas demos. Forest Access queda en `dist/demos/forest-access/`; no hay que copiar archivos a `public/`. La base de Vite ya está configurada para esa ruta.

## Alcance

- Administración: dashboard, predios/rodales/parcelas, asignación de tratamientos, cuadrillas y empleados.
- Puntero: asignaciones de una cuadrilla, tareas registradas y registro/finalización local de tareas. El botón "Vista móvil" muestra este recorrido en un marco de 390 px sin cambiar el tamaño del navegador.
- Tratamientos planificados, reportes y configuración se muestran deshabilitados para indicar el límite de esta demo.

El proyecto original es un trabajo de equipo. Esta demo no atribuye su desarrollo a una sola persona.
