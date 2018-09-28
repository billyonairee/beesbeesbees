var Bee = require('./Bee')

var HoneyMakerBee = function () {
  Bee.call(this)
  this.age = 10
  this.job = 'make honey'
  this.honeyPot = 0
  // console.log('color:',color)
}

HoneyMakerBee.prototype = Object.create(Bee.prototype)
HoneyMakerBee.prototype.constructor = HoneyMakerBee

HoneyMakerBee.prototype.makeHoney = function () {
  // console.log("1:",this)
  this.honeyPot += 1
}

HoneyMakerBee.prototype.giveHoney = function () {
  this.honeyPot -= 1
  // console.log('2:',this)
}

module.exports = HoneyMakerBee
