console.time("timer");

function myTestFunction(count) {
  count = count + 1;
  count = count * 2;
  console.log(count);
}

myTestFunction(0);

let theW = "Wellesley";

console.log("Welcome to the page");

console.log(`WHS stands for ${theW} high school`);

console.timeEnd("timer");

function isDataBad(item) {
  if (item.body.indexOf("architect") > -1) {
    return true;
  }
  return false;
}

function getData() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
      for (let i = 0; i < data.length; i++) {
        const badData = isDataBad(data[i]);
        console.log(`Data is ${badData ? "indeed" : "not"} bad`);
      }
    });
}
