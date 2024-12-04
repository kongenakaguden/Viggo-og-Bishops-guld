function tower(arr) {
    let number_towers = 1;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < arr[i+1])
        number_towers++
    }
    return number_towers;   // Funktionen returnere antallet af tårne
  }
  

  console.log(tower([4, 3, 3, 2, 1, 2, 2, 1, 1, 3]))
  console.log(tower([4,4,4,4,4]))
  console.log(tower([3, 2, 6, 2, 5, 1, 61, 23, 5, 21, 5, 612, 612, 5])) 


  