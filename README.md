# Pokédex

Aplicación web interactiva inspirada en una Pokédex, desarrollada con HTML, CSS y JavaScript. El proyecto permite buscar Pokémon por nombre o número y consultar información directamente desde la PokeAPI.

Además de la búsqueda individual, cuenta con filtros por tipo que permiten visualizar diferentes Pokémon de forma dinámica sin necesidad de recargar la página.

## Funcionalidades

* Búsqueda de Pokémon por nombre o número.
* Consulta de información mediante una API pública.
* Filtros por tipo: Normal, Fire, Water, Dragon y Psychic.
* Generación dinámica de tarjetas.
* Manejo de errores cuando el Pokémon no existe o el campo está vacío.
* Imágenes obtenidas directamente desde la API.
* Diseño responsive para dispositivos móviles y escritorio.

## Tecnologías utilizadas

* HTML5
* CSS3
* JavaScript
* Bootstrap
* PokeAPI
* GitHub Pages

## Conceptos aplicados

Durante el desarrollo del proyecto se trabajaron diferentes conceptos fundamentales de JavaScript y desarrollo frontend:

* Manipulación del DOM.
* Eventos con `addEventListener`.
* Funciones asíncronas.
* `fetch`, `async/await` y Promises.
* Consumo y procesamiento de datos JSON.
* Uso de arrays y objetos.
* Ciclos `for`.
* Template strings.
* Renderizado dinámico con `innerHTML`.
* Validación de entradas.
* Manejo de errores mediante `try/catch`.
* Diseño responsive con CSS y Flexbox.

## Consumo de la API

La aplicación utiliza [PokeAPI](https://pokeapi.co/) para obtener la información de los Pokémon.

La información se solicita mediante peticiones HTTP utilizando `fetch()` y posteriormente se procesa la respuesta en formato JSON para mostrar los datos en la interfaz.

## Estructura del proyecto

```text
pokedex/
│
├── index.html
├── styles.css
├── app.js
├── imagenes/
│   └── ...
└── README.md
```

## Vista del proyecto

La interfaz cuenta con un encabezado donde se encuentra el buscador y el título de la aplicación. También incluye diferentes botones para filtrar los Pokémon por tipo.

Las tarjetas se generan dinámicamente dependiendo de la búsqueda o filtro seleccionado.

## Proyecto en línea

Puedes probar la aplicación directamente desde GitHub Pages:

[Ver Pokédex](https://TU-USUARIO.github.io/TU-REPOSITORIO/](https://itslegan.github.io/Pokedex-V2---github/)

## Aprendizaje

Este proyecto fue desarrollado como práctica de desarrollo frontend y consumo de APIs. Comenzó como una tarjeta estática para mostrar un Pokémon y posteriormente fue evolucionando hasta convertirse en una aplicación dinámica con búsqueda, filtros, manejo de errores y renderizado de múltiples elementos.

El proyecto me permitió reforzar JavaScript y entender mejor cómo una aplicación frontend puede comunicarse con una API externa para obtener y mostrar información en tiempo real.
