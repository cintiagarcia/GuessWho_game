class GuessWho {
  constructor(cards) {
    this.cards = cards;
    this.questions = ["Banana", "Orange", "Apple", "Mango"];
  }

  generateQuestions() {
    var newRow = `<tr><td><select class= "select-css">`;
    var theOptions = "";
    this.questions.forEach(function (question) {
      theOptions += `<option value="${question}">${question}</option>`;
    });
    newRow += theOptions;
    newRow += "</select></td></tr>";

    return newRow;
  }
}
