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
    for(var i=0; i<city_l.length; i++)
    {
        var newoption=document.createElement("option");
        newoption.value=city_l[i];
        newoption.innerHTML=city_l[i];
        city.options.add(newoption);
    }
}
function add_data(){
 let fname= document.getElementById("fname").value;
 let lname=document.getElementById("lname").value;
 let email=document.getElementById("email").value;
 let country=document.getElementById("country").value;
 let state=document.getElementById("state").value;
 let city =document.getElementById("city").value;

    if(!fname || !lname|| !email ||!country){
    alert("please fill all inputs");
    return;
  }
    let table=document.getElementById("table");

    let newrow =table.insertRow(row);
    let col1=newrow.insertCell(0);
    let col2=newrow.insertCell(1);
    let col3=newrow.insertCell(2);
    let col4=newrow.insertCell(3);
    let col5=newrow.insertCell(4);
    let col6=newrow.insertCell(5);
    
    col1.innerHTML =fname;
    col2.innerHTML=lname;
    col3.innerHTML=email;
    col4.innerHTML=country;
    col5.innerHTML=state;
    col6.innerHTML=city;
    row++;
}



