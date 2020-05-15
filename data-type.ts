//  布尔类型
let isDone: boolean = false;
let createdByBoolean: boolean = Boolean(1);
//  布尔对象
let createdByNewBoolean: Boolean = new Boolean(1);



//  数值
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;


//  字符串

let myName: string = 'Tom';
let myAge: number = 25;
// 模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;


//  空值 undefined null
//  JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数：
function alertName(): void {
    alert('My name is Tom');
}
//  声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null：
let unusable: void = undefined;


//  与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量
let num: number = undefined;
let u: undefined;
let num1: number = u;


//  任意类型值 对它的任何操作，返回的内容的类型都是任意值
let myFavoriteNumber: any = 'seven';
myFavoriteNumber = 7;
//  访问属性
let anyThing: any = 'hello';
anyThing = {
    myName: 'waah',
    firstName: 'ssss'
};
console.log(anyThing.myName);
console.log(anyThing.firstName);
//  调用方法 
let anyThing1: any = 'Tom';
anyThing1 = {
    name: '',
    firstName: '',
    setName: function (str: string) {
        this.name = str
        return this
    },
    sayHello() {
        alert('hello')
    },
    setFirstName(str: string) {
        this.firstName = str
        return this
    }
}
anyThing1.setName('Jerry');
anyThing1.setName('Jerry').sayHello();
anyThing1.setFirstName('Cat');



