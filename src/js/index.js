const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
const [firstButton, secondButton, thirdButton] = document.querySelectorAll(".trigger");
const historyArrays = {
  first: [],
  second: [],
  third: []
};
const setHistory = (diceID, indexDiceFace) => {
  const isHistoryFull = (historyArrays[diceID].length > 5);
  const historyDiv = document.querySelector(`.${diceID}-history`);
  isHistoryFull && historyArrays[diceID].shift();
  historyArrays[diceID].push(diceFaces[indexDiceFace]);
  historyDiv.textContent = `History: [${historyArrays[diceID]}]`;
};
const throwDice = (diceID) => {
  const indexDiceFace = Math.floor(Math.random() * 6);
  const dice = document.querySelector(`.${diceID}-dice`);
  dice.textContent = diceFaces[indexDiceFace];
  setHistory(diceID, indexDiceFace);
};

firstButton.addEventListener("click", () => throwDice("first"));
secondButton.addEventListener("click", () => throwDice("second"));
thirdButton.addEventListener("click", () => throwDice("third"));
