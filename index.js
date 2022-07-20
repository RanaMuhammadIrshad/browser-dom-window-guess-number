// Method-1
const guessNum = function () {
  const num = Math.ceil(Math.random() * 10);
  console.log(num);
  let myNum;
  for (let i = 1; i < 4; i++) {
    myNum = +prompt("guess a number between 1-10");
    if (myNum === num) {
      const result = alert(`Success, the number was ${num}, attempts: ${i}`);
      return result;
    }
    if (myNum > num || myNum < num) {
      alert("Wrong! Try once more");
    }
  }
  if (myNum !== num) {
    const c = alert(
      `Sorry, you failed to guess the number in three attempts. The number was ${num}`
    );
    return c;
  }
};
guessNum();

// Method -2
// function play() {
//   let randNumber = Math.floor(Math.random() * 10) + 1;
//   console.log(randNumber);
//   let attempts = 1;
//   let guessNum = +prompt(`Guess a number between 1 and 10`);
//   while (guessNum !== randNumber && attempts < 3) {
//     attempts++;
//     guessNum = +prompt("Wrong!!!! Try again");
//   }
//   if (guessNum === randNumber) {
//     alert(`Success! The number was ${randNumber}! Attempts: ${attempts}`);
//   } else {
//     `Sorry, you failed to guess the number in three attempts. The number was ${randNumber}`;
//   }
// }

// play();
