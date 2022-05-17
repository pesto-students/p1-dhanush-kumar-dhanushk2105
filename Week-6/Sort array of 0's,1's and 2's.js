//Sort array of 0's,1's and 2's

function sortArr012(arr){
    let zeroArr = [], oneArr = [], twoArr =[];
    for (i = 0; i < arr.length; i++) {
        switch (arr[i]) {
        case 0:
            zeroArr.push(0);
            break;
        case 1:
            oneArr.push(1);
            break;
        case 2:
            twoArr.push(2);
            break;
        }
    }
    return zeroArr.concat(oneArr,twoArr);
}

let arr = [0,2,0,0,1,0,2,1,1,1,2,0,0,2];
console.log(sortArr012(arr));