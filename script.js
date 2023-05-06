const poke_container = document.getElementById('poke-container')
const pokemon_count = 100

const fetchPokemons = async () => {
	for (let i = 1; i <= pokemon_count; i++) {
		await getPokemon(i)
	}
}

const getPokemon = async (id) => {
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`
	const res = await fetch(url)
	const data = await res.json()
	createPokemonCard(data)
}

const createPokemonCard = (pokemon) => {
	const pokemonEl = document.createElement('div')
	pokemonEl.classList.add('card')

	const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
	const type = pokemon.types[0].type.name
	const hp = pokemon.stats[5].base_stat
	const weight = pokemon.weight
	const height = pokemon.height / 10

	const pokemonInnerHTML = `
    <div class='cover'>
                <img src='https://raw.githubusercontent.com/Kapelu/app-pokemon/96a05b8771417cb60ecd895d1db3a8f90b3a80a7/img/pokemon/${pokemon.id}.svg' alt=''>
                <div class='img__back ${type}'></div>
            </div>
            <div class='description'>                
                <h2 class='name'>${name}</h2>
                <div class='hp'>
                    HP ${hp}/${hp}
                </div>
                <ul class='stats'>
                    <li>${type}<br /><span>Tipo</span></li>
                    <li>${weight}kg<br /><span>Peso</span></li>
                    <li>${height}m<br /><span>Altura</span></li>
                </ul>
                
            </div>
    `

	pokemonEl.innerHTML = pokemonInnerHTML

	poke_container.appendChild(pokemonEl)
}

fetchPokemons()