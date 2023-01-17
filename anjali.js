const data = require("./text.json");
let result=[];
function nestedJson() {
  //let newobject = {};
  data.forEach((item) => {
    if (item.bstGuid !== null){
    result.push(data);
    }
});




data.forEach((item) => {
    result.forEach((y) => {
     if (item.bstGuid === item.parentBstGuid && item.bstGuid !== null){
      let newobject = {};
      y.newobject.push(item.bstGuid);
    }
    console.log(newObject);
    
      })
        
})
  console.log(result);
}

nestedJson();
