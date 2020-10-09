let dicerolled = [];
let usersChoiceinput = document.querySelector("#Userschoice");
let rollButton = document.querySelector("#RollButton");
let totalscore = document.querySelector("#totalscore");
let showrolls = document.querySelector("#History");
let resetButton = document.querySelector("#reset");
let timesrolled = 0;

rollButton.addEventListener("click", function () {
  console.log("button clicked");
  let usersChoice = Number(usersChoiceinput.value);
  let total = 0;
  while (timesrolled < usersChoice) {
    // dicerolled.push((usersChoice.value = Math.floor(Math.random() * 6 + 1)));
    // console.log(dicerolled.push());
    // function addarray(a, b) {
    //   return a + b;
    // }
    // dicerolled[timesrolled];
    let num_die = Math.floor(Math.random() * 6 + 1);
    dicerolled.push(num_die);
    console.log(num_die);
    total += num_die;
    console.log(total);

    timesrolled++;
  }
  totalscore.innerHTML = total;
});

showrolls.addEventListener("click", function () {
  console.log("clicked button");
  let loopnum = 0;
  while (loopnum < dicerolled.length) {
    showrolls.innerHTML =
      "<ol><li>" + dicerolled.join("</li><li>") + "</li></ol>";
    console.log(showrolls.innerHTML);
    loopnum++;
  }
});
//   showrolls.innerHTML =
//     "<ol><li>" + dicerolled.join("</li><li>") + "</li></ol>";
// });

resetButton.addEventListener("click", function () {
  let usersChoice = Number(usersChoiceinput.value);

  dicerolled = [];
  showrolls.innerHTML = "Show All Rolls";
  totalscore.innerHTML = "Total";
});
