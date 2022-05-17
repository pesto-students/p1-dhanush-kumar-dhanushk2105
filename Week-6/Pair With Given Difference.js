function pairGivenDiff (arr,b) {
    for (let i = 0; i < arr.length; i++){
        for(let j = 1; j < arr.length; j++){
            if(Math.abs(arr[i]-arr[j])===Math.abs(b)){
                return 1;
            }
        }
    }
    return 0;
}

let a = [5, 10, 3, 2, 50, 80];
let b = 78;
console.log(pairGivenDiff(a,b));

