console.time("timer");

let theW = "Wellesley";

console.log("Welcome to the page");

console.log(`WHS stands for ${theW} high school`);

console.timeEnd("timer");

function checkDataItem(item) {
  if (item.body.indexOf("architect") > -1) {
    console.error("Some bad stuff happened");
  }
}

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < data.length; i++) {
      checkDataItem(data[i]);
    }
  })
