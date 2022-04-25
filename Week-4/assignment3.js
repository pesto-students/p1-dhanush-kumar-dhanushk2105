//Impementing Fibonacci Series with Iterators

const Fib = (n) => ({
    [Symbol.iterator]: () => {
        let i = 1;
        let prev =0, new1 =0;
        return {
            next: () => {
                if(i++ <= n){
                    [prev, new1] = [new1, (prev + new1)||1];
                    return {value: prev, done: false}
                }
                else {
                    return {done: true}
                }
                }

        }
    }
});

console.log([...Fib(6)]);

for(let num of Fib(6)){
    console.log(num);
}