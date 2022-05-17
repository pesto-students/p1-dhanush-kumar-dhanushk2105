function maxContiguousSum(a)
{
  let maxBuffer = a[0];
  let curr_max = a[0];
 
  for (let i = 1; i < a.length; i++)
  {
      curr_max = Math.max(a[i], curr_max+a[i]);
      maxBuffer = Math.max(maxBuffer, curr_max);
  }
 
return maxBuffer;
}

let a = [-2, -3, 4, -1, -2, 1, 5, -3];
let b =  [1, 2, 3, 4, -10];
console.log("Max Contiguous sum in the array", a, "is ===>",maxContiguousSum(a));
console.log("Max Contiguous sum in the array", b, "is ===>",maxContiguousSum(b));