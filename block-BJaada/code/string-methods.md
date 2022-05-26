Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`
- parameter: accepts no parameter
-Return: a new string converted into uppercase
- example:
```js
let name = 'john';
name.toUpperCase(); // 'JOHN'
let fullName = 'john deo'
fullName.toUpperCase(); //  'JOHN DEO'
let houseName = 'Starks';
     houseName.toUpperCase(); // 'STARKS' 
```
- `toUpperCase` doesn't accept parameters it returns the value of string converted to uppercase This method does not affect the value of the string itself since JavaScript strings are immutable.

3. `toLowerCase`
- parameter: accepts no parameter
-Return: a new string converted into lowercase
- example:
```js
let name = 'john';
name.toLowerCase(); // 'john'
let fullName = 'john deo'
fullName.toLowerCase(); //  'john deo'
let houseName = 'Starks';
     houseName.toLowerCase(); // 'starks' 
```
- `toLowerCase` doesn't accept parameters it returns the value of string converted to lowercase. This method does not affect the value of the string itself since JavaScript strings are immutable.
4. `trim`
- parameter: accepts no parameter as it is only called using ().
- return: a new string representing string trimmed of the white space from its beginning and end. if there will be no space it will still return the same value in a string.
- example: 
```js
let name = '   john  ';
name.trim(); // 'john'
let fullName = '   john deo   '
fullName.trim(); //  'john deo'
let houseName = '  starks  ';
     houseName.trim(); // 'starks' 
```
-  `trim` method removes whitespace from both start and end of a string without changing the original content and return a new string.
5. `trimEnd`
- parameter: accepts no parameter as it is only called using ().
- return: a new string representing string trimmed of the white space from its  end. if there will be no space it will still return the same value in a string.
- example: 
```js
let name = '   john  ';
name.trimEnd(); // '   john'
let fullName = '   john deo   '
fullName.trimEnd(); //  '    john deo'
let houseName = '  starks  ';
     houseName.trimEnd(); // '   starks' 
```
-  `trimEnd` method removes whitespace from end of a string without changing the original content and return a new string.
6. `trimStart`
- parameter: accepts no parameter as it is only called using ().
- return: a new string representing string trimmed of the white space from its  end. if there will be no space it will still return the same value in a string.
- example: 
```js
let name = '   john  ';
name.trimStart(); // 'john  '
let fullName = '   john deo   '
fullName.trimStart(); //  'john deo   '
let houseName = '  starks  ';
     houseName.trimStart(); // 'starks  ' 
```
-  `trimStart` method removes whitespace from start of a string without changing the original content and return a new string.
7. `concat`
-parameter: (strN) One or more strings to concatenate to str.(string data type)
-return: A new string containing the combined text of the strings provided.( string data type) If the arguments are not of the type string, they are converted to string values before concatenating.
-example:
```js
const str1 = 'Hello';
const str2 = 'World';
const str3 = 'abhishek';
str1.concat(' ', str2); // 'Hello World'

str2.concat(', ', str1); // 'World, Hello'

str3.concat(' ',str1,' ',str2) // 'abhishek Hello World'
```
- `concat` The concat() function concatenates the string arguments to the calling string and returns a new string. Changes to the original string or the returned string don't affect the other.

8. `endsWith`
-parameter: (searchString) The characters to be searched for at the end of str.
- return: true if the given characters are found at the end of the string; otherwise, false.
-example: 
```js
const str1 = 'Cats are the best!';

str1.endsWith('best!'); // true

str1.endsWith('best', 17);// true

const str2 = 'Is this a question?';

str2.endsWith('question');// false
```
- `endsWith`This method lets you determine whether or not a string ends with another string. This method is case-sensitive.returning true or false as appropriate.

9. `includes`
-parameter:(searchString) A string to be searched for within str. The position within the string at which to begin searching for searchString. (Defaults to 0.)
-return: true if the search string is found anywhere within the given string; otherwise, false if not.
-example:
```js
const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

sentence.includes('fox');//true
console.log(`the word "${word}" ${sentence.includes(word) ? 'is': 'is not'} in the sentence`);
console.log(`the "${word}" ${word.includes('fox')? 'is': 'is not'} an animal`);
```
- `includes`method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate.This method lets you determine whether or not a string includes another string.

10. `indexOf`
-parameter: Substring to search for if there will be agruments it is undefined and returns 0.if substring  is not found in the string it will return -1.
-return: The index of the first occurrence of searchString found, or -1 if not found.
-example:
```js
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

const searchTerm = 'dog';
let indexOfFirst = paragraph.indexOf(searchTerm);
indesOfFirst // 40;

paragraph.indexOf('barked'); //56

paragraph.indexOf('', 12); //12

paragraph.indexOf('', 200); //83

searchTerm.indexOf('b'); // -1
```
- `indexOf`The indexOf() method, given one argument: a substring to search for, searches the entire calling string, and returns the index of the first occurrence of the specified substring. Given a second argument: a number, the method returns the first occurrence of the specified substring at an index greater than or equal to the specified number.


11. `lastIndexOf`
-parameter: Substring to search for if there will be agruments it is undefined and returns 0.if substring  is not found in the string it will return -1.
-return: The index of the first occurrence of searchString found, or -1 if not found.
-example:
```js
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

const searchTerm = 'dog';
let lastindexOfFirst = paragraph.indexOf(searchTerm);

lastindexOfFirst // 40;

paragraph.lastIndexOf('barked'); //56

paragraph.lastIndexOf('l'); //78

paragraph.lastIndexOf('dog'); // 52

searchTerm.lastIndexOf('b'); // -1
```
- The `lastIndexOf` method, given one argument: a substring to search for, searches the entire calling string, and returns the index of the last occurrence of the specified substring. Given a second argument: a number, the method returns the last occurrence of the specified substring at an index less than or equal to the specified number.
12. `padEnd`
-parameter: (targetLength) The length of the resulting string once the current str has been padded. If the value is lower than str.length, the current string will be returned as-is.
-return: A String of the specified targetLength with the padString applied at the end of the current str.
-example: 
```js
const str1 = 'Breaded Mushrooms';
const str2 = '200';

str1.padEnd('40', 'm'); // 'Breaded Mushroomsmmmmmmmmmmmmmmmmmmmmmmm'
str2.padEnd(5); // '200  '
str2.padEnd('10','0');// '2000000000'
```
- `padEnd`method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of the current string.

13. `padStart`

-parameter: (targetLength) The length of the resulting string once the current str has been padded. If the value is lower than str.length, the current string will be returned as-is.
-return: A String of the specified targetLength with the padString applied at the start of the current str.
-example: 
```js
const str1 = 'Breaded Mushrooms';
const str2 = '200';

str1.padStart('40', 'm'); // 'mmmmmmmmmmmmmmmmmmmmmmmBreaded Mushrooms'
str2.padStart(5); // '  200'
str2.padStart('10','0'); // '0000000200'
```
- `padStart` method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.


14. `repeat`
-parameter: (count) An integer between 0 and +Infinity, indicating the number of times to repeat the string.
-return: A new string containing the specified number of copies of the given string.
-Exceptions
RangeError: repeat count must be non-negative.
RangeError: repeat count must be less than infinity and not overflow maximum string size.
-example:
```js
const chorus = 'Because I\'m happy.';

chorus.repeat(4); // "Because I'm happy.Because I'm happy.Because I'm happy.Because I'm happy."

let username = chorus;

username.repeat(5); // "Because I'm happy.Because I'm happy.Because I'm happy.Because I'm happy.Because I'm happy."
```
- `repeat` method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

15. `replace`

-parameter: (substr) The match or matches are replaced with newSubstr or the value returned by the specified replacerFunction.A string that is to be replaced by newSubstr. It is treated as a literal string and is not interpreted as a regular expression. Only the first occurrence will be replaced.

-return: A new string, with some or all matches of a pattern replaced by a replacement. If pattern is a string, only the first occurrence will be replaced.

-example:
```js
const chorus = 'Because I\'m happy.';

chorus.replace('happy','unhappy'); // "Because I'm unhappy."

let username = chorus;

username.replace('a','x'); // "Becxuse I'm happy."
```
- `replace` This method does not change the calling String object. It returns a new string with some or all matches of a pattern replaced by a replacement

16. `slice`

-parameter: (beginIndex) The zero-based index at which to begin extraction. (number data type)
            (endIndex) The index of the first character to exclude from the returned substring.

-return: A new string containing the extracted section of the string.(string data type)

-example:
```js
const chorus = 'Because I\'m happy.';

chorus.slice(4 , 10); // "use I'"

let username = chorus;

username.slice(6, 50); //"e I'm happy."
```
- The `slice`() method extracts a section of a string and returns it as a new string, without modifying the original string.

17. `split`

-parameter: (separator) The pattern describing where each split should occur. The separator can be a simple string or it can be a regular expression

-return: An Array of strings, split at each point where the separator occurs in the given string.

-example:
```js
const chorus = 'Because I\'m happy.';

chorus.split(' '); // ['Because', "I'm", 'happy.']

const str = 'The quick brown fox jumps over the lazy dog.';

 str.split(" ");//  ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog.']

 str.split(); // ['The quick brown fox jumps over the lazy dog.']
```
- The `split`() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array. The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.

18. `substring`

-parameter: (indexStart) The index of the first character to include in the returned substring. (number data type)
            (indexEnd) The index of the first character to exclude from the returned substring.


-return: A new string containing the specified part of the given string.

-example:
```js
const chorus = 'Because I\'m happy.';

chorus.substring(3, 10); // "ause I'"

const str = 'The quick brown fox jumps over the lazy dog.';

 str.substring(20, 4);// 'quick brown fox '

 str.substring(6); // 'ick brown fox jumps over the lazy dog.'
```
- The `split`()  method returns the part of the string between the start and end indexes, or to the end of the string.

there is a little difference b/w substrin and slice is that if we provide number with (20,4) in substring it wii by deafult start with accesending order while in slice it doesn't work that way other diiferences id if we put (20, Nan) in substring NaN is considered a zero.
