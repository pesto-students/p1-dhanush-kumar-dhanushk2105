function spiralPrint(arr) {
    let i, k = 0, l = 0;
    let m = r = arr.length;
    let n = arr[0].length;
    let outArr = [];
    /*
        k - starting row index
        m - ending row index
        l - starting column index
        n - ending column index
        i - iterator 
    */
 
    while (k < m && l < n) { //to print all element present in the 2D array
        // to print the first row from the remaining rows
        for (i = l; i < n; ++i) {
            outArr.push(arr[k][i]);
        }
        k++; // redusing the array row wise from top
 
        // to print the last column from the remaining columns
        for (i = k; i < m; ++i) {
            outArr.push(arr[i][n - 1]); //first row element of last column already printed
        }
        n--; //redusing the array column wise from right
 
        // print the last row from the remaining rows
        if (k < m) {
            for (i = n - 1; i >= l; --i) {
                outArr.push(arr[m - 1][i]);
            }
            m--; // redusing the array row wise from bottom
        }
 
        // print the first column from the remaining columns
        if (l < n) {
            for (i = m - 1; i >= k; --i) {
                outArr.push(arr[i][l]);
            }
            l++; // redusing the array column wise from left
        }
    }
    return outArr;
}
 
// function call
let arr = [[ 1, 2, 3, 4 ],
     [ 5, 6, 7, 8 ],
     [ 9, 10, 11, 12 ],
     [ 13, 14, 15, 16 ]];
 
console.log("The spiral output of the array:\n",arr, "\n is ===>\n",spiralPrint(arr));