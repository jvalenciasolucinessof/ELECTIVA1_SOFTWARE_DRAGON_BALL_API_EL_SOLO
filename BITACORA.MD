# Bitácora de desarrollo

**Equipo:** EL_SOLO  
**Integrante:** JUAN PABLO GALLEGO VALENCIA

## Jornada del 16 de septiembre de 2026

### Trabajo realizado

| Actividad | Commit |
| --- | --- |
| Creación del repositorio. | `26f16bf` — Initial commit |
| Inicialización del proyecto db-api. | `0013e1e` — inicializacion de proyecto db-api |
| Incorporación del README inicial. | `2726a8e` — agregado README inicial del proyecto |
| Eliminación de recursos que no se estaban utilizando. | `997c952` — remove unused asset files: hero.png, react.svg, and vite.svg |
| Incorporación de la consulta de personajes y del componente de listado. | `c8690c7` — add getCharacters API and ListCharacters component for character display |
| Creación del componente de tarjeta y actualización del listado para utilizarlo. | `c00b604` — add CharacterCard component and update ListCharacters to use it |
| Integración de RF-01 en develop mediante el pull request #1. | `906e995` — Merge pull request #1 |
| Desarrollo de RF-02, comenzando por el estado de cargando y agregando el manejo de errores en el listado. | `6caaa64` — add loading and error handling to ListCharacters component |
| Integración de RF-02 en develop mediante el pull request #2. | `5ef20b0` — Merge pull request #2 |
| Incorporación de la bitácora de desarrollo correspondiente al 16 de septiembre de 2026. | `872bd2c` — add development log for September 16, 2026 |
| Creación del componente InputSearch e integración en ListCharacters para la búsqueda de personajes, correspondiente a RF-03. | `03fb0bf` — Incorporación e integración de InputSearch |
| Integración de RF-03 mediante el pull request #4 desde feature/rf03-busqueda. | `ea73266` — Merge pull request #4 |

### Dificultades encontradas

No encontré dificultades ni bloqueos durante esta jornada.

### Cómo las resolví

No fue necesario aplicar soluciones a bloqueos, porque no se presentaron.

### Estado al finalizar la jornada

Se completaron e integraron los avances de RF-01, RF-02 y RF-03 mediante sus respectivos pull requests. También se incorporó la bitácora de desarrollo. No se reportaron dificultades durante esta jornada. Todas las actividades de esta entrada corresponden al 16 de septiembre de 2026.

| Fecha | Integrante | Herramienta | Consulta | Uso de la respuesta |
| --- | --- | --- | --- | --- |
| 2026-09-16 | JUAN PABLO GALLEGO VALENCIA | ChatGPT  | Ayuda para redactar y organizar los archivos Markdown del proyecto. | Se utilizó IA para preparar el contenido de README.md, BITACORA.md, tomando como base las instrucciones del taller y los commits realizados. |

## Jornada del 17 de septiembre de 2026

**Integrante:** JUAN PABLO GALLEGO VALENCIA  
**Equipo:** EL_SOLO

### Trabajo realizado

| Actividad | Commit |
| --- | --- |
| Incorporación del componente SelectCharacters e integración con ListCharacters para la funcionalidad de detalle de RF-04. | `53f707d` |
| Integración de RF-04 mediante el pull request #5 desde feature/rf04-detalle. | `fc0dfc0` |

### Dificultades encontradas

Tuve dificultades con la navegación mediante botones entre el listado y el detalle de los personajes.

### Cómo las resolví

Para resolver la navegación, consulté la documentación oficial de React sobre eventos y renderizado condicional. Separé la vista de detalle en un componente independiente y ajusté la interacción de los botones.

Referencias consultadas:

### Estado al finalizar la jornada

RF-04 quedó integrado mediante el pull request #5. El detalle de los personajes se organizó en un componente separado.
