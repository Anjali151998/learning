
console.log("script start");
function getData(URL) {
    fetch(URL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((e) => {
        console.log('Error');
    });
}

//getData('https://raw.githubusercontent.com/Anjali151998/learning/main/data.json');

async function getData(URL) {
  try {
    const res = await fetch(URL);
    console.log("hellooooo");
    console.log(res);
    const data = await res.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}

getData(
  "https://raw.githubusercontent.com/Anjali151998/learning/main/data.json"
);




// const promisefunc =()=>{
//     return  new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//      reject("error");
//     return;

//   },1000);
//  //resolve("name");
//   });


// }

// // promisefunc().then((response)=>{
// //   console.log(response)
// // })
// // .catch((error)=>{
// //   console.log(error);
// // })

// const asyncfunc = async () =>{
//   try{
// const result = await promisefunc();
// console.log("result",result)
//   }catch(error){
// console.log("error",error);
//   }
// }


// asyncfunc();