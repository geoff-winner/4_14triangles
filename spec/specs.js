describe('triangulator', function(){

    it("returns isosceles if input1 === input2", function(){
        expect(triangulator(1, 1)).to.equal('Isosceles');
    });
    it("returns isosceles if input1 === input3", function(){
        expect(triangulator(2, 1, 2)).to.equal('Isosceles');
    });
    it("returns isosceles if input2 === input3", function(){
        expect(triangulator(2, 3, 3)).to.equal('Isosceles');
    });
});
