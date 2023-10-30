function findMaxNumber(arr) {
    // Filter out non-number elements from the array
    const numbers = arr.filter(item => typeof item === 'number');
  
    if (numbers.length === 0) {
      // Handle the case where there are no numbers in the array
      return undefined;
    }
  
    // Use the spread operator to apply Math.max to the array of numbers
    return Math.max(...numbers);
  }
  
  // Example usage:
  const array = [2, 5, 'hello', 8, 'world', 10, 1];
  const maxNumber = findMaxNumber(array);
  console.log('Maximum number:', maxNumber); // Output: Maximum number: 10