//Elementos del dom

const input = document.getElementById('input')
const boton = document.getElementById('boton')
const nombrePokemon = document.getElementById('nombrePokemon')
const imagenPokemon = document.getElementById('imagenPokemon')
const numeroPokemon = document.getElementById('numeroPokemon')
const tipoPokemon = document.getElementById('tipoPokemon')
const contenedorPokemon = document.getElementById('contenedorPokemon')

//botones filtro
const botonNormal = document.getElementById('botonNormal')
const botonFuego = document.getElementById('botonFuego')
const botonAgua = document.getElementById('botonAgua')
const botonDragon = document.getElementById('botonDragon')
const botonPsiquico = document.getElementById('botonPsiquico')

//url api
const url = "https://pokeapi.co/api/v2/pokemon/"
 contenedorPokemon.innerHTML =""
//funciones
async function buscarPokemon(){

    if(input.value == ""){

        alert("ESTE CAMPO NO PUEDE ESTAR VACIO")

    }else{

        try{

            const respuesta = await fetch(url + input.value)
            const data = await respuesta.json()

            contenedorPokemon.innerHTML = `

            <div class="contenido">

                <h1 class="contenido-nombre">
                    ${data.name.toUpperCase()}
                </h1>

                <img src="${data.sprites.other.dream_world.front_default}" alt="">

                <p class="contenido-numero">
                    ${data.id}
                </p>

                <p class="contenido-tipo">
                    ${data.types[0].type.name.toUpperCase()}
                </p>

            </div>

            `
          input.value = ""
        }catch{

            alert("INGRESA CORRECTAMENTE EL NOMBRE")

        }

    }

}

// pokemones tipo Normal

async function buscarTipoNormal() {
    const respuesta = await fetch("https://pokeapi.co/api/v2/type/normal")
    const data = await respuesta.json()
    contenedorPokemon.innerHTML = ""

    for(let i=0 ; i< data.pokemon.length; i++){
       const pokemonURL = data.pokemon[i].pokemon.url
       const respuestaPokemon = await fetch(pokemonURL)
       const pokemonData = await respuestaPokemon.json()

       //si no hay una imagen que use otra
    let imagenPokemon = ""

    if(pokemonData.sprites.other.dream_world.front_default){
        imagenPokemon = pokemonData.sprites.other.dream_world.front_default
    }else{
        imagenPokemon = pokemonData.sprites.other["official-artwork"].front_default
    }


       contenedorPokemon.innerHTML += `

    
<div class="contenido">

    <h1 class="contenido-nombre">
        ${pokemonData.name.toUpperCase()}
    </h1>

    <img src="${imagenPokemon}" alt="">

    <p class="contenido-numero">
        ${pokemonData.id}
    </p>

    <p class="contenido-tipo">
        ${pokemonData.types[0].type.name.toUpperCase()}
    </p>

</div>

`
    }
}

//Tipo Fuego
async function buscarTipoFuego() {
  const respuesta = await fetch("https://pokeapi.co/api/v2/type/fire")
  const data = await respuesta.json()
  contenedorPokemon.innerHTML = ""

  for(let i=0 ; i<data.pokemon.length;i++){
   const pokemonUrl= data.pokemon[i].pokemon.url
   const respuestaPokemon = await fetch(pokemonUrl)
   const pokemonData = await respuestaPokemon.json()

       //si no hay una imagen que use otra
    let imagenPokemon = ""

    if(pokemonData.sprites.other.dream_world.front_default){
        imagenPokemon = pokemonData.sprites.other.dream_world.front_default
    }else{
        imagenPokemon = pokemonData.sprites.other["official-artwork"].front_default
    }


  contenedorPokemon.innerHTML += `

    
<div class="contenido">

    <h1 class="contenido-nombre">
        ${pokemonData.name.toUpperCase()}
    </h1>

    <img src="${imagenPokemon}" alt="">

    <p class="contenido-numero">
        ${pokemonData.id}
    </p>

    <p class="contenido-tipo">
        ${pokemonData.types[0].type.name.toUpperCase()}
    </p>

</div>

`

  }

    
}

//pokemon tipo agua

async function buscarTipoAgua(){
    const respuesta = await fetch("https://pokeapi.co/api/v2/type/water")
    const data = await respuesta.json()
    console.log(data)
    contenedorPokemon.innerHTML = ""

    for (let i=0 ; i < data.pokemon.length;i++){
   const pokemonUrl = data.pokemon[i].pokemon.url
   const respuestaPokemon = await fetch(pokemonUrl)
   const pokemonData = await respuestaPokemon.json()

       //si no hay una imagen que use otra
    let imagenPokemon = ""

    if(pokemonData.sprites.other.dream_world.front_default){
        imagenPokemon = pokemonData.sprites.other.dream_world.front_default
    }else{
        imagenPokemon = pokemonData.sprites.other["official-artwork"].front_default
    }


   contenedorPokemon.innerHTML += `

    
<div class="contenido">

    <h1 class="contenido-nombre">
        ${pokemonData.name.toUpperCase()}
    </h1>

    <img src="${imagenPokemon}" alt="">

    <p class="contenido-numero">
        ${pokemonData.id}
    </p>

    <p class="contenido-tipo">
        ${pokemonData.types[0].type.name.toUpperCase()}
    </p>

</div>

`


   

    }
}

//tipo dragon

async function buscarTipoDragon(){
    const respuesta = await fetch("https://pokeapi.co/api/v2/type/dragon")
    const data = await respuesta.json()
    console.log(data)
        contenedorPokemon.innerHTML = ""


    for (let i = 0 ; i < data.pokemon.length;i++){
      const  pokemonUrl = data.pokemon[i].pokemon.url
      const  respuestaPokemon = await fetch(pokemonUrl)
       const pokemonData = await respuestaPokemon.json() 

            //si no hay una imagen que use otra
    let imagenPokemon = ""

    if(pokemonData.sprites.other.dream_world.front_default){
        imagenPokemon = pokemonData.sprites.other.dream_world.front_default
    }else{
        imagenPokemon = pokemonData.sprites.other["official-artwork"].front_default
    }


   contenedorPokemon.innerHTML += `

    
<div class="contenido">

    <h1 class="contenido-nombre">
        ${pokemonData.name.toUpperCase()}
    </h1>

    <img src="${imagenPokemon}" alt="">

    <p class="contenido-numero">
        ${pokemonData.id}
    </p>

    <p class="contenido-tipo">
        ${pokemonData.types[0].type.name.toUpperCase()}
    </p>

</div>

`
    }
}

//tipo Psiquico
async function buscarTipoPsiquico(){
    const respuesta = await fetch("https://pokeapi.co/api/v2/type/psychic")
    const data = await respuesta.json()
    console.log(data)
        contenedorPokemon.innerHTML = ""


    for (let i = 0 ; i < data.pokemon.length;i++){
      const  pokemonUrl = data.pokemon[i].pokemon.url
      const  respuestaPokemon = await fetch(pokemonUrl)
       const pokemonData = await respuestaPokemon.json() 

            //si no hay una imagen que use otra
    let imagenPokemon = ""

    if(pokemonData.sprites.other.dream_world.front_default){
        imagenPokemon = pokemonData.sprites.other.dream_world.front_default
    }else{
        imagenPokemon = pokemonData.sprites.other["official-artwork"].front_default
    }


   contenedorPokemon.innerHTML += `

    
<div class="contenido">

    <h1 class="contenido-nombre">
        ${pokemonData.name.toUpperCase()}
    </h1>

    <img src="${imagenPokemon}" alt="">

    <p class="contenido-numero">
        ${pokemonData.id}
    </p>

    <p class="contenido-tipo">
        ${pokemonData.types[0].type.name.toUpperCase()}
    </p>

</div>

`
    }
}


//evento botones


boton.addEventListener('click', buscarPokemon)
botonNormal.addEventListener('click', buscarTipoNormal)
botonFuego.addEventListener('click', buscarTipoFuego)
botonAgua.addEventListener('click', buscarTipoAgua)
botonDragon.addEventListener('click', buscarTipoDragon)
botonPsiquico.addEventListener('click', buscarTipoPsiquico)