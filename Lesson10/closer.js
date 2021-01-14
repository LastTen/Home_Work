'use strict'
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