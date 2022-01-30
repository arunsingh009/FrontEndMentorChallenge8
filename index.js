var perPerson = document.getElementById("perPerson");
var totalAmount = document.getElementById("totalAmount");
function help(){
    alert("Instructions\n1.Enter Bill Amount \n2.Enter Number Of people.\n3.Select Tip %.\n4.If Choosen custom then first enter % then\n   click again on the custom Tab")
}
function reset() {
  a = document.getElementById("amount");
  b = document.getElementById("people");
  c = document.getElementById("t6");
  a.value = "";
  b.value = "";
  c.value = "";
  document.getElementById("amount").placeholder = "0";
  document.getElementById("people").placeholder = "0";
  c.placeholder="CUSTOM";
  perPerson.innerHTML = "$0.00";
  totalAmount.innerHTML = "$0.00";
  document.getElementById("btn").disabled="true";
}
function validate() {
  var amount = +document.getElementById("amount").value;
  var people = +document.getElementById("people").value;
  if (amount == "") {
    document.getElementById("er1").style.visibility="visible";
    document.getElementById("amount").style.border="1px solid red";
    setTimeout(() => {
        document.getElementById("er1").style.visibility="hidden";
       document.getElementById("amount").style.border="none";
    }, 1000);
    return false;
  } else if (people == "") {
    document.getElementById("er2").style.visibility="visible";
    document.getElementById("people").style.border="1px solid red";
    setTimeout(() => {
        document.getElementById("er2").style.visibility="hidden";
        document.getElementById("people").style.border="none";
    }, 1000);
    return false;
  } else {
    return true;
  }
}
function t1() {
  var amount = +document.getElementById("amount").value;
  var people = +document.getElementById("people").value;
  var tipamount = 0.05;
  if(validate()==true){
    tips = (amount * tipamount) / people;
    var ti =tips.toFixed(2);
    total = amount / people + tips;
    var to=total.toFixed(2);
    perPerson.innerHTML = `$${ti}`;
    totalAmount.innerHTML = `$${to}`;
  document.getElementById("btn").removeAttribute("disabled");
  }else{
      return false;
  }
}function t2() {
  var amount = +document.getElementById("amount").value;
  var people = +document.getElementById("people").value;
  var tipamount = 0.10;
  if(validate()==true){
  tips = (amount * tipamount) / people;
  var ti =tips.toFixed(2);
  total = amount / people + tips;
  var to=total.toFixed(2);
  perPerson.innerHTML = `$${ti}`;
  totalAmount.innerHTML = `$${to}`;
  document.getElementById("btn").removeAttribute("disabled");
  }else{
      return false;
  }
}function t3() {
  var amount = +document.getElementById("amount").value;
  var people = +document.getElementById("people").value;
  var tipamount = 0.15;
  if(validate()==true){
    tips = (amount * tipamount) / people;
    var ti =tips.toFixed(2);
    total = amount / people + tips;
    var to=total.toFixed(2);
    perPerson.innerHTML = `$${ti}`;
    totalAmount.innerHTML = `$${to}`;
  document.getElementById("btn").removeAttribute("disabled");
  }else{
      return false;
  }
}function t4() {
  var amount = +document.getElementById("amount").value;
  var people = +document.getElementById("people").value;
  var tipamount = 0.25;
  if(validate()==true){
    tips = (amount * tipamount) / people;
    var ti =tips.toFixed(2);
    total = amount / people + tips;
    var to=total.toFixed(2);
    perPerson.innerHTML = `$${ti}`;
    totalAmount.innerHTML = `$${to}`;
  document.getElementById("btn").removeAttribute("disabled");
  }else{
      return false;
  }
}function t5() {
  var amount = +document.getElementById("amount").value;
  var people = +document.getElementById("people").value;
  var tipamount = 0.5;
  if(validate()==true){
    tips = (amount * tipamount) / people;
    var ti =tips.toFixed(2);
    total = amount / people + tips;
    var to=total.toFixed(2);
    perPerson.innerHTML = `$${ti}`;
    totalAmount.innerHTML = `$${to}`;
  document.getElementById("btn").removeAttribute("disabled");
  }else{
      return false;
  }
}function t6() {
  var amount = +document.getElementById("amount").value;
  var people = +document.getElementById("people").value;
  var tipamount = +document.getElementById("t6").value;
  var inp = document.getElementById("t6");
  inp.style.border="2px solid var(--secondary)";
  if(tipamount!=0){
  if(validate()==true){
  tips = (amount * (tipamount/100)) / people;
  var ti =tips.toFixed(2);
  total = amount / people + tips;
  var to=total.toFixed(2);
  perPerson.innerHTML = `$${ti}`;
  totalAmount.innerHTML = `$${to}`;
  document.getElementById("btn").removeAttribute("disabled");
  }else{
      return false;
  }
}
}
