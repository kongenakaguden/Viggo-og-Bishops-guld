// print an array

function byt(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp

}
function print_array(a) {
    console.log("["+a.toString()+"]")
}


let a = [2, 1, 3];
print_array(a);
byt(a, 0, 1);
print_array(a);

function bubblesort(a){
    // Loop igennem array for at få værdierne for i
    for (let i = 0; i < a.length; i++){
        //Loop igennem for at få værdierne for j, sådan vi har værdier at sammenligne med
        for (let j = 0; j < a.length  - 1; j++){
            if (a[j] > a[j + 1]) {
                let temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp
            } 
            console.log(a)
            
        }
    }
}

let b = [5, 4, 1, 2, 3]
bubblesort(b);