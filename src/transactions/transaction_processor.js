function processTransactions(transactions) {
  if (!transactions) {
    throw new Error("Undefined collection of transactions");
  }
  let txr = []; // changed var to let
  let txCount = {};

  //const numberOfTransactions = transactions.length;

  transactions.forEach((item) =>
    txCount[item] ? (txCount[item] += 1) : (txCount[item] = 1)
  );

  /*
  for (var i = 0; i < numberOfTransactions; i++) {
    const transaction = transactions[i];
    txCount[transaction]
      ? (txCount[transaction] += 1)
      : (txCount[transaction] = 1);
  }
*/
  txCount = sortByAmountThenName(txCount);

  // Place them back in array for returning
  Object.keys(txCount).forEach(
    (key, index) => (txr[index] = `${key} ${txCount[key]}`)
  );

  return txr;
}

function sortByAmountThenName(txCount) {
  // change let to const, use arrow function

  const sortedKeys = Object.keys(txCount).sort((itemOne, itemTwo) => {
    return (
      txCount[itemTwo] - txCount[itemOne] ||
      itemOne > itemTwo ||
      -(itemOne < itemTwo)
    );
  });

  let sortedResults = {};
  for (let objectKey of sortedKeys) {
    sortedResults[objectKey] = txCount[objectKey];
  }

  return sortedResults;
}

/*
function validateTransactions(transactions) {
  if (transactions === undefined) {
    return false;
  }

  return true;
}
*/

module.exports = processTransactions;
