// challenge 1:your age in days

function ageInDays(){
  let birthYear=prompt("Enter Your Birth Year:");
  let age_in_days=(2021-birthYear)*365;
  let h1=document.createElement('h1');
  let textAnswer=document.createTextNode("You are "+age_in_days+"Days Old");
  h1.setAttribute("id","ageinDays");
  h1.appendChild(textAnswer);
  document.getElementById("flex-box-result").appendChild(h1);
}

function reset(){
  document.getElementById("flex-box-result").remove();
}