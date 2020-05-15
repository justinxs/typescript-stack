//  函数声明   输入多余的（或者少于要求的）参数，是不被允许的
function sum(x: number, y: number): number {
    return x + y;
}

// sum(1)      //  输入少
// sum(1, 2, 2)      //  输入多

//  函数表达式

let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};


//  用接口定义函数的形状

interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc = function(source: string, subString: string) {
    return source.search(subString) !== -1;
};

//  可选参数    可选参数后面不允许再出现必需参数

function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}
let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');




//  参数默认值
function buildName1(firstName: string = 'Tom', lastName: string) {
    return firstName + ' ' + lastName;
}
let tomcat1 = buildName1('Tom', 'Cat');
let cat1 = buildName1(undefined, 'Cat');

//  重载   从上往下匹配
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}