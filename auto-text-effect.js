let bodye=document.querySelector('.continer');
let elment1=document.getElementById('child1');
let elment2=document.getElementById('child2');
steps=["Wish","Full Name" ,"Where Are You From","About your family"," Education and Qualifications","Interest/Hobby","Strengths"]
setences=["Good Morning ","I am","I a Native Of ","I Have a Nuclear ","I Am Compleated 10th And Intermediate And Now Pursuing ","I am Passionate about Fitness and Healyh For Activelife Cycle","I Am Self "]
words=["Everyone"," Ramesh Bobbadi","visaka patnam","Family","Btech(3rd year)","Activelife Cycle","Motivated"]
let stepsindex=0;
let setencesindex=0;
let wordsindex=0;
update()
function update(){
wordsindex++;
elment1.innerHTML=`<h1>${steps[stepsindex]}</h1>`
elment2.innerHTML=`<h1>${setences[setencesindex]} ${(words[setencesindex].slice(0,wordsindex))}</h1>`
if(wordsindex===words[setencesindex].length){
  wordsindex=0
  setencesindex++;
  stepsindex++;
}
setTimeout(update,500)
if(setencesindex===setences.length){
  stepsindex=0;
  setencesindex=0;
  wordsindex=0;
 }
}




   