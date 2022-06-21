const bubbleSort = (arr: number[]): number[] => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = arr.length - 1; j > i; j--) {
      if (arr[j] < arr[j - 1]) {
        //swap the numbers
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
    console.log('array ', arr);
  }
  return arr;
};

export default bubbleSort;
