describe("Test the checkFlightNumber function", function(){
  
  
  describe("checkFlightNumber Test to PASS", function(){
    it("should return 'Please Enter a valid flight number!'", function() {
      var flightNumReq = "a234";
      expect(checkFlightNumber(flightNumReq)).toEqual(flightInvalid);
    });
    it("should return Boolean 'true'", function() {
      var flightNumReq = "ed7633";
      expect(checkFlightNumber(flightNumReq)).toEqual(flightValid);
    });
     it("should return Boolean 'true'", function() {
       var flightNumReq = "aD1234";
       expect(checkFlightNumber(flightNumReq)).toEqual(flightValid);
    });

  });
  describe("checkFlightNumber Test to FAIL", function(){
    it("should return 'Please Enter a valid flight number!'", function() {
      var flightNumReq = "1234DF";
      expect(checkFlightNumber(flightNumReq)).toEqual(flightInvalid);
    });
    it("should return 'Please Enter a valid flight number!'", function() {
      var flightNumReq = "";
      expect(checkFlightNumber(flightNumReq)).toEqual(flightInvalid);
    });
    it("should return 'Please Enter a valid flight number!'", function() {
      var flightNumReq = 6249;
      expect(checkFlightNumber(flightNumReq)).toEqual(flightInvalid);
    });

  });
  describe("checkFlightNumber BOUNDRY TEST", function(){
    it("should return 'Please Enter a valid flight number!'.", function() {
      var flightNumReq = "AD1598761";
      expect(checkFlightNumber(flightNumReq)).toEqual(flightInvalid);
    });
    it("should return Boolean 'true'", function() {
      var flightNumReq = "Ad0000";
      expect(checkFlightNumber(flightNumReq)).toEqual(flightValid);
    });
    it("should return 'Please Enter a valid flight number!'", function() {
      var flightNumReq = "MM0000";
      expect(checkFlightNumber(flightNumReq)).toEqual(flightValid);
    });

  });

});


describe("Test the getCommon function",function(){
  describe("getCommon Test to PASS",function(){
    it("should return an array of the users which are common in all previous arrays",function(){
      var flightGroup = [3,6,7];
      var roleGroup = [1,2,3];
      var genderGroup = [3,4,5];
      expect(getCommon(flightGroup, roleGroup,genderGroup)).toEqual([3]);
    });
    it("should return an array of the users which are common in all previous arrays",function(){
      var flightGroup = ['a','b',];
      var roleGroup = ['a','v','e'];
      var genderGroup = ['a','c','w'];
      expect(getCommon(flightGroup, roleGroup,genderGroup)).toEqual(['a']);
    });
     it("should return an array of the users which are common in all previous arrays",function(){
       var flightGroup = [3,'a',7];
       var roleGroup = ['a',2,3];
       var genderGroup = [3,'a',5];
       expect(getCommon(flightGroup, roleGroup,genderGroup)).toEqual([3,'a']);
     });
  });

  describe("getCommon Test to Fail",function(){
    it("should return an empty array if there are no users matching the search criteria.",function(){
      var flightGroup = [0];
      var roleGroup = [1];
      var genderGroup = ['R'];
      expect(getCommon(flightGroup, roleGroup,genderGroup)).toEqual([]);
    });
    it("should return an empty array if there are no users matching the search criteria.",function(){
      var flightGroup = ['4','b',6];
      var roleGroup = ['b','4',6];
      var genderGroup = ['apple','cap','w'];
      expect(getCommon(flightGroup, roleGroup,genderGroup)).toEqual([]);
    });
     it("should return an empty array if there are no users matching the search criteria.",function(){
       var flightGroup = [];
       var roleGroup = [];
       var genderGroup = [];
       expect(getCommon(flightGroup, roleGroup,genderGroup)).toEqual([]);
     });
    });

  describe("getCommon Boundary Test",function(){
    it("should return an empty array if there are no users matching the search criteria.",function(){
      var flightGroup = [3,6,7];
      var roleGroup = [1,2,3];
      var genderGroup = [8,9,10];
      expect(getCommon(flightGroup, roleGroup,genderGroup)).toEqual([]);
    });
    it("should return an array of the users which are common in all previous arrays",function(){
      var flightGroup = ['apple','bag','cap','2','','d'];
      var roleGroup = ['apple','car','e','2',''];
      var genderGroup = ['apple','cap','w','2',''];
      expect(getCommon(flightGroup, roleGroup,genderGroup)).toEqual(['apple','2','']);
    });
     it("should return an empty array if there are no users matching the search criteria.",function(){
       var flightGroup = [3,'a',7];
       var roleGroup = ['a',2,3];
       var genderGroup = [];
       expect(getCommon(flightGroup, roleGroup,genderGroup)).toEqual([]);
     });
  });
});


describe("Test the result function", function(){
  
  
  describe("result Test to PASS", function(){
     it("should use the array returned from the getCommon function, and the flightMessage returned from the CheckFlightNumber, and return 'There are no traveller matching the information provided. Please try again using different information!'", function() {
       var flightNumReq = "ab1234";
       var flightGroup = ['apple','bag','c'];
       var roleGroup = ['a','car','e'];
       var genderGroup = ['app','cap','w'];
      expect(result(flightNumReq,flightGroup, roleGroup,genderGroup)).toEqual(noResultReturnMessage);
     });
     it("should return Boolean true if the search results in travellers", function() {
      var flightNumReq = "ab1234";
      var flightGroup = ['g','bag','c'];
      var roleGroup = ['P','bag','e','5'];
      var genderGroup = ['g','bag','w'];
       expect(result(flightNumReq,flightGroup, roleGroup,genderGroup)).toEqual(existResultMessage);
     });
     it("should return Boolean true if the search results in travellers", function() {
      var flightNumReq = "ab5234";
      var flightGroup = ['G','e','c'];
      var roleGroup = ['G','bag'];
      var genderGroup = ['G','bag','w'];
       expect(result(flightNumReq,flightGroup, roleGroup,genderGroup)).toEqual(existResultMessage);
     });

  });
  describe("result Test to FAIL", function(){
    it("should use the array returned from the getCommon function, and the flightMessage returned from the CheckFlightNumber, and return 'There are no traveller matching the information provided. Please try again using different information!'", function() {
      var flightNumReq = "sf5976";
      var flightGroup = ['I','c'];
      var roleGroup = ['4','APP','w',''];
      var genderGroup = ['4','app','w',''];
     expect(result(flightNumReq,flightGroup, roleGroup,genderGroup)).toEqual(noResultReturnMessage);
    });
    it("should use the array returned from the getCommon function, and the flightMessage returned from the CheckFlightNumber, and return 'There are no traveller matching the information provided. Please try again using different information!'", function() {
      var flightNumReq = "KQ0000";
      var flightGroup = [];
      var roleGroup = ['r','e'];
      var genderGroup = ['r','e'];
       expect(result(flightNumReq,flightGroup, roleGroup,genderGroup)).toEqual(noResultReturnMessage);
     });
     it("should use the array returned from the getCommon function, and the flightMessage returned from the CheckFlightNumber, and return 'There are no traveller matching the information provided. Please try again using different information!'", function() {
      var flightNumReq = "tR0123";
      var flightGroup = [];
      var roleGroup = [''];
      var genderGroup = ['','','d'];
       expect(result(flightNumReq,flightGroup, roleGroup,genderGroup)).toEqual(noResultReturnMessage);
     });
  });
  describe("result BOUNDRY testing", function(){
    it("should use the array returned from the getCommon function, and the flightMessage returned from the CheckFlightNumber, and return 'There are no traveller matching the information provided. Please try again using different information!'", function() {
      var flightNumReq = "AF0000";
      var flightGroup = [];
      var roleGroup = [];
      var genderGroup = [];
     expect(result(flightNumReq,flightGroup, roleGroup,genderGroup)).toEqual(noResultReturnMessage);
    });
    it("should return Boolean true if the search results in travellers'", function() {
      var flightNumReq = "EQ4567";
      var flightGroup = [2,'f','ye',5];
      var roleGroup = [2,'yt'];
      var genderGroup = [2,'4'];
       expect(result(flightNumReq,flightGroup, roleGroup,genderGroup)).toEqual(existResultMessage);
     });
     it("should return Boolean true if the search results in travellers'", function() {
      var flightNumReq = "oO9999";
      var flightGroup = [2,'f',2];
      var roleGroup = [2,'yt'];
      var genderGroup = [5,532,'yt',2];
       expect(result(flightNumReq,flightGroup, roleGroup,genderGroup)).toEqual(existResultMessage);
     });
  });
});