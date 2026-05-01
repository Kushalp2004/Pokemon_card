// Function to update the Pokémon stats
function updateStats() {
    const hp = document.getElementById('input-hp').value;
    const attack = document.getElementById('input-attack').value;
    const defense = document.getElementById('input-defense').value;
    const speed = document.getElementById('input-speed').value;
  
    // Update the values on the card
    document.getElementById('hp').textContent = hp;
    document.getElementById('attack').textContent = attack;
    document.getElementById('defense').textContent = defense;
    document.getElementById('speed').textContent = speed;
  }
  
  // Function to update the Abilities
  function updateAbilities() {
    const abilities = document.getElementById('abilities').value;
    document.getElementById('ability-display').textContent = 'Ability: ' + abilities;
  }
  
  // Function to update the Moves
  function updateMoves() {
    const moves = document.getElementById('moves').value;
    document.getElementById('moves-display').textContent = 'Moves: ' + moves;
  }
  
  // Function to update the Weaknesses
  function updateWeaknesses() {
    const weaknesses = document.getElementById('weaknesses').value;
    document.getElementById('weaknesses-display').textContent = 'Weakness: ' + weaknesses;
  }

  function toggleShiny() {
    // Get the checkbox element
    var shinyCheckbox = document.getElementById("shiny");
    
    // Get the image of the Pokémon
    var pokemonImage = document.querySelector(".pokemon-image img");
  
    // If the checkbox is checked, add a "shiny" effect (this could be changing the border, background, or an effect)
    if (shinyCheckbox.checked) {
      // Add shiny class to the image (or add shiny class to any other element you'd like)
      pokemonImage.style.border = "5px solid gold";  // Example: Gold border for shiny Pokémon
      pokemonImage.style.filter = "brightness(1.3)";  // Brightness effect for shiny
      document.getElementById("pokemon-card").style.backgroundColor = "#f39c12";  // Change background for shiny effect
    } else {
      // Remove shiny effects
      pokemonImage.style.border = "none"; // Remove border
      pokemonImage.style.filter = "none";  // Remove filter
      document.getElementById("pokemon-card").style.backgroundColor = "#f1c40f"; // Default background
    }
  }
  