var isDone = false;
var createdByBoolean = Boolean(1);
var createdByNewBoolean = new Boolean(1);
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
var notANumber = NaN;
var infinityNumber = Infinity;
var myName = 'Tom';
var myAge = 25;
var sentence = "Hello, my name is " + myName + ".\nI'll be " + (myAge + 1) + " years old next month.";
function alertName() {
    alert('My name is Tom');
}
var unusable = undefined;
var num = undefined;
var u;
var num1 = u;
var myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
var anyThing = 'hello';
anyThing = {
    myName: 'waah',
    firstName: 'ssss'
};
console.log(anyThing.myName);
console.log(anyThing.firstName);
var anyThing1 = 'Tom';
anyThing1 = {
    name: '',
    firstName: '',
    setName: function (str) {
        this.name = str;
        return this;
    },
    sayHello: function () {
        alert('hello');
    },
    setFirstName: function (str) {
        this.firstName = str;
        return this;
    }
};
anyThing1.setName('Jerry');
anyThing1.setName('Jerry').sayHello();
anyThing1.setFirstName('Cat');
