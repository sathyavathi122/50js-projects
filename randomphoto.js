const imagecotainerE1=document.querySelector(".img-continer")
const btnE1=document.querySelector(".btn")
for (let index = 0; index < 10; index++) {
    btnE1.addEventListener("click",()=>
        {
            addNewimages()
        })
}


function addNewimages(){
    const newimg=document.createElement("img")
    newimg.src=`https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`
    imagecotainerE1.appendChild(newimg)
}