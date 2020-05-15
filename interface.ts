//  定义了一个接口 Person，接着定义了一个变量 tom，它的类型是 Person。这样，我们就约束了 tom 的形状必须和接口 Person 一致

interface Person {
    name: string;
    age: number;
}

let tom: Person = {
    name: 'Tom',
    age: 52
};

//  少一个属性不行，多一个也不行
// let tom: Person = {
//     name: 'Tom'
// };
// let tom: Person = {
//     name: 'Tom',
//     age: 25,
//     gender: 'male'
// };

//  可选属性
interface Person1 {
    name: string;
    age?: number;
}

let tom1: Person1 = {
    name: 'Tom'
};

//  任意属性   一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
interface Person2 {
    name: string;
    age?: number;
    [propName: string]: any;
}

let tom2: Person2 = {
    name: 'Tom',
    2: 'male'
};


//  只读属性

interface Person3 {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
}

let tom3: Person3 = {
    id: 89757,
    name: 'Tom',
    gender: 'male'
};

// tom3.id = 9527;    //   只读属性不可修改

//  只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候

// tom3 = {
//     name: 'Tom',
//     gender: 'male'
// };




export {}