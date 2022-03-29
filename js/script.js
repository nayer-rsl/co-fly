//Variable to store data
var request = {
  flightNum : "",
  role : "",
  gender: ""
};
window.onload = ready;

function ready(){
 

  var formHandle = document.forms.search_form;
  formHandle.onsubmit = processForm;


  function processForm(request){

    var member = document.getElementsByClassName("member");

    var i;
    for (i = 0; i < member.length; i++) {
    member[i].style.display = 'none';
    }

    document.getElementById("noResult").innerHTML = "";

    //ACCESS THE ELEMENTS THROUGH THE "FORM HANDLE"
    var flightNumReq = formHandle.flight;
    
    var roleSlctBox = formHandle.rolePref;
    
    var roleT = roleSlctBox.options[roleSlctBox.selectedIndex].text;
    request.role=roleT;
    request.role = roleSlctBox.value;

    var genderSlctBox = formHandle.genderPref;
    var genderT = genderSlctBox.options[genderSlctBox.selectedIndex].text;
    request.gender = genderT;
    request.gender = genderSlctBox.value;
    var flightNumMsg = document.getElementById("error");

    var flightMessage = "";
    var flightValid = true;
    var flightInvalid = "Please enter a valid flight number!";

    //function to check the flight number against empty and null
    function checkFlightNumber(){

      //validate the flight number
      var flightNumRegex = /^[A-Za-z]{2}[0-9]{4}$/;
      if(flightNumReq.value === "" || flightNumReq.value === null || !flightNumRegex.test(flightNumReq.value)){
        flightNumReq.focus();
        flightMessage = flightInvalid;
      }else{
        flightMessage = flightValid;
      }       
      return flightMessage;
    }//End checkFlightNumber function

console.log(flightMessage);
    //function output message
    (function message(){
      if (checkFlightNumber() === true){
        flightNumMsg.innerHTML = "";
        request.flightNum = flightNumReq.value;
      }else{
        request.flightNum = flightNumReq.value;
        flightNumMsg.innerHTML=flightMessage;
      }
    })();//End function to output message
    // Get the passengers with the same flight number
    var flightGroup = Array.prototype.slice.call(document.getElementsByClassName(request.flightNum.toLowerCase()));

    // Get the passengers with the same role
    var roleGroup = Array.prototype.slice.call(document.getElementsByClassName(request.role.toLowerCase()));
    // Get the passengers with the same gender
    var genderGroup = Array.prototype.slice.call(document.getElementsByClassName(request.gender.toLowerCase()));

    var resultMessage = document.getElementById("noResult");
    
    var returnMessage = "";
    var noResultReturnMessage = "There are no traveller matching the information provided. Please try again using different information!";
    var existResultMessage = true;

    var common = getCommon();

    //function to return the message according to the results
    function result(){

      if( flightMessage === true && common.length === 0){
        returnMessage = noResultReturnMessage;
      }else{
        returnMessage = existResultMessage;
      }
      return returnMessage;
    }//End Result function


    //function to show users or a no result message
    (function userMsg(){
      if(result() === true){
        for (const e of common){
          e.style.display = "block";
        }
      }else{
        resultMessage.innerHTML = returnMessage;
      }
    })();//End userMsg

    //functio to find users
    function getCommon() {
      // Array to contain common elements
      var common = [];                   
      // Finding common elements
      for (const e of flightGroup){
        if (roleGroup.includes(e) && genderGroup.includes(e)){
          common.push(e);
        }
      }
      return common;
    }//End getCommon

    formHandle.reset();

    return false;  

  }

}
