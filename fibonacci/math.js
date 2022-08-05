// exports.fibonacci=function(n){
//     if(n===0)return 0;
//     else if(n===1 || n===2) return 1;
//     else return exports.fibonacci(n-1)+exports.fibonacci(n-2);};


// going to algorithmic refactoring to make code run faster.
exports.fibonacci = function(n) {
    var fibos = [];
    fibos[0] = 0;
    fibos[1] = 1;
    fibos[2] = 1;
    for (let i = 3; i <= n; i++) {
    fibos[i] = fibos[i-2] + fibos[i-1];
    }
    return fibos[n];
    }