function theCrown(a,b,x,pwd){
let count = 0;
for (let char of pwd){
    if(char === x){
        count++;
    }
}
    return count >= a && count <= b;
}

console.log(theCrown(1, 3, 'a', 'abcde')); 
console.log(theCrown(2, 4, 'b', 'babble'));
console.log(theCrown(2, 4, 'c', 'abc'));
console.log(theCrown(0, 1, 'd', 'abcde'));
console.log(theCrown(1, 3, 'x', 'abcde'));