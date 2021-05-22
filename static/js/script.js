// challenge 1:your age in days
let gameCounts=1;

function ageInDays(){
  let birthYear=prompt("Enter Your Birth Year:");
  let age_in_days=(2021-birthYear)*365;
  let h1=document.createElement('h1');
  let textAnswer=document.createTextNode("You are "+age_in_days+"Days Old");
  h1.setAttribute("id","ageinDays");
  h1.appendChild(textAnswer);
  document.getElementById("flex-box-result").appendChild(h1);
}

function reset(id_pass){
  document.getElementById(id_pass).remove();
}

function stealOrDeal(opt){
  var myElem = document.getElementById('choicetext');
  if (myElem != null) {reset("choicetext");reset("choicetext");}
  let rand=Math.floor(Math.random()*2);
  console.log(rand)
  let choices=['Steal','Deal'];
  let comp_choice=choices[rand];
  let user_choice=choices[opt];

  h3create("Computer",comp_choice,"compChoose");
  h3create("User",user_choice,"youChoose");
  game();
  results(rand,opt);
}

function h3create(name,choice,eleid) 
{
  let h3=document.createElement('h3');
  let textCont=document.createTextNode(name+" Choose "+choice);
  h3.setAttribute("id", "choicetext");
  h3.appendChild(textCont);
  document.getElementById(eleid).appendChild(h3)
}

function game(){
  if(gameCounts==11){
    alert("Game Limit Reached!");
    gameCounts=0;
  }

  document.getElementById("game_val").innerHTML=gameCounts;
  gameCounts++;
}

function results(c,u){
  let option;
  if(c==0 && u==0){option=0;}
  if(c==1 && u==0){option=1}
  if(c==0 && u==1){option=2}
  if(c==1 && u==1){option=3}




  resultslist=["Both Choose Steal! You Are Greedy","You Win","You Loose","Both Choose Deal,  Jackpot is Split"];
  document.getElementById("gameresult").innerHTML=resultslist[option];
}