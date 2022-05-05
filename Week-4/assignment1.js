const CustomPromiseState = {
    PENDING: "PENDING",
    RESOLVED: "RESOLVED",
    REJECTED: "REJECTED"
};

class CustomPromise {
    constructor(fn) {
        this.CustomPromiseState = CustomPromiseState.PENDING;
        this.resolver = this.resolver.bind(this);
        this.rejector = this.rejector.bind(this);
        this.thenFns = [];
        this.catchFn = null;
        fn(this.resolver, this.rejector);
    }
    resolver(resolverData){
        if (this.CustomPromiseState === CustomPromiseState.PENDING){
            this.thenFn && this.thenFn(resolverData);
        }
        this.CustomPromiseState = CustomPromiseState.RESOLVED;
    }
    rejector(rejectorData){
        if (this.CustomPromiseState === CustomPromiseState.PENDING){
            this.catchFn && this.catchFn(rejectorData);
        }
        this.CustomPromiseState = CustomPromiseState.REJECTED;
    }
    then(thenFn){
        this.thenFn = thenFn;
        return this;
    }
    catch(catchFn) {
        this.catchFn = catchFn;
        return this;
    }
}
const getNumber = () => new CustomPromise((res,rej) => {
    const randomNum = Math.floor(Math.random() * 100);
    setTimeout(()=> {
        if (randomNum%5 === 0){
            res(`${randomNum} is divisible by 5`);
        }
        else {
            rej(`${randomNum} not divisible by 5`);
        }
    }, 2000);

});

const randomNumPromise = getNumber();

randomNumPromise.then((val) => console.log(`${val}`)).then((val) => console.log(`${val}`)).catch((val) => console.log(`${val}`));