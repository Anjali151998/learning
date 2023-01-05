// function getData(URL) {
//     fetch(URL)
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((e) => {
//         console.log('Error');
//     });
// }

// getData('https://raw.githubusercontent.com/Anjali151998/learning/main/data.json');

async function getData(URL) {
  try {
    const res = await fetch(URL);
    console.log("I am alive");
    const data = await res.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}

getData(
  "https://raw.githubusercontent.com/Anjali151998/learning/main/data.json"
);
