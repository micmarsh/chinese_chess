
var StartingPosition = require('./starting_position.js');

function MovablePosition(parent) {
    self = parent || new Position();

    function toggleTurn () {
        self.toMove = self.toMove === 'red'? 'black' : 'red';
    }

    self.canMove = function (from, to) {
        var piece = self[from];
        if (Boolean(piece) && piece.color === self.toMove) {
            var moveList = piece.getMoves(from);
            if (moveList.indexOf(to) !== -1) {
                makeMove(from, to, true);
                result = !self.isCheck;
                makeMove(to, from, true);
                return result;
            }
        }
        return false;
    }

    function makeMove (from, to, internal) {
        var piece = self[from];
        self.remove(from).place(piece, to);
        if(!internal)
            toggleTurn();
    }

    self.makeMove = function (from, to) {
        makeMove(from, to, false);
    }

    return self;
}

module.exports = MovablePosition
