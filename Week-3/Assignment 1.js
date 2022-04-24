const prevValues = [[]]


function memoizeAdd(a,b){
    if (prevValues[[a,b]] != null){
        return prevValues[[a,b]]
    }
    let result
    result = a+b
    prevValues[[a,b]] = result
    return result
}



console.log(memoizeAdd(100,100))
console.log(memoizeAdd(100))
console.log(memoizeAdd(100,200))
console.log(memoizeAdd(100,100))

// heigher order function?