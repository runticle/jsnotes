function testCircleRadiusDefaultsTo10() {
  var circle = new Circle()
  assert.isTrue(circle.radius === 10)
}

function testCircleDiameterDefaultsTo3() {
  var circle = new Circle()
  assert.isTrue(circle.diameter === 3)
}

testCircleRadiusDefaultsTo10()
testCircleDiameterDefaultsTo3()
