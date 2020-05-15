//  「类型 + 方括号」表示法

let fibonacci: number[] = [1, 1, 2, 3, 5];
// fibonacci.push('8'); // 需要number类型的

//  数组泛型

let fibonacci1: Array<number | string> = [1, 1, 2, 3, 5];
fibonacci1.push('8')



//  类数组
function sum() {
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;
}

//  常用的类数组都有自己的接口定义，如 IArguments, NodeList, HTMLCollection
function sum1() {
    let args: IArguments = arguments;
}

let arr: any[] = [1, {}, 2 + '1', 3, 5];

export {}