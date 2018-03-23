alert("hi!")
name=prompt("whats your name?")
alert("Nice to meet you "+ name +".")
Q1=prompt("Do you like dogs?")
Q1=Q1.toLowerCase();
if(Q1=="yes"){
  alert("Cool me too")
}

else if(Q1=="no"){
  alert("ok")
}


function Survey() {
sq1=prompt("Want to take the survey?")
if(sq1=="yes"){
  alert("Great lets get started")
  sq2=prompt("Whats your full name?")
  sq3=prompt("Whats your age?")
  sq4=prompt("Do you want a dog or already have a dog?")

}
else{
  alert("Ok thats fine. See you later")
}

}
