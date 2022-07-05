import getPrecedes from '../infraestructure/services/precedes';
const bubbleSort = async (arr: string[]): Promise<string[]> => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = arr.length - 1; j >= i; j--) {
      // if (arr[j] < arr[j - 1]) {
      const goodOrder = await getPrecedes([arr[j - 1], arr[j]]);
      console.log('result goodOrder >>', goodOrder);
      if (!goodOrder) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } else {
        j--;
        // break;
      }
    }
  }
  return arr;
};

export default bubbleSort;
