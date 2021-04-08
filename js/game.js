class GuessWho {
  constructor(cards) {
    this.score = 3500;
    this.cards = cards;
    this.questions = [
      { message: "Does your person wear a mask?", features: "mask" },
      { message: "Does your person wear a weapon?", features: "weapon" },
      { message: "Is your character a power ranger?", features: "powerRanger" },
      { message: "Does your character have glasses?", features: "glasses" },
      { message: "Is your character green?", features: "green" },
      { message: "Does your person wear a cap?", features: "cap" },
      { message: "Is your person a x-men character?", features: "x-men" },
      { message: "Does your character have a mustache?", features: "mustache" },
      { message: "Is your character red?", features: "red" },
      { message: "Does your character have a helmet?", features: "helmet" },
      { message: "Is your character human?", features: "human" },
      { message: "Is your person a marvel character?", features: "marvel" },
    ];
    this.selectedCard = this.pickedCard();
  }

  generateQuestions() {
    var newRow = `<tr><td><select class= "select-css">`;
    var theOptions = "";
    var i = [];
    for (i = 0; i < this.questions.length; i++) {
      // this.questions.forEach(function (question) {
      theOptions += `<option value="${i}">${this.questions[i].message}</option>`;
    }
    newRow += theOptions;
    newRow += "</select></td></tr>";

    return newRow;
  }

  pickedCard() {
    var randomNumber = Math.floor(Math.random() * this.cards.length);
    var currentCard = this.cards[randomNumber];

    console.log(currentCard.name);
    return currentCard;
};
  
}
