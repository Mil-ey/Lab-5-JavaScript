let B = [1,2,3,4,5,6,7,8,9,10]; 
findMax = (B) => {
    let max = B[0];
    for (let i = 0; i < B.length; i++) {
        if (B[i] > max) {
            max = B[i];
        }
    }
    return max;
}
reverseArray = (B) => {
    let reversedArray = [];
    for (let i = B.length - 1; i >= 0; i--) {
        reversedArray.push(B[i]);
    }
    return reversedArray;
}


export function findMax(B) {
    return findMax(B);
}
export function reverseArray(B) {
    return reverseArray(B);
}

