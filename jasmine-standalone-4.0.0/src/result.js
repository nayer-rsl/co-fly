//function to return the result message according to the search results
//It gets the flightmessage as a string and the array of users with requested qualifications
//And returns a message
 var returnMessage = "";
 var noResultReturnMessage = "There are no traveller matching the information provided. Please try again using different information!";
 var existResultMessage = true;
 
 function result(flightNumReq,flightGroup, roleGroup, genderGroup){

  if(getCommon(flightGroup, roleGroup, genderGroup).length === 0  && checkFlightNumber(flightNumReq) === true){
    returnMessage = noResultReturnMessage;
  }else{
    returnMessage = existResultMessage;
  }
  return returnMessage;
}//End Result function