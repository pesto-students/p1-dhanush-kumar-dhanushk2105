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
        this.thenFn = null;
        this.catchFn = null;
        fn(this.resolver, this.rejector);
    }
    resolver(resolverData){
        if (this.CustomPromiseState === CustomPromiseState.PENDING){
            this.thenFn && this.thenFn(resolverData);
        }
    }
    rejector(rejectorData){
        if (this.CustomPromiseState === CustomPromiseState.PENDING){
            this.catchFn && this.catchFn(rejectorData);
        }
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