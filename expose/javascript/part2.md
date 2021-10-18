1. 3 because the length of prices is 3 and the for loop iterator i add up to 3.
2. 150; Because variable discountedPrice has been reassigned 3 times in the for loop and the last assignment is 300*0.5 which is 150
3. 150; Because varibale finalPrice has been reassigned in the for loop and rhe last assignment is rounding the discountedPrice which is 150
4. 50, 100, 150; It will return the discounted list which is created and pushed to by the for loop 3 times to add the different final prices.
5. error; Because `let i` can only be accessed within the block it is defined in. `console.log(i)` is not in the for loop block.
6. error; Because `let discountedPrice` can only be accessed within the block it is defined in. `console.log(discountedPrice)` is not in the for loop block.
7. 150; Because `let finalPrice` is in the same discountPrices block with `finalPrice=Math.round(discountedPrice*100)/100` and `console.log(finalPrice)`. And finalPrice has been reassigned to 150 in the last iteration of for loop.
8. 50, 100, 150; It will return the discounted list which is created and pushed to by the for loop 3 times to add the different final prices.
9. error; Because `let i` can only be accessed within the block it is defined in. `console.log(i)` is not in the for loop block.
10. 3; Because variable length has been assigned to `prices.length` which is 3. and it is const variable so it would not change in the program
11. 50, 100, 150; It will return the discounted list which is created and pushed to by the for loop 3 times to add the different discounted prices.
12.  
    1.  `student.name`
    2.  `student["Grad Year"]`
    3.  `student.greeting()`
    4.  `student["Favorite Teacher"].name`
    5.  `student.courseLoad[0]`
13. 
    1.  '3'+2='32'; the + operator is used for both numeric addition and string concatenation. JS converts 2 to string and concatenates the 2 stings
    2.  '3'-2=1; - operator in JS converts '3' to ineger and did the numeric subtraction
    3.  3+null=3; JS converts null to 0 and did the numeric addition
    4.  '3'+null=3null; JS maps null to string datatype and concatenates the string
    5.  true+3=4; JS converts true to 1 and did the numeric addition
    6.  false+null=0; JS converts both false and null to 0 and did the numeric addition
    7.  '3'+undefined=3undefined; JS converts undefined to string and concatenates the 2 strings
    8.  '3'-undefined=NaN; undefined is not a valid number and JS  could not do the convertion therefore returns NaN=Not a Number
14. 
    1. '2'>1=true; JS converts '2' to integer and compares 2 > 1 so it returns true
    2. '2'<'12'=false; When comparing two strings, JS compares in alphabetical order so '2' comes before '12'
    3.  2=='2'=true; JS converts '2' to integer and 2 == 2 returns true
    4.  2==='2'=false; In strict equality operator two different types of data are always different so it returns false
    5.  true == 2 =false; JS maps true to 1 and 1 does not equal to 2 therefore it returns false
    6.  true===Boolean(2)=true; Boolean function returns positive numbers as true and as a boolean data type. Therefore true===true returns true.
15. euqality operator `==` does not care about the types of data. It attempts to convert and compare datas of different types. Whereas Strict equality operator`===` checks the types of datas. It always considers operands of different types to be different.
16. see [part2-question16.js](part2-question16.js)
17. 2,4,6; the function first called the modifyArray function and pass in array[1,2,3] and a callback function `doSomething` in the as a parameter. Then in the modifyArray function create an array list `newArr`. Then use a for loop to iterate through the array. Then in the push to array function, it calls the callback function `doSomething` and pass in a integer in the array. `doSomething` returns the integer * 2 and the result gets pushed into the `newArr`. It does this for 3 times in the for loop then it returns the new array list with 2,4,6.
18. see [part2-question18.js](part2-question18.js)
19. 1 4 3 2; Because 2 was delayed for 1 second and although 3 was delayed for 0 second, it was placed on a queue which would be execute at the next opportunity, not immediately. Therefore 4 comes after 1 in this function then 3 and 2 with a delay.