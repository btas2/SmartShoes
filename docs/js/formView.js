"use strict";
function validateForm(){
    
    /* declare the input that needs to include letter and numbers eg:F106 */
    var number= ["0","1","2","3","4","5","6","7","8","9"];
    
    /* initialise variables */ 
    var text_seatsTotal=document.forms["RoomUsage"]["seatsTotal"].value
    var number_SeatsTotal=Number(text_seatsTotal)

    var st=text_seatsTotal.length

     //make sure the field is filled by user with positive numbers
    if(st===0){
        alert("You have not filled in the total number of sensors")
        return false
    }
    
    for (var i=0;i<st;i++){
        
        var checkST=text_seatsTotal[i];
        var result=number.includes(checkST);
        if (result===false){
            alert("Invalid input for total amount of sensors");
            return false;
        }
           
    }
    
    //passing the input information to class and create a new class
    //var room = new roomUsage(number_SeatsTotal);
    //console.log(room)
    
    
    //convert class to JSON.stringfy
    Display();
    
}//END OF VALIDATEFORM()

window.onload=function() {
  var promised = document.getElementsByName("Promised4");
  for (var i=0;i<promised.length;i++) {
    promised[i].onclick=function() {
      var rads = this.form[this.name];
      for (var i=0;i<rads.length;i++) {
        var textField = this.form[rads[i].value.toLowerCase()+"Specify"];
          console.log(rads[i].value.toLowerCase()+"Specify");
        if (textField) textField.disabled = !rads[i].checked;
      }    
    }    
  }
}       


function Display() {
    // Connect the table with the js file
    var input = document.getElementById("Seat_Total").value;
    var time = [11,22,33,44,55,66];
    var dischargeTime = [];
    var chargeTime = [];
    
    
    var chargeLevel = 0;
    
    if (document.getElementById("otherSpecify").disabled == true){
        chargeLevel = 100;

    }else{
        
        chargeLevel = document.getElementById("otherSpecify").value;
    }
    
    //Logic
    if (input == 2){
        dischargeTime = (10-chargeLevel)/(-5.15);
        chargeTime = ((100-10)/0.0025)/3600;
        
        Table.rows[0].cells[0].innerHTML = dischargeTime.toFixed(2);
        Table.rows[0].cells[1].innerHTML = chargeTime.toFixed(2);
    }else if (input == 3){
        dischargeTime = (10-chargeLevel)/(-4.23);
        chargeTime = ((100-10)/0.003153988868)/3600;
        
        Table.rows[0].cells[0].innerHTML = dischargeTime.toFixed(2);
        Table.rows[0].cells[1].innerHTML = chargeTime.toFixed(2);
    }else{
        
        dischargeTime = "N/A";
        chargeTime = "N/A";
        
        Table.rows[0].cells[0].innerHTML = dischargeTime;
        Table.rows[0].cells[1].innerHTML = chargeTime;
    }
    
    console.log(document.getElementById("otherSpecify").value);

}
