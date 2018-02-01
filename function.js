var x = 5;
var add = function(value) {
  return value + x;
};

var sub = function(value) {
  return value - x;
};
var multi = function(value) {
  return value * x;
};
var div = function(value) {
  return value / x;
};

module.exports.add		= add;
module.exports.sub 		= sub;
module.exports.multi 	= multi;
module.exports.div 		= div;