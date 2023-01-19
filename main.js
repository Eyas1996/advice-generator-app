// Create DOM
// 01- Main card
let card = document.createElement("div");
card.className = "card";

// 02- Advice ID
let mySpan = document.createElement("span");

// 03- Advice Text
let myP = document.createElement("p");

// 04- Pattern Divider
let divider = document.createElement("img");
divider.className = "divider";
divider.src = "./images/pattern-divider-desktop.svg";

// 04- Dice
let dice = document.createElement("div");
dice.className = "dice";
let btn = document.createElement("i");
btn.id = "btn"
let icon = document.createElement("img");
icon.src = "./images/icon-dice.svg";
btn.appendChild(icon);
dice.appendChild(btn);

card.appendChild(mySpan);
card.appendChild(myP);
card.appendChild(divider);
card.appendChild(dice);
document.body.appendChild(card);

// Style DOM 
// 01- Main card
card.style.cssText =  "background-color: hsl(217, 19%, 24%);text-align: center;position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);-webkit-transform: translate(-50%, -50%);-moz-transform: translate(-50%, -50%);-ms-transform: translate(-50%, -50%);-o-transform: translate(-50%, -50%);padding: 30px;border-radius: 10px;";
// 02- Advice ID
mySpan.style.cssText = "color: hsl(150, 100%, 66%);letter-spacing: 3px;font-size: 0.7rem;";

// 03- Advice Text
myP.style.cssText = "font-weight: bold;max-width: 500px;";

// 04- Pattern Divider
divider.style.cssText = "margin: 30px 0 25px;";

// 04- Dice
dice.style.cssText = "position: absolute;top: 99%;left: 50%;transform: translate(-50%, -50%);-webkit-transform: translate(-50%, -50%);-moz-transform: translate(-50%, -50%);-ms-transform: translate(-50%, -50%);-o-transform: translate(-50%, -50%);";

btn.style.cssText = "background-color: hsl(150, 100%, 66%);font-size: 1rem;padding: 15px;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;-ms-border-radius: 50%;-o-border-radius: 50%;cursor: pointer;transition: 0.5s;-webkit-transition: 0.5s;-moz-transition: 0.5s;-ms-transition: 0.5s;-o-transition: 0.5s;";

icon.style.cssText = "margin-bottom: -5px;";
// Fetch The API 
async function fetchApi() {
  let response = await fetch("https://api.adviceslip.com/advice");
  let data = await response.json();
  console.log(data);
  console.log(data.slip.id);
  console.log(data.slip.advice);

  mySpan.textContent = `Advice # ${data.slip.id}`;

  myP.textContent = `" ${data.slip.advice}"`;

  btn.onclick = () => { location.reload() }
};
fetchApi()
