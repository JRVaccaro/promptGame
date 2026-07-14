


const pokemons = ["Pikachu", "Eevee", "Joltik"]

 window.alert("WHO'S THAT POKEMON?!")

const randomPokemons = Math.floor(Math.random() * pokemons.length);//returns a random character 



const answer = pokemons[randomPokemons]
console.log("Answer: ", answer)


console.log(randomPokemons)


let won = false;

for(let guesses = 3; guesses > 0; guesses--){


let guess = window.prompt(`Guess the pokemon in ${guesses} guesses!`)

if(guess.toLowerCase() === answer.toLowerCase()){
    won = true;
    window.alert("CORRECT");
    break;
} else if(guesses > 1){
    window.alert(`Wrong! you have ${guesses} remaining...`)
}

}