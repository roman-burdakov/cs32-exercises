describe("most excellent app", function(){
  describe("one", function(){
    it("should call console.log", function(){
      var consoleSpy = spyOn(console, "log");
      one();
      expect(consoleSpy).toHaveBeenCalled();
    });
  });
  describe("two", function(){
    it("should return true", function(){
      expect(two()).toBeTruthy();
    });
  });
});
