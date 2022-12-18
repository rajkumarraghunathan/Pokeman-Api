document.body.innerHTML = `
<div class="container-fluid">
<h1 class="heading_container text-center">Pokemon Universe</h1>
<div id="mainContainer" class="main-container"></div>
</div>
`;
const poke_container=document.getElementById("mainContainer");

let main_fn = ((val,i_val) => {
  
const getData = async (id) => {
    try {
      const url=`https://pokeapi.co/api/v2/pokemon/${id}`;
      const res=await fetch(url);
      const pokemon=await res.json();
        pokeCards(pokemon);
      console.log(pokemon);
      }
    catch (error) {
      console.error(error);
    }
  };
getData();


const totalpokemons=val;
const fetchpokemons=async()=>{
    for(let i=i_val; i<totalpokemons; i++){
        await getData(i);
    }
}
fetchpokemons();


function pokeCards(pokemon){
    const pokemonEl=document.createElement('div');
    pokemonEl.classList.add('pokemon');

    const name=pokemon.name[0].toUpperCase()+pokemon.name.slice(1);
    const pokeAbility=pokemon.abilities;
    const pokeMove=pokemon.moves;
    
    const pokeInnerHTML=
    `
    <div class="img-container">
    <img src="${pokemon.sprites.front_default}"
    </div>
    <p class="name"><b>Name:</b>
    ${name}</p>
    <p class="ability"><b>Abilities:</b>
    ${pokeAbility[0] && pokeAbility[1]? 
        `${pokeAbility[0].ability.name}, 
         ${pokeAbility[1].ability.name}`
          : "none"
    }</p>
    <p class="moves"><b>Moves:</b> 
    ${pokeMove[0].move.name}, 
    ${pokeMove[1].move.name}</p>
    <p class="weight"><b>Weight:</b>
    ${pokemon.weight}</p>
    `;
    pokemonEl.innerHTML=pokeInnerHTML;
  poke_container.appendChild(pokemonEl);
  }
})

main_fn(50,0)

let div2 = document.createElement("div");
div2.setAttribute("class","justify-content-center");

//nav
let nav = document.createElement("nav");
nav.setAttribute("class","nav justify-content-center");

let ul = document.createElement("ul");
ul.setAttribute("class","pagination pagination-lg");
// li1
let li1 = document.createElement("li");
li1.setAttribute("class","page-item active");

let btn1 = document.createElement("button");
btn1.setAttribute("class","btn btn-primary");
btn1.textContent="1";
btn1.addEventListener("click",()=>{
  main_fn(20,10);
})

//li2
let li2 = document.createElement("li");
li2.setAttribute("class","page-item active");

let btn2 = document.createElement("button");
btn2.setAttribute("class","btn btn-primary");
btn2.textContent="2";
btn2.addEventListener("click",()=>{
  main_fn(30,20);
})

//li3
let li3 = document.createElement("li");
li3.setAttribute("class","page-item active");

let btn3 = document.createElement("button");
btn3.setAttribute("class","btn btn-primary");
btn3.textContent="3";
btn3.addEventListener("click",()=>{
  main_fn(40,30);
})

//li4
let li4 = document.createElement("li");
li4.setAttribute("class","page-item active");

let btn4 = document.createElement("button");
btn4.setAttribute("class","btn btn-primary");
btn4.textContent="4";
btn4.addEventListener("click",()=>{
  main_fn(50,40);
})

//li5
let li5 = document.createElement("li");
li5.setAttribute("class","page-item active");

let btn5 = document.createElement("button");
btn5.setAttribute("class","btn btn-primary");
btn5.textContent="5";
btn5.addEventListener("click",()=>{
  main_fn(60,50);
})

li1.append(btn1,btn2,btn3,btn4,btn5);
ul.append(li1,li2,li3,li4,li5);
nav.append(ul);

div2.append(nav);

document.body.append(div2);
