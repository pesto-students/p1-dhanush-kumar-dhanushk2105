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



memoizeAdd(100,100)
memoizeAdd(100)
memoizeAdd(100,200)
memoizeAdd(100,100)