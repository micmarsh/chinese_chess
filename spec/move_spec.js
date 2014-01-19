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

    it('accounts for check', function () {
        //move cannon all up in black's grille
        position.makeMove('1,2', '1,9');

        //try to move elephant in a way that cause check
        var elephant = position.canMove('2,9','4,7');
        expect(elephant).toBe(false);

        //same deal with an advisor
        var advisor = position.canMove('3,9','4,8');
        expect(advisor).toBe(false);

        //chariot can capture cannon, tho
        var chariot = position.canMove('0,9','1,9');
        expect(chariot).toBe(true);

    })

})
