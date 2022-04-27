//functio to find users with matching search criteria
//accepts multiple arrays of divs whith their attributes for each search criteria
//returns 1 array with matching results
function getCommon(flightGroup, roleGroup, genderGroup) {
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