const data = require("./text.json");
let result = [];

data.forEach((item) => {
  // let data1;
  if (item.bstGuid !== null) {
    let data1 = {
      bstGuid: item.bstGuid,
      childData: [],
      parentBstGuid: item.parentBstGuid,
    };

    //result.push(data1);
    result=[...result,data1]
  }
});

data.forEach((item) => {
  result.forEach((y) => {
    if (item.parentBstGuid === y.bstGuid && item.bstGuid !== null) {
      y.childData.push(item.bstGuid);
    }
  });
});

console.log(result);
