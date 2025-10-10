##SessionStorage
SessionStorage es un alamcenamiento web (Web Storage API) que el navegador ofrece para guardar pares clave-valor mientras dura la sesión de la pestaña. No se comparte con otras pestañas aunque sean del mismo sitio. Cuando se cierra la pestaña se borra.
- **Propiedades** 
- Alcance: solo la pestaña actual y el mismo origen (protocolo + dominio + puerto).
- Duración: vive mientras la pestaña esté abierta.
- Tipo: guarda Strings.
- Tamaño: *length*
- Eventos: el navegador puede disparar el evento *storage* cuando cambian datos (limitado por pestaña/origen).
- **Estructura**
Es un almacen clave-valor.
Clave: texto (ej. "nombre")
Valor: texto (ej. "Brenda")
Se maneja como un diccionario o mapa simple; sin jerarquías.
Operaciones conceptuales:
- *Guardar* una pareja clave-valor.
- *Leer* el valor de una clave.
- *Eliminar* una clave.
- *Vaciar* todo el almacen.

- **Requerimientos**
- Contexto de navegador: se refiere a cuando el código JavaScript se ejecuta dentro de una página web abierta en un navegador (Chrome o Edge). En este entorno existen APIs como window, document, localStorage y sessionStorage. Fuera de ese contexto (Node.js o la terminal), esas APIs no están disponibles.
- Mismo origen: solo accesible desde páginas del mismo sitio (seguridad del navegador).
- El usuario no debe tener bloqueado el almacenamiento/cookies de ese sitio.
- Datos no sensibles: es accesible con JS del mismo origen; no es recomendable guardar contraseñas o información sensible.

- **SessionStorage vs localStorage**
Duración: sessionStorage es temporal (se borra al cerrar la pestaña) y localStorage permanece aunque se cierre el navegador.
Ámbito:  sessionStorage no se commparte entre pestañas y localStorgae se comparte entre pestañas del mismo origen.
Sincronización: cambios de localStorage puedes propagarse a otras pestañas y sessionStorage está aisaldo por pestaña.
Riesgo de fuga de datos: en sessionStorage hay menor riesgo de persistencia accidental y en localStorage es más fácil olvidar datos guardados por largo tiempo.
Casos de uso:
- **sessionStorage**
- Asistentes/pasos de formularios: guardar el paso actual y campos mientras el usuario navega entre pantallas.
- Filtros y estado de visitas: recordar filtros o paginación solo durante la visita.
- Datos que no deben "saltar" a otra pestaña: por ejemplo, un borrador momentáneo de búsqueda.
- Flags efímeros: mostrar una notificación una sola vez en esa sesión de pestaña.
- **localStorage**
- Preferencias del usuario: temas oscuro/claro, idioma, tamaño y tipo de fuente, etc.
- Configuraciones de la app: elegir layout o recordar última sección abierta para futuras visitas.
- Caché ligera: guardar respuestas peuqeñas (ejemplo: una lista corta) para acelerar cargas posteriores.
- Sesiones "suaves" sin seguridad. 