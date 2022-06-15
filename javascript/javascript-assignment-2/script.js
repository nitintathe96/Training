let row=1;  
function cascading(){
    var a1 =document.getElementById('country');
    var a2=document.getElementById('state');
    a2.innerHTML="";
    if(a1.value=="india"){ 
        var state=['maharashtra','gujrat'];  
    }
    else if(a1.value=="bhutan"){
        var state=['Thimphu','Daga'];
    }
    for(var i=0; i<state.length; i++)
    {
        var newoption=document.createElement("option");
        newoption.value=state[i];
        newoption.innerHTML=state[i];
        a2.options.add(newoption);
    } 
}   
function citydrop(){
    var state = document.getElementById('state');
    var city= document.getElementById('city');
    city.innerHTML="";
    if(state.value=="maharashtra"){
         var city_l=['pune','nagar'];  
    }
    else if(state.value=="gujrat"){
        var city_l=['surat','Daga'];
    }
    else if(state.value=="Thimphu"){
        var city_l=['paro','jakar'];
    }
    else if(state.value=="Daga"){
        var city_l=['siki','zong'];
    }
    for(var i=0; i<city_l.length; i++){
        var newoption=document.createElement("option");
        newoption.value=city_l[i];
        newoption.innerHTML=city_l[i];
        city.options.add(newoption);
    }
}
function add_data(){
 var fname= document.getElementById("fname").value;
 var lname=document.getElementById("lname").value;
 var email=document.getElementById("email").value;
 var age =document.getElementById("age").value;
 var country=document.getElementById("country").value;
 var state=document.getElementById("state").value;
 var city =document.getElementById("city").value;

    if(!fname || !lname|| !email ||!country || !age || !state || !city){
    alert("please fill all inputs");
    return;
  }

    var table=document.getElementById("table");

    var newrow =table.insertRow(row);
    var col1=newrow.insertCell(0);
    var col2=newrow.insertCell(1);
    var col3=newrow.insertCell(2);
    var col4=newrow.insertCell(3);
    var col5=newrow.insertCell(4);
    var col6=newrow.insertCell(5);
    var col7=newrow.insertCell(6);

    col1.innerHTML =fname;
    col2.innerHTML=lname;
    col3.innerHTML=email;
    col4.innerHTML=age;
    col5.innerHTML=country;
    col6.innerHTML=state;
    col7.innerHTML=city;
    
}
// function age_validate(){
//     var age_val =document.getElementById("age").value;
//     {
//         if(isNaN(age_val)){
//              document.getElementById("age-val").innerHTML="enter only numeric value";
//             return false;
//         }
//         else if(age_val<18||age_val>100){   
//             document.getElementById("age-val").innerHTML="enter age should be in between 18  to 100";
//             return false;
//         }
//         else {
//             return true;
//         }   
//     }
// }
function ageKeyPress()
    {
        var edValue = document.getElementById("age").value;
        var s= /\D/;
      if(edValue.match(s))
      {
        document.getElementById("age-val").innerHTML="enter only numeric value";     
     } 
     else if(edValue<18||edValue>100)
     { 
        document.getElementById("age-val").innerHTML="enter age should be in between 18  to 100";   
    }
    else{
        document.getElementById("age-val").innerHTML="";
    }
 }
 function characterMatch(){
    var fname= document.getElementById("fname").value;
    if(fname.length<1){
        document.getElementById('len').innerHTML="first name should be minimum two character." 
    }
    else{
        document.getElementById('len').innerHTML="" 
    }   
}
function characterMatchlname(){
var fname= document.getElementById("lname").value;
    if(fname.length<1){
        document.getElementById('len2').innerHTML="first name should be minimum two character." 
    }
    else{
        document.getElementById('len2').innerHTML=""
    }   
}
function ValidateEmail()
{
    var email_id =document.getElementById("email").value;
    var emailreg='[a-z0-9]+@[a-z]+\.[a-z]{2,3}';
    if (emailreg.match(email_id))
    {
     alert();
        return (true)
     }
    alert("You have entered an invalid email address!")
    return (false)
}
function emailval(){
        var email2 =document.getElementById('email').value;
        var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (!expr.test(email2)) {
            document.getElementById('em').innerHTML = "Invalid email address.";
        }
        else
        {
            document.getElementById('em').innerHTML=""
        }
}