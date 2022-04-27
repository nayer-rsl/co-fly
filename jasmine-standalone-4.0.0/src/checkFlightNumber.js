//The checkLogin function will check the user inputs against empty or unathorized username and password, it gets the user inputs as a string and returns a message
//The function accepts the user input as a number
//The function returns a message

//Set the messages
    var flightMessage = "";
    var flightValid = true;
    var flightInvalid = "Please enter a valid flight number!";

//Valid inputs

//Function
function checkFlightNumber(flightNumReq){

  //validate the flight number
  var flightNumRegex = /^[A-Za-z]{2}[0-9]{4}$/;
  if(flightNumRegex.test(flightNumReq) === true){
    //flightNumReq.focus();
    flightMessage = flightValid;
  }else{
    flightMessage = flightInvalid;
  }       
  return flightMessage;
}//End checkFlightNumber function