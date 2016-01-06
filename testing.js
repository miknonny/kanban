var someObj = {
  multiplier: 2,
  nums: [1, 2, 3],
  multiplied () {
    return this.nums.map(function (n) {
      return this.multiplier * n
    }.bind(this))
  }
}
console.log(someObj.multiplied());

var otherObj = {
  multiplier: 23,
  nums: [1,2,3]
};

console.log(someObj.multiplied.call(otherObj));

var newObj = {
  multiplier: 4,
  nums: [2, 4, 8]
};

var anotherObj = someObj.multiplied.bind(newObj);
console.log(anotherObj())


const firstName = 'michael';
console.log(`hello ${firstName}, how are you?`)
