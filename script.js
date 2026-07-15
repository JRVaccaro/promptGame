


const pokemons = ["Pikachu", "Eevee", "Yamper"]

const pokemonImages = {
    Pikachu: "pika.jpg",
    Eevee: "eevee.jpg",
    Yamper: "yamper.jpg"
};

 window.alert("WHO'S THAT POKEMON?!")

const randomPokemons = Math.floor(Math.random() * pokemons.length);//returns a random character 



const answer = pokemons[randomPokemons];

console.log("Answer: ", answer)


console.log(randomPokemons)

const imageEl = document.getElementById("pokemon-image");

imageEl.src = pokemonImages[answer];

setTimeout(() => {

let won = false;

for(let guesses = 3; guesses > 0; guesses--){


let guess = window.prompt(`Guess the pokemon in ${guesses} guesses!`);

if(guess.toLowerCase() === answer.toLowerCase()){
    won = true;
    window.alert("CORRECT");
    break;
} else if(guesses > 1){
    window.alert(`Wrong! you have ${guesses -1} remaining...`)
}

}

const appDiv = document.getElementById("app");
const resultEl = document.createElement("p");

if(won){
    appDiv.textContent = `You got it! The answer was ${answer}.`;

} else {
    appDiv.textContent = `Out of guesses! The answer was ${answer}`;
}
}, 100);