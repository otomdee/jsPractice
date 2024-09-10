function fibs(num) {
    let fibArray = [0, 1];
    for (let i = 2; i <= (num - 1); i++) {
        fibArray.push(fibArray[i - 2] + fibArray[i - 1]);
    }
    return fibArray;
}
