Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`
   - Parameter: (separator) Specifies a string to separate each pair of adjacent elements of the array. The separator is converted to a string if necessary. If omitted, the array elements are separated with a comma (","). If separator is an empty string, all elements are joined without any characters in between them.
   - Return: A string with all array elements joined. If arr.length is 0, the empty string is returned.
   - Example:
     ```js
     const elements = ['Fire', 'Air', 'Water'];

     console.log(elements.join()); // "Fire,Air,Water"


    console.log(elements.join('')); //  "FireAirWater"

    console.log(elements.join('-')); // "Fire-Air-Water"
     ```
   - The `join`() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

3. `flat`
- Parameter: (depth(number)) The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
   - Return: A new array with the sub-array elements concatenated into it.
     ```js
    const arr1 = [0, 1, 2, [3, 4]];

    console.log(arr1.flat()); //  [0, 1, 2, 3, 4]

    const arr2 = [0, 1, 2, [[[3, 4]]]];

     console.log(arr2.flat(2)); //  [0, 1, 2, [3, 4]]
     console.log(arr2.flat(3)) // [0, 1, 2, 3, 4]
     ```
   - The `flat`() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
   - no it doesn't mutate the original array.

4. `push`
   - Parameter: ('elementN') The element(s) to add to the end of the array.
   - Return: The new length property of the object upon which the method was called.
   - Example:
     ```js
     const animals = ['pigs', 'goats', 'sheep'];

     const count = animals.push('cows');
     console.log(count); // 4
     console.log(animals); // ["pigs", "goats", "sheep", "cows"]

     animals.push('chickens', 'cats', 'dogs');
     console.log(animals); // ['pigs', 'goats', 'sheep', 'cows', 'chickens', 'cats', 'dog

     ```
   - `push` method adds one or more elements to the end of an array and returns the new length of the array.
   - it does mutate the original array

5. `indexOf`
 - Parameter: (searchElement) Element to locate in the array.
               (fromIndex)  if the provided index is negative, the array is still searched from front to back. If the provided index is 0, then the whole array will be searched. Default: 0 
   - Return: The first index of the element in the array; -1 if not found.
   - Example:
     ```js
     const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

     console.log(beasts.indexOf('bison'));// 1

     // start from index 2
     console.log(beasts.indexOf('bison', 2));// 4
      console.log(beasts.indexOf('giraffe')); // -1
     ```
   - `indexOf` method returns the first index at which a given element can be found in the array, or -1 if it is not present.

6. `lastIndexOf`
   - Parameter:  (searchElement) Element to locate in the array.
                 (fromIndex) The position in the array at which to start searching backwards. Defaults to the array's length minus one (arr.length - 1), causing the whole array to be searched.
   - Return: The last index of the element in the array; -1 if not found.
   - Example:
     ```js
     const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

     console.log(animals.lastIndexOf('Dodo'));// 3

    console.log(animals.lastIndexOf('Tiger'));// 1
    console.log(animals.lastIndexOf('Penguin')); // 2
      console.log(animals.lastIndexOf(2)); // -1
     ```
   - `lastIndexOf` method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

7. `includes`
   - Parameter:  (from index) The position in this array at which to begin searching for searchElement.The first element to be searched is found at             fromIndex for positive values of fromIndex, or for negative values of fromIndex
   - Return: A boolean value which is true if the value searchElement is found within the array.Values of zero are all considered to be equal, regardless of sign.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.includes(4); // false
     let sentanceArray = 'A quick brown fox jumped over a lazy';
     sentanceArray.includes('dog'); // false
     let colors = ['red', 'green', 'blue'];
     colors.includes('green', 'red'); //  true
     ```
   - `includes` method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
   - No it does not mutate the original array

8. `reverse`
   - Parameter: accepts no parameter only called ()
   - Return: The reversed array.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.reverse(); //[3,2,1]
     let sentanceArray = ["A", "quick", "brown", "fox", "jumped", "over", "a", "lazy"];
     sentanceArray.reverse(); //['lazy', 'a', 'over', 'jumped', 'fox', 'brown', 'quick', 'A']
     let colors = ['red', 'green', 'blue'];
     colors.reverse(); //  ['blue', 'green', 'red']
     ```
   - `reverse` method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
   -  it does mutate the original array

9. `every`
- Parameter: it accepts call back function. A function to test for each element. 
   - Return: true if the callbackFn function returns a truthy value for every array element. Otherwise, false.
   - Example:
     ```js
     let numbers = [1, 2, 3,4,5,6,7,8,9,14,18];
     let ret =  numbers.every(function(number) {
       return number > 0;
     });
     console.log(ret); // true
     let ret =  numbers.every(function(element, index, array ) {
       return element > 0, index, array;
     });
     console.log(ret); // true
     ```
   - `every`method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
   - No it does not mutate the original array

10. `shift`
- Parameter: shift()
   - Return: The removed element from the array; undefined if the array is empty.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.shift(); //1
              // numbers //  (2) [2, 3]                  
    let sentanceArray = ["A", "quick", "brown", "fox", "jumped", "over", "a", "lazy"];
     sentanceArray.shift(); // 'A'
     let colors = ['red', 'green', 'blue'];
     colors.shift(); // 'red'
     ```
   - `shift` a method removes the first element from an array and returns that removed element. This method changes the length of the array.
   - it does  mutate the original array

11. `splice`
- Parameter:  (deleteCount) An integer indicating the number of elements in the array to remove from start.
   - Return: An array containing the deleted elements.If only one element is removed, an array of one element is returned.If no elements are removed, an empty array is returned.
     ```js
     const months = ['Jan', 'March', 'April', 'June'];
     months.splice(1, 0, 'Feb');
     // inserts at index 1
    console.log(months);
    // Array ["Jan", "Feb", "March", "April", "June"]

    months.splice(4, 1, 'May');
    // replaces 1 element at index 4
    console.log(months);
   //  Array ["Jan", "Feb", "March", "April", "May"]
     ```
   - `splice` method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice().
   -  it does  mutate the original array

12. `find`
   - Parameter: (callbackFn, element, index, array) The callback must return a truthy value to indicate a matching element has been found.
   - Return: The first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.
   - Example:
     ```js
     let numbers = [1, 2, 3,4,5,8,6,10];
     function isTwo(num) {
       return num === 2
     }
     let found = numbers.find(isTwo)
     console.log(found) // 2 
      function isTwo(num) {
       return num === 20
     }
     console.log(found)  // undefined
     ```
   - `find` method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

13. `unshift`
- Parameter:  (elementN) The elements to add to the front of the arr.
   - Return: The new length property of the object upon which the method was called.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.unshift(4); // 4, // numbers = [4, 1, 2, 3]
     let sentanceArray = ['A', 'quick', 'brown', 'fox', 'jumped', 'over', 'a', 'lazy'];
     sentanceArray.unshift('tom', 'is', 'a'); // 11n  // sentence array = ['tom', 'is', 'a', 'A', 'quick', 'brown', 'fox', 'jumped', 'over', 'a', 'lazy']
     let colors = ['red', 'green', 'blue'];
     colors.unshift('black'); // [4] ['black', 'red', 'green', 'blue']
     ```
   - `unshift` method adds one or more elements to the beginning of an array and returns the new length of the array.
   - it does mutate the original array

14. `findIndex`
- Parameter: (callbackFn, element, index, array) A function to execute on each value in the array until the function returns true, indicating that the 
             satisfying element was found.
   - Return: The index of the first element in the array that passes the test. Otherwise, -1.

   - Example:
     ```js
       let numbers = [1, 2, 3,4,5,8,6,10];
     function isTwo(num) {
       return num === 2
     }
     let foundindex = numbers.findIndex(isTwo)
     console.log(foundindex) // 1 
      function isTwo(num) {
       return num === 20
     }
     console.log(foundindex) // -1
     ```
   - `findIndex` method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.

15. `filter`
- Parameter: (callbackFn, element, index, array) Function is a predicate, to test each element of the array. Return a value that coerces to true to keep the element, or to false otherwise.

   - Return: A new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.
   - Example:
     ```js
     const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

    const result = words.filter(word => word.length > 6);

      console.log(result);
      // Array ["exuberant", "destruction", "present"]
     ```
   - `filter` method creates a new array with all elements that pass the test implemented by the provided function.

   - No it does not mutate the original array

16. `flat`
- Parameter:  (depth) The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
   - Return: A new array with the sub-array elements concatenated into it.
   - Example:
     ```js
     const arr1 = [0, 1, 2, [3, 4]];

     console.log(arr1.flat());
       //  [0, 1, 2, 3, 4]

     const arr2 = [0, 1, 2, [[[3, 4]]]];

    console.log(arr2.flat(2));
     // e [0, 1, 2, [3, 4]]
     ```
   - `flat`  method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
   - No it does not mutate the original array

17. `forEach`
     - Parameter:(callbackFn)Function to execute on each element.The function is called with the following arguments:
    (element) The current element being processed in the array.

    (index) The index of element in the array.

    (array) The array forEach() was called upon.
   - Return: undefined.
   - Example:
     ```js
    const array1 = ['a', 'b', 'c'];

     array1.forEach(element => console.log(element));
     // a
     // b
     // c
     ```
   - `forEach` method executes a provided function once for each array element.
   - No it does not mutate the original array
18. `map`
   - Parameter:(callbackFn)Function to execute on each element.The function is called with the following arguments:
    (element) The current element being processed in the array.

    (index) The index of element in the array.

    (array) The array forEach() was called upon.
   - Return: A new array with each element being the result of the callback function.
   - Example:
     ```js
     const array1 = [1, 4, 9, 16];

     // pass a function to map
     const map1 = array1.map(x => x * 2);

    console.log(map1);
    // expected output: Array [2, 8, 18, 32]
     ```
   - `map` method creates a new array populated with the results of calling a provided function on every element in the calling array.
   - No it does not mutate the original array

19. `pop`
- Parameter: pop() no parameters
   - Return: The removed element from the array; undefined if the array is empty.
   - Example:
     ```js
     const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

    console.log(plants.pop());
    // expected output: "tomato"

    console.log(plants);
    // expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

    plants.pop();

    console.log(plants);
    // expected output: Array ["broccoli", "cauliflower", "cabbage"]  
     ```
   - `pop` method removes the last element from an array and returns that element. This method changes the length of the array.
   - it does  mutate the original array
20. `reduce`
- Parameter: {callbackFn} previousValue: the value resulting from the previous call to callbackFn. On first call, initialValue if specified, otherwise the value of array[0].
   - Return: The value that results from running the "reducer" callback function to completion over the entire array.
   - Example:
     ```js
     const array1 = [1, 2, 3, 4];

   // 0 + 1 + 2 + 3 + 4
    const initialValue = 0;
    const sumWithInitial = array1.reduce(
   (previousValue, currentValue) => previousValue + currentValue,
    initialValue
   );

    console.log(sumWithInitial);
     // expected output: 10

     ```
   - `reduce` method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
   - No it does not mutate the original array

21. `slice`
  - Parameter: (start, end ) f start is undefined, slice starts from the index 0.
     If start is greater than the index range of the sequence, an empty array is returned.If end is omitted, slice extracts through the end of the sequence (arr.length).If end is greater than the length of the sequence, slice extracts through to the end of the sequence (arr.length).
   - Return: A new array containing the extracted elements.
   - Example:
     ```js
     const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
    console.log(animals.slice(2));
    // expected output: Array ["camel", "duck", "elephant"]
    console.log(animals.slice(2, 4));
    // expected output: Array ["camel", "duck"]
    console.log(animals.slice(1, 5));
   // expected output: Array ["bison", "camel", "duck", "elephant"]
    console.log(animals.slice(-2));
    // expected output: Array ["duck", "elephant"]
  console.log(animals.slice(2, -1));
   // expected output: Array ["camel", "duck"]
   console.log(animals.slice());
   // expected output: Array ["ant", "bison", "camel", "duck", "elephant"]  
     ```
   - `slice` method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
   - No it does not mutate the original array
22. `some`
- Parameter: (callbackFn)A function to test for each element.
   - Return: true if the callback function returns a truthy value for at least one element in the array. Otherwise, false.
   - Example:
     ```js
     const array = [1, 2, 3, 4, 5];

    // checks whether an element is even
    const even = (element) => element % 2 === 0;

   console.log(array.some(even));
   // expected output: true
     ```
   - `some` method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
   - No it does not mutate the original array
