function sockMerchant(n, ar) {
    const map = new Map();
    const pairs = 0;
    for (let i = 0; i < ar.length; i++) {
        if (map.has(ar[i])) {
            map.set(ar[i], map.get(ar[i]) + 1)
        } else {
            map.set(ar[i], 1)
        }
    }
    map.forEach((value, key) => {
        if (value >= 2){
            pairs += Math.floor(value / 2);
        }
    })
    console.log(map);
    return pairs;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
