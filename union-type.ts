let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;

//  只能访问此联合类型的所有类型里共有的属性或方法
function getLength(something: string | number): string {
    // return something.length;
    return something.toString()
}

//  联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型
let myFavoriteNumber1: string | number;
myFavoriteNumber1 = 'seven';
console.log(myFavoriteNumber1.length); // 5
myFavoriteNumber1 = 7;
// console.log(myFavoriteNumber1.length); // 编译时报错

export {}