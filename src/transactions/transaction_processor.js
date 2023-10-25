function processTransactions(transactions) {
  if (!transactions) {
    throw new Error("Undefined collection of transactions");
  }
  let transactionArray = [];
  let transactionObjCount = {};

  transactions.sort();
  transactions.forEach((item) => {
    transactionObjCount[item] = (transactionObjCount[item] || 0) + 1;
  });
  transactionArray = Object.entries(transactionObjCount)
    .sort(([, a], [, b]) => {
      return b - a;
    })
    .map((item) => `${item[0]} ${item[1]}`);

  return transactionArray;
}

module.exports = processTransactions;
