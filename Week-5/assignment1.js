async function * Task(callback1,callback2,callback3,){
    yield await callback1();
    yield await callback2();
    yield await callback3();
}

// async function abc(){
//     return "This is Async Function"
// }

async function task1(){
return "Task 1: ";
}
async function task2(){
    return "Task 2: ";
    
}
function task3(){
    return "Task 3: "
}

let genTask = Task(task1, task2, task3);

genTask.next().then((val)=>{console.log(val)});
genTask.next().then((val)=>{console.log(val)});
genTask.next().then((val)=>{console.log(val)});





