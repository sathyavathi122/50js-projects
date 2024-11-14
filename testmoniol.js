const testimonial=[
    {
        name:"arnold bodybuilder",
        photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaM9IcXnX8WGaV_-QaEW8pAwVrHcOZvP0TxA&s",
        text:"Austrian born actor and former bodybuilder Arnold Schwarzenegger poses in a bathing suit and flexes his muscles in "

    },
    {
        name:"ronnie coleman",
        photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjABdSoixShUnJNiwt8lPsDzswTMuqzez_Pg&s",
        text:"Ronald Dean Coleman (born May 13, 1964) is an American retired professional bodybuilder, who is widely regarded as the greatest bodybuilder of all-time."
    },
    {
        name:"ramon dino",
        photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7E0tJ_w7lKpTLNamydjD9vKBefVu23M_8dw&s",
        text:"Ramon Dino was born on March 7, 1962, in the Dominican Republic. He began bodybuilding at the age of 16, and quickly rose through the Rranks of the amateur ..."
    },
   
    
       


]
const new_img=document.querySelector("img")
const new_text=document.querySelector(".text")
const new_name=document.querySelector(".username")
ind=0
function adding_new(){
const {name,photoUrl,text}=testimonial[ind]
new_img.src=photoUrl
new_name.innerHTML=name
new_text.innerHTML=text
ind++
if(ind===testimonial.length){
    ind=0;
}
}

setInterval(() => {
    adding_new()
}, 2000);