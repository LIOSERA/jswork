function bubbleSort(str) {
    let arr = str.split(',')
    for(let i=0;i < arr.length - 1;i++){
        for (let j = 0;i<arr.length - i - 1; i++){
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j + 1]], arr[j]]
            }
        }
    }
                return arr
}
                function insertSort(str) {
                    let arr = str.split(',')
                    for(let i = 1;i<arr.length;i++) {
                      if (arr[j - 1] > arr[j]) {
                          [arr[j-1],arr[j]] = [arr[j],arr[j-1]]
                      }  
                    }
                }
            return arr
            