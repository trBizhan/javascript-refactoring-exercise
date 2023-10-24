function processTransactions(transactions) {
  if (!transactions) {
    throw new Error("Undefined collection of transactions");
  }

  const orderedObj = createOrderedObjFromArray(transactions);
  const orderedArray = createOrderedArrayFromObj(orderedObj);
  const orderedResult = joinInnerArray(orderedArray);
  return orderedResult;
}

function createOrderedObjFromArray(transactions) {
  // create an object from array. key of object = array element
  // value of object = number of duplicate strings in array
  // return object is ordered based on object key
  let trCount = {};
  transactions.forEach((i) => (trCount[i] = (trCount[i] || 0) + 1));

  const orderedObj = Object.keys(trCount)
    .sort()
    .reduce((obj, key) => {
      obj[key] = trCount[key];
      return obj;
    }, {});

  return orderedObj;
}

function createOrderedArrayFromObj(orderedObj) {
  // create an array from the ordered object
  // reorder the array based on count value
  // return result is ordered elements, precedence
  // count first then string
  let sortedArray = [];
  for (let key in orderedObj) {
    sortedArray.push([key, orderedObj[key]]);
  }

  sortedArray.sort((a, b) => b[1] - a[1]);

  return sortedArray;
}

// argument is an array of arrays,
// output is an array of strings.
// the string is stringified inner array
function joinInnerArray(sortable) {
  return sortable.map((i) => i.join(" "));
}

module.exports = processTransactions;
