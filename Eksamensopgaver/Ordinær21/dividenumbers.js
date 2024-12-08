function divide_numbers_in_list(arr){
    let numbers_divided = [];

    for(let i = 0; i < arr.length - 2; i++){
        let result;

        try {
            //Tjek om bde tller og nvner er et tal

            if (typeof arr[i] !== 'number' || typeof arr[i+1] == 'number') { throw new Error(`${arr[i]} is not a number`);
        }

            if (arr[i + 1] === 0) {
            throw new Error (`You are trying to divide by zero`)
        }

        result = arr[i] / arr[i + 1];
    } catch (error) {
        console.log(error.message);
        result = NaN;
    } finally {
        numbers_divided.push(result);
    }
}
    return numbers_divided;
}

let arr = [1, 5, "hest", 14, "trold", 5, 1, 2]

divide_numbers_in_list(arr);