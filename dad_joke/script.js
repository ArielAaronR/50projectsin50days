const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();


// Using .then()
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };

//   fetch("https://icanhazdadjoke.com", config)
//     .then((response) => response.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke;
//     });
// }

//Using Async/Await Approach
async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  //   Await returns a promise must save into a data
  const res = await fetch("https://icanhazdadjoke.com", config);

  const data = await res.json();

  jokeEl.innerHTML = data.joke;
}
