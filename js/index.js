const cards = [
  {
    name: "alien",
    img: "alien.png",
    features: ["green"],
  },
  {
    name: "batman",
    img: "batman.png",
    features: ["cap", "human", "mask"],
  },
  {
    name: "baymax",
    img: "baymax.png",
    features: ["marvel"],
  },
  {
    name: "branger",
    img: "branger.png",
    features: ["powerRanger", "helmet", "glasses", "human"],
  },
  {
    name: "chicken",
    img: "chicken.png",
    features: ["glasses"],
  },
  {
    name: "cyclops",
    img: "cyclops.png",
    features: ["x-men", "marvel", "human", "glasses"],
  },
  {
    name: "flash",
    img: "flash.png",
    features: ["marvel", "helmet", "red", "human"],
  },
  {
    name: "granger",
    img: "granger.png",
    features: ["powerRanger", "helmet", "glasses", "green", "human"],
  },
  {
    name: "hulk",
    img: "hulk.png",
    features: ["green", "human", "marvel"],
  },
  {
    name: "leonidas",
    img: "leonidas.png",
    features: ["human", "mustache", "weapon"],
  },
  {
    name: "luigi",
    img: "luigi.png",
    features: ["mustache"],
  },
  {
    name: "mario",
    img: "mario.png",
    features: ["mustache"],
  },
  {
    name: "magneto",
    img: "magneto.png",
    features: ["x-men", "marvel", "red", "human", "cap", "helmet"],
  },
  {
    name: "pranger",
    img: "pranger.png",
    features: ["powerRanger", "helmet", "glasses", "human"],
  },
  {
    name: "robocop",
    img: "robocop.png",
    features: ["weapon", "helmet"],
  },
  {
    name: "rranger",
    img: "rranger.png",
    features: ["powerRanger", "helmet", "glasses", "red", "human"],
  },
  {
    name: "superman",
    img: "superman.png",
    features: ["cap", "human"],
  },
  {
    name: "thor",
    img: "thor.png",
    features: ["weapon", "helmet", "marvel"],
  },
  {
    name: "wolverine",
    img: "wolverine.png",
    features: ["x-men", "marvel", "mask", "human"],
  },
  {
    name: "yranger",
    img: "yranger.png",
    features: ["powerRanger", "helmet", "glasses", "human"],
  },
];

const guessWho = new GuessWho(cards);

window.addEventListener("load", (event) => {
  let html = "";
  guessWho.cards.forEach((pic) => {
    console.log(`image loaded: ${pic.img}`);
    html += `<div class="card" card-name="${pic.name}">`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat; background-size: contain"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector("#guessWho-board").innerHTML = html;
  document.querySelector(".combo-box").innerHTML = guessWho.generateQuestions();

  // Bind the click event of each element to a function
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      console.log(`card.getAttribute("card-name")`);

      if (guessWho.selectedCard.name === card.getAttribute("card-name")) {
        console.log(`You win`);
      } else {
        console.log(`You are wrong`);
        guessWho.score -= 300;
        document.querySelector("#points").innerHTML = guessWho.score;
      }
    });
  });
});

function askButtonPressed() {
  console.log(`Push Button Ask`);
  var comboBoxValue = document.querySelector(".select-css").value;

  console.log(guessWho.questions[comboBoxValue].features);
  var featuresSelected = guessWho.questions[comboBoxValue].features;
  guessWho.score -= 500;
  console.log(guessWho.score);
  guessWho.questions.splice(comboBoxValue, 1);
  document.querySelector(".combo-box").innerHTML = guessWho.generateQuestions();
  document.querySelector("#points").innerHTML = guessWho.score;

  let selectedCardContainsFeature = guessWho.selectedCard.features.includes(
    featuresSelected
  );
  guessWho.cards = guessWho.cards.filter(function (card) {
    if (selectedCardContainsFeature) {
      return card.features.includes(featuresSelected);
    } else {
      return !card.features.includes(featuresSelected);
    }
  });

  let html = "";
  guessWho.cards.forEach((pic) => {
    console.log(`image loaded: ${pic.img}`);
    html += `<div class="card" card-name="${pic.name}">`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat; background-size: contain"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector("#guessWho-board").innerHTML = html;
  // Bind the click event of each element to a function
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      console.log(`card.getAttribute("card-name")`);

      if (guessWho.selectedCard.name === card.getAttribute("card-name")) {
        console.log(`You win`);
      } else {
        console.log(`You are wrong`);
        guessWho.score -= 300;
        document.querySelector("#points").innerHTML = guessWho.score;
      }
    });
  });
}

var currentCard = " ";
