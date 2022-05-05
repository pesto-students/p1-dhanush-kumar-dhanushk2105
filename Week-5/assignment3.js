function hasDuplicate(arr) {
    return arr.length === new Set(arr).size;
  }
  
  let arr1 = [1, 2, 3, 4, 5];
  console.log(`${arr1} has unique elements?  ${hasDuplicate(arr1)}`);
  
  let arr2 = [1, 2, 2, 3, 4, 5];
  console.log(`${arr2} has unique elements? : ${hasDuplicate(arr2)}`);