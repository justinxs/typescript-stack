System.register([], function (exports_1, context_1) {
    "use strict";
    var myFavoriteNumber, myFavoriteNumber1;
    var __moduleName = context_1 && context_1.id;
    function getLength(something) {
        return something.toString();
    }
    return {
        setters: [],
        execute: function () {
            myFavoriteNumber = 'seven';
            myFavoriteNumber = 7;
            myFavoriteNumber1 = 'seven';
            console.log(myFavoriteNumber1.length);
            myFavoriteNumber1 = 7;
        }
    };
});
