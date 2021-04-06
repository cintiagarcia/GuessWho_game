const cards = [
  { name: "alien", img: "alien.png" },
  { name: "batman", img: "batman.png" },
  { name: "baymax", img: "baymax.png" },
  { name: "branger", img: "branger.png" },
  { name: "chicken", img: "chicken.png" },
  { name: "cyclops", img: "cyclops.png" },
  { name: "flash", img: "flash.png" },
  { name: "granger", img: "granger.png" },
  { name: "hulk", img: "hulk.png" },
  { name: "leonidas", img: "leonidas.png" },
  { name: "luigi", img: "luigi.png" },
  { name: "mario", img: "mario.png" },
  { name: "magneto", img: "magneto.png" },
  { name: "pranger", img: "pranger.png" },
  { name: "robocop", img: "robocop.png" },
  { name: "rranger", img: "rranger.png" },
  { name: "superman", img: "superman.png" },
  { name: "thor", img: "thor.png" },
  { name: "wolverine", img: "wolverine.png" },
  { name: "yranger", img: "yranger.png" },
];

const guessWho = new GuessWho(cards);

window.addEventListener("load", (event) => {
  let html = "";
  guessWho.cards.forEach((pic) => {
    console.log(`image loaded: ${pic.img}`);
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat; background-size: cover"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector("#guessWho-board").innerHTML = html;
  document.querySelector(".combo-box").innerHTML = guessWho.generateQuestions();

  // Bind the click event of each element to a function
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      console.log(`Card clicked: ${card}`);
    });
  });
});

