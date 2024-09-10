function fibs(num) {
    let fibArray = [0, 1];
    for (let i = 2; i <= (num - 1); i++) {
        fibArray.push(fibArray[i - 2] + fibArray[i - 1]);
    }
    return fibArray;
}

function fibsRec(num) {
    let position = num;
    if (position === 2) {
        return [0, 1];
    }
    else {
        position--;
        fibsArray = fibsRec(position);
        fibsArray.push(fibsArray[fibsArray.length - 1] + fibsArray[fibsArray.length - 2]);
        return fibsArray;
    }
}

console.log(fibsRec(8));