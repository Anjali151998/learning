fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => {
    let evenUser = json.filter((x) => x.id % 2 !== 0);
        // console.log(evenUser);

        let objectkeys = Object.keys(json[0]);
        let objectvalues = Object.values(json[3]);
        console.log(objectkeys);
        console.log(objectvalues);
        let modifiedjson =json.map((y)=>y.id*2);
        console.log(modifiedjson);
    });
  