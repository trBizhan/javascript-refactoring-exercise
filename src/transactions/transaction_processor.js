/*************************************************************
 *   The original code seemed untidy and used superfulous variables
 *   and function. eg: validateTransactions, transActions, etc
 *   subsequently replaced it with the following version.
 *************************************************************/
function processTransactions(transactions) {
  /*************************************************************
   *  input: an array of strings representing transactions
   *  output: an array of strings containing  transaction name
   *  and count of transcations. The precedence is based on count
   *  followed by the alphabetical order of transaction names.
   *
   *************************************************************/
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
