const { returns } = require("chai-spies");

function receivesAFunction(sleep) {
  sleep();
}
receivesAFunction(() => console.log(sleep));

function returnsANamedFunction() {
    function namedFunction() {
        console.log("sebasfunction")
    }
    return namedFunction;
    }
    function returnsAnAnonymousFunction() {
        return function() {
            console.log("code all night!");
        };
    }
    