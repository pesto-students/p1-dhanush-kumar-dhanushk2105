async function* doTask1(val) {
    if (val) {
        yield "${val} is passed in task 1"
    }
    return "no value in task 1"

}

async function* doTask2(val) {
    if (val) {
        yield "${val} is passed in task 2"
    }
    return "no value in task 2"

}

async function* doTask3(val) {
    if (val) {
        yield "${val} is passed in task 3"
    }
    return "no value in task 3"

}

function doTasks(val) {
    return doTask1(doTask2(doTask3(val)));
}
console.log(doTasks("Neo"));
console.log(doTasks("Morbeous").then((data) => { console.log(data); })); //
console.log(doTasks().then((data) => { console.log(data); }));

setTimeout(() => { console.log("Dhanush") }, 2000); //ex of callback