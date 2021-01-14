function createSecretHolder(secret) {
  return secret
}


const secret1 = {
  nameSecret1: '',
  create:createSecretHolder,
  setSecret(secret){
    secret1.nameSecret1 = secret;
  },
  getSecret(){
    return secret.nameSecret1
  }

}
secret1.setSecret("123");
console.log(secret1.nameSecret1);