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
    features: ["mustache", "green"],
  },
  {
    name: "mario",
    img: "mario.png",
    features: ["mustache", "red"],
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
    features: ["weapon", "helmet", "cap", "marvel"],
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
  createHtmlDiv();

  document.querySelector(".combo-box").innerHTML = guessWho.generateQuestions();

  // Bind the click event of each element to a function
  clickEvent();
});

function askButtonPressed() {
  console.log(`Push Button Ask`);
  var comboBoxValue = document.querySelector(".select-css").value;

  console.log(guessWho.questions[comboBoxValue].features);

  var featuresSelected = guessWho.questions[comboBoxValue].features;
  guessWho.score -= 500;
  console.log(guessWho.score);
  // delete the element with this index

  guessWho.questions.splice(comboBoxValue, 1);
  document.querySelector(".combo-box").innerHTML = guessWho.generateQuestions();
  document.querySelector("#points").innerHTML = guessWho.score;
  checkScore();
  let selectedCardContainsFeature = guessWho.selectedCard.features.includes(
    featuresSelected
  );

  // filter cards with the following condition: if the feature property is or not inside the card

  guessWho.cards = guessWho.cards.filter(function (card) {
    if (selectedCardContainsFeature) {
      return card.features.includes(featuresSelected);
    } else {
      return !card.features.includes(featuresSelected);
    }
  });

  //create html div
  createHtmlDiv();

  // Bind the click event of each element to a function
  clickEvent();
}

var currentCard = " ";

function checkScore() {
  if (guessWho.score == 0) {
    window.location.href = "game-over.html";
  }
}

function clickEvent() {
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      console.log(`card.getAttribute("card-name")`);

      if (guessWho.selectedCard.name === card.getAttribute("card-name")) {
        alert("YOU WIN!!");
        console.log(`You win`);
      } else {
        console.log(`You are wrong`);
        removeCard(card.getAttribute("card-name"));
        alert("You are wrong!! Let try again!!");
        if (guessWho.score >= 400) {
          guessWho.score -= 400;
        } else {
          guessWho.score = 0;
        }
        checkScore();
        document.querySelector("#points").innerHTML = guessWho.score;
      }
    });
  });
}

function createHtmlDiv() {
  let html = "";
  guessWho.cards.forEach((pic) => {
    console.log(`image loaded: ${pic.img}`);
    html += `<div class="card" card-name="${pic.name}">`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat; background-size: contain"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector("#guessWho-board").innerHTML = html;
}

function removeCard(name) {
  guessWho.cards = guessWho.cards.filter(function (card) {
    return card.name != name;
  });
  createHtmlDiv();
}
