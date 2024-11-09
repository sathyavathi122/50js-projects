const inputE1=document.querySelector(".input")
const bodyE1=document.querySelector("body")
inputE1.checked=JSON.parse(localStorage.getItem("mode"))
updatebody()
function updatebody(){
    if(inputE1.checked){
        bodyE1.style.backgroundColor="black"

    }
    else{
        bodyE1.style.backgroundColor="white"
    }
}
inputE1.addEventListener("input",()=>
{
    updatebody();
    updatelocalStorage();
})
function updatelocalStorage(){
    localStorage.setItem("mode",
        JSON.stringify(inputE1.checked)
    );
}