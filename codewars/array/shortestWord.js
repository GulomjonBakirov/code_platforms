function findShort(s) {
  const a = s.split(" ");
  let b = [];
  for (let i = 0; i < a.length; i++) {
    b.push(a[i].length);
  }
  b.sort(function compare(a, b) {
    return a - b;
  });
  return b[0];
}

console.log(
  findShort(
    "Ethereum Steem Dash Monero MadeSafeCoin Monero MadeSafeCoin Waves Mine Steem Dogecoin BTC Bitcoin Classic DarkCoin ProofOfStake Ethereum"
  )
);
