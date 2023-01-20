//room1
let totalcost=0;
function room1CheckBox(){
    let checkBox = document.getElementById("room1"); 
    let cost; 
    if (checkBox.checked == true){
        
        let bbb = document.getElementsByName('roomtype1');              
        for(i = 0; i < bbb.length; i++) {
            if(bbb[i].checked)
                cost=bbb[i].value;
        }
        let x = document.getElementById("noofrooms1").value; 
        cost=parseInt(cost)*parseInt(x)
        totalcost=totalcost+cost;
        document.getElementById("totalcostroom1").innerHTML = cost.toString();
    } else {
        cost=0
        totalcost=totalcost+cost;
        document.getElementById("totalcostroom1").innerHTML = cost.toString();
    }

}
function room1price(){
    let checkBox = document.getElementById("room1"); 
    let cost; 
    if (checkBox.checked == true){
        
        let bbb = document.getElementsByName('roomtype1');              
        for(i = 0; i < bbb.length; i++) {
            if(bbb[i].checked)
                cost=bbb[i].value;
        }
        let x = document.getElementById("noofrooms1").value; 
        cost=parseInt(cost)*parseInt(x)
        totalcost=totalcost+cost;
        document.getElementById("totalcostroom1").innerHTML = cost.toString();
    } else {
        cost=0
        totalcost=totalcost+cost;
        document.getElementById("totalcostroom1").innerHTML = cost.toString();
    }
}
function room1change(myRadio){
    let checkBox = document.getElementById("room1"); 
    let cost; 
    if (checkBox.checked == true){
        
        let bbb = document.getElementsByName('roomtype1');              
        for(i = 0; i < bbb.length; i++) {
            if(bbb[i].checked)
                cost=bbb[i].value;
        }
        let x = document.getElementById("noofrooms1").value; 
        cost=parseInt(cost)*parseInt(x)
        totalcost=totalcost+cost;
        document.getElementById("totalcostroom1").innerHTML = cost.toString();
    } else {
        cost=0
        totalcost=totalcost+cost;
        document.getElementById("totalcostroom1").innerHTML = cost.toString();
    }
}
//room2
function room2Change(){
    let checkBox = document.getElementById("room2"); 
    let cost; 
    if (checkBox.checked == true){
        
        let bbb = document.getElementsByName('roomtype2');              
        for(i = 0; i < bbb.length; i++) {
            if(bbb[i].checked)
                cost=bbb[i].value;
        }
        let x = document.getElementById("noofrooms2").value; 
        cost=parseInt(cost)*parseInt(x)
        totalcost=totalcost+cost;
        document.getElementById("totalcostroom2").innerHTML = cost.toString();
    } else {
        cost=0
        totalcost=totalcost+cost;
        document.getElementById("totalcostroom2").innerHTML = cost.toString();
    }

}
function room2CheckBox(){
    let checkBox = document.getElementById("room2"); 
    let cost; 
    if (checkBox.checked == true){
        
        let bbb = document.getElementsByName('roomtype2');              
        for(i = 0; i < bbb.length; i++) {
            if(bbb[i].checked)
                cost=bbb[i].value;
        }
        let x = document.getElementById("noofrooms2").value; 
        cost=parseInt(cost)*parseInt(x)
        totalcost=totalcost+cost;
        document.getElementById("totalcostroom2").innerHTML = cost.toString();
    } else {
        cost=0
        totalcost=totalcost+cost;
        document.getElementById("totalcostroom2").innerHTML = cost.toString();
    }
}
function room2price(myRadio){
    let checkBox = document.getElementById("room2"); 
    let cost; 
    if (checkBox.checked == true){
        
        let bbb = document.getElementsByName('roomtype2');              
        for(i = 0; i < bbb.length; i++) {
            if(bbb[i].checked)
                cost=bbb[i].value;
        }
        let x = document.getElementById("noofrooms2").value; 
        cost=parseInt(cost)*parseInt(x)
        totalcost=totalcost+cost;
        document.getElementById("totalcostroom2").innerHTML = cost.toString();
    } else {
        cost=0
        totalcost=totalcost+cost;
        document.getElementById("totalcostroom2").innerHTML = cost.toString();
    }
}
//room3
function room3Change(){
    let checkBox = document.getElementById("room3"); 
    let cost; 
    if (checkBox.checked == true){
        
        let bbb = document.getElementsByName('roomtype3');              
        for(i = 0; i < bbb.length; i++) {
            if(bbb[i].checked)
                cost=bbb[i].value;
        }
        let x = document.getElementById("noofrooms3").value; 
        cost=parseInt(cost)*parseInt(x)
        totalcost=totalcost+cost;
        document.getElementById("totalcostroom3").innerHTML = cost.toString();
    } else {
        cost=0
        totalcost=totalcost+cost;
        document.getElementById("totalcostroom3").innerHTML = cost.toString();
    }

}
function room3CheckBox(){
    let checkBox = document.getElementById("room3"); 
    let cost; 
    if (checkBox.checked == true){
        
        let bbb = document.getElementsByName('roomtype3');              
        for(i = 0; i < bbb.length; i++) {
            if(bbb[i].checked)
                cost=bbb[i].value;
        }
        let x = document.getElementById("noofrooms3").value; 
        cost=parseInt(cost)*parseInt(x)
        totalcost=totalcost+cost;
        document.getElementById("totalcostroom3").innerHTML = cost.toString();
    } else {
        cost=0
        totalcost=totalcost+cost;
        document.getElementById("totalcostroom3").innerHTML = cost.toString();
    }
}
function room3price(myRadio){
    let checkBox = document.getElementById("room3"); 
    let cost; 
    if (checkBox.checked == true){
        
        let bbb = document.getElementsByName('roomtype3');              
        for(i = 0; i < bbb.length; i++) {
            if(bbb[i].checked)
                cost=bbb[i].value;
        }
        let x = document.getElementById("noofrooms3").value; 
        cost=parseInt(cost)*parseInt(x)
        totalcost=totalcost+cost;
        document.getElementById("totalcostroom3").innerHTML = cost.toString();
    } else {
        cost=0
        totalcost=totalcost+cost;
        document.getElementById("totalcostroom3").innerHTML = cost.toString();
    }
}

//room4
function room4Change(){
    let checkBox = document.getElementById("room4"); 
    let cost; 
    if (checkBox.checked == true){
        
        let bbb = document.getElementsByName('roomtype4');              
        for(i = 0; i < bbb.length; i++) {
            if(bbb[i].checked)
                cost=bbb[i].value;
        }
        let x = document.getElementById("noofrooms4").value; 
        cost=parseInt(cost)*parseInt(x)
        totalcost=totalcost+cost;
        document.getElementById("totalcostroom4").innerHTML = cost.toString();
    } else {
        cost=0
        totalcost=totalcost+cost;
        document.getElementById("totalcostroom4").innerHTML = cost.toString();
    }

}
function room4CheckBox(){
    let checkBox = document.getElementById("room4"); 
    let cost; 
    if (checkBox.checked == true){
        
        let bbb = document.getElementsByName('roomtype4');              
        for(i = 0; i < bbb.length; i++) {
            if(bbb[i].checked)
                cost=bbb[i].value;
        }
        let x = document.getElementById("noofrooms4").value; 
        cost=parseInt(cost)*parseInt(x)
        totalcost=totalcost+cost;
        document.getElementById("totalcostroom4").innerHTML = cost.toString();
    } else {
        cost=0
        totalcost=totalcost+cost;
        document.getElementById("totalcostroom4").innerHTML = cost.toString();
    }
}
function room4price(myRadio){
    let checkBox = document.getElementById("room4"); 
    let cost; 
    if (checkBox.checked == true){
        
        let bbb = document.getElementsByName('roomtype4');              
        for(i = 0; i < bbb.length; i++) {
            if(bbb[i].checked)
                cost=bbb[i].value;
        }
        let x = document.getElementById("noofrooms4").value; 
        cost=parseInt(cost)*parseInt(x)
        totalcost=totalcost+cost;
        document.getElementById("totalcostroom4").innerHTML = cost.toString();
    } else {
        cost=0
        totalcost=totalcost+cost;
        document.getElementById("totalcostroom4").innerHTML = cost.toString();
    }
}
/*  total cost */
function calculateTotalCostAfterDiscount(){
    let total= parseInt(document.getElementById("totalcostroom1").innerHTML)+parseInt(document.getElementById("totalcostroom2").innerHTML)+parseInt(document.getElementById("totalcostroom3").innerHTML)+parseInt(document.getElementById("totalcostroom4").innerHTML);
    let totalafterdisc
    let retVal
    if(total < 1000){totalafterdisc=total;

    }
    else{
        totalafterdisc=total;
        totalafterdisc=total-parseInt(total)*0.15
    }
    ; 
     retVal = confirm("Total Cost is "+totalafterdisc.toString()+". Procedd to Payment?");
   if( retVal == true ) {
    alert("Thank you ")
    
   } else {
        alert("Form Cancelled ")      
   }
   document.getElementById("totalcostafterdiscount").innerHTML = totalafterdisc.toString();
   

}







/*  contact us */
function validate(){
    let clientname=document.getElementById("clientname").value;
    let clientphone=document.getElementById("clientphonephone").value
    let clientmail=document.getElementById("clientmessage").value 
    let clientmessage=document.getElementById("clientmessage").value    
    if(clientname==""){
        alert("Please enter your name");
    }
    else if(clientphone==""){
        alert("Please enter your phone number");
    }
    else if(clientmail==""){
        alert("Please enter your email address");
    }
    else if(clientmessage==""){
        alert("Please enter your mesaage");
    }
    else{
        alert("We will get back to you soon.Thank you for contacting us.");
    }
}