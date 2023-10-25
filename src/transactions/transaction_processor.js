function processTransactions(transactions) {
  if (!transactions) {
    throw new Error("Undefined collection of transactions");
  }
  let orderedTx = []; // changed var to let
  let orderedTxObj = {};

  //const numberOfTransactions = transactions.length;

  transactions.forEach((item) =>
    orderedTxObj[item] ? (orderedTxObj[item] += 1) : (orderedTxObj[item] = 1)
  );

  /*
  for (var i = 0; i < numberOfTransactions; i++) {
    const transaction = transactions[i];
    txCount[transaction]
      ? (txCount[transaction] += 1)
      : (txCount[transaction] = 1);
  }
*/
  orderedTxObj = sortByAmountThenName(orderedTxObj);

  // Place them back in array for returning
  Object.keys(orderedTxObj).forEach(
    (key, index) => (orderedTx[index] = `${key} ${orderedTxObj[key]}`)
  );

  return orderedTx;
}

function sortByAmountThenName(orderedTxObj) {
  // change let to const, use arrow function

  const sortedKeys = Object.keys(orderedTxObj).sort((itemOne, itemTwo) => {
    return (
      orderedTxObj[itemTwo] - orderedTxObj[itemOne] ||
      itemOne > itemTwo ||
      -(itemOne < itemTwo)
    );
  });

  let sortedResults = {};
  for (let objectKey of sortedKeys) {
    sortedResults[objectKey] = orderedTxObj[objectKey];
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
