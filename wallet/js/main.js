function genNewWallet(password) {
  if (password.length > 8) {
    var wallet = Wallet.generate(false);
    var private = getPrivateKey(wallet);
    var json = getJson(wallet);

    console.log(json);
  } else {
    alert("Password length need to 9!")
  }
}

function getPrivateKey(wallet) {
  return wallet.getPrivateKeyString();
}

function getJson(wallet) {
  return wallet.toJSON();
}
