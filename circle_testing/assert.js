var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
    else {
      console.log(assertionToCheck + "Test passed")
    }
  }

  isFalse: function(assertionToCheck) {
    if (assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not falsey");
    }
    else {
      console.log(assertionToCheck + " Test passed")
    }
  }
};
