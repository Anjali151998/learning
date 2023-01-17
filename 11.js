const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");


function changetext(element ,text,color,time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(element){
                element.textContent=text;
                element.style.color=color;
                resolve();
            }else{

                reject("element not found");
            }
        } ,time)
    })
}

// changetext(heading1,"one","blue",1000)
// .then(()=>changetext(heading2,"two","red",1000))
// .then(()=>changetext(heading3,"three","yellow",1000))
// .then(()=>changetext(heading4,"four","white",1000))
// .catch((error)=>{
//       alert(error);
// })

async function test() {
    try {
        await changetext(heading1,"one","red",1000);
        await changetext(heading2,"two","green",1000);
        await changetext(heading3,"three","yellow",1000);
        await changetext(heading4,"four","white",1000);
    } catch(e) {
        alert('Error');
    }
}
test();