'use strict'
/*
function createSecretHolder(secret) {
  let _secret = secret;

  return {
      getSecret: function() {
          return _secret;
      },

      setSecret: function(secret) {
          _secret = secret;
      }
  }
}


function createSecretHolder(secret) {
  let SaveYourSecret = function(newSecret) {
    let yourSecret = newSecret;
    this.getSecret = function() {
      return yourSecret;
    },
    this.setSecret = function(secret) {
      yourSecret = secret;
    }
  }
  return new SaveYourSecret(secret);
}
console.log(createSecretHolder(23).getSecret());

*/

function createFunctions(n) {
  var callbacks = [];

  for (var i=0; i<n; i++) {
    callbacks.push(function() {
      return 1++
    });
  }
  
  return callbacks;
}
let callbacks = createFunctions(5)
console.log(callbacks);
console.log(callbacks[0]());
