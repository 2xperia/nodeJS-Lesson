const pi = Math.PI;

module.exports = function circleFun(r) {
  function circumference() {
    return pi * 2 * r;
  }

  function area() {
    return pi * r * r;
  }

  return {
    area: area,
    circumference: circumference
  };
};

console.dir(module);