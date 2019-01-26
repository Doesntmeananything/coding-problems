var reverse = function(x) {
    const arr = x.toString().split('').reverse();
    let counter = 0;
    while (arr[counter] === 0){
        arr.shift();
    }
    let result = Number.parseInt(arr.join("").toString());
    if (Math.abs(result) > (2**31)) {
        return 0;
    } else {
    return (x > 0 ? result : -1 * result);
    };
};
