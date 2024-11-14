const maincontiner=document.querySelector(".imgContiner1");
const left1=document.querySelector(".subcotiners");
const right1=document.querySelector(".subcotiners1");
const bodye1=document.querySelector("body")
bodye1.addEventListener("click",()=>{
    alert("It's Just a Static Website,It Works Soon....")
})

left1.addEventListener("mouseenter",()=>{
    maincontiner.classList.add(".active-subcontiners")
  
})
left1.addEventListener("mouseleave",()=>{
    maincontiner.classList.remove(".active-subcontiners")
    
})
right1.addEventListener("mouseenter",()=>{
    maincontiner.classList.add(".active-subcontiners1")
})
right1.addEventListener("mouseleave",()=>{
    maincontiner.classList.remove(".active-subcontiners1")
})