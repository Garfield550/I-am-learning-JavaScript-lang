
let func1 = (x) => x + 2;

let func2 = (x) => x + 3;

let compose = (f, g) => (x) => f(g(x));

let add = compose(func1, func2);

console.log(add(1));

// 展开

let function1 = function(parameter) {
    return parameter + 2;
}

let function2 = function(parameter) {
    return parameter + 3;
}

let composeFunction = function(functionParameter1, functionParameter2) {
    // 返回需要一个参数的函数
    return function(parameter) {
        // 执行顺序
        // 先执行 functionParameter2
        // 再执行 functionParameter1
        return functionParameter1(functionParameter2(parameter));
    }
}

let addFunction = composeFunction(function1, function2);

console.log(addFunction(1));

// 简化

let f = x => x + 2;
let g = x => x + 3;
let c = (f, g) => x => f(g(x));
let a = c(f, g);
console.log(a(1));