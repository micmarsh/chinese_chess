var Piece = require('./piece.js');

function Cannon(color) {
  var self = new Piece(color);

  self.type = 'Cannon';

  self.getMoves = function(position) {
    var current_square;
    var moves = [];
    var directions = ['left', 'right', 'up', 'down'];
    for (var dir_index = 0; dir_index < directions.length; dir_index += 1) {
      var direction = directions[dir_index];
      var next_square = self.square[direction];
      while (next_square) {
        current_square = next_square;
        if (position[current_square.coordinates]) {
          next_square = current_square[direction];
          while (next_square) {
            current_square = next_square;
            if (position[current_square.coordinates]) {
              if (position[current_square.coordinates].color !== self.color) {
                moves.push(current_square.coordinates);
              }
              break;
            }
            next_square = current_square[direction];
          }
          break;
        }
        moves.push(current_square.coordinates);
        next_square = current_square[direction];
      }
    }
    return moves;
  };

  return self;
}

module.exports = Cannon;
