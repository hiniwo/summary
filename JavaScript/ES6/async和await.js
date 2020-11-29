// async关键字的意思很简单，就是函数返回的是一个promise。
// async function f() {
//     return 1;
// }
// // 等价于下面的代码
// f().then((res) => {
//     console.log(res)
// }) // 1


// 关键词await是等待的意思
// [return_value] = await expression;
// 等的是一个表达式，那么表达式，可以是一个常量，变量，promise，函数等。
// await关键词只能在async函数


function takeLongTime(n) {
    return new Promise(resolve => {
        setTimeout(() => resolve(n), n);
    });
}
function step1(n) {
    console.log(`step1 with ${n}`);
    return takeLongTime(n);
}

function step2(m, n) {
    console.log(`step2 with ${m} and ${n}`);
    return takeLongTime(m + n);
}

function step3(k, m, n) {
    console.log(`step3 with ${k}, ${m} and ${n}`);
    return takeLongTime(k + m + n);
}

// step1代表第一步延时了多久。
// step2代表第一步和第二部总共延时了多久。
// step3代表第一步、第二步和第三步一共延时了多久。

function doIt() {
    console.time("doIt");
    const time1 = 300;
    step1(time1)
        .then(time2 => {
            return step2(time1, time2)
                .then(time3 => [time1, time2, time3]);
        })
        .then(times => {
            const [time1, time2, time3] = times;
            return step3(time1, time2, time3);
        })
        .then(result => {
            console.log(`result is ${result}`);
            console.timeEnd("doIt");
        });
}

doIt();


// async function doIt1() {
//     console.time("doIt");
//     const time1 = 300;
//     const time2 = await step1(time1);
//     const time3 = await step2(time1, time2);
//     const result = await step3(time1, time2, time3);
//     console.log(`result is ${result}`);
//     console.timeEnd("doIt");
// }

// doIt1();
