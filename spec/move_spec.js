var Cannon = require('../src/cannon.js');
var MovablePosition = require('../src/movable_position.js');
var StartingPostion = require('../src/starting_position.js');
describe('MovablePosition', function() {
    var position;

    beforeEach(function() {
        var parent = new StartingPostion();
        position = new MovablePosition(parent);
    });

    it('runs with throwing any exceptions', function() {
        expect(position).toBeDefined();
    });

    it('checks a few moves', function () {
        var chariotMoves = position.canMove("0,0","0,2");
        expect(chariotMoves).toBe(true);

        var noMove = position.canMove('0,0','0,7');
        expect(noMove).toBe(false);
    });
})
