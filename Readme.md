--------------------------------------------------------------------
------- 1. What is the difference between var, let, and const? -----
--------------------------------------------------------------------
| var -> 
         * It is a function scope variable.
         * It can be re-declared, which makes different types of problems.
         * It value can be update.
         * It is hoisted and initialized with the value undefined. 

| let -> 
         * It is a block scope variable.
         * It is not pssible to re-declared in the same scope.
         * It value can be update as like as 'var'.

| const -> 
         * It is also a block scope variable as like as 'let'.
         * It can not be re-declared!
         * It value can not be update.

------------------------------------------------------------------------
------------------ 2. What is the spread operator (...)? ---------------
------------------------------------------------------------------------
| The spread operator (...) is used to expand or copy elements of arrays
  or object. 
  *** For Example:
                 const arr1 = [1,2,3];
                 const arr2 = [...arr1,4,5];

                 console.log(arr2);
                 Output: [1,2,3,4,5]

    * Here arr1 expand to [1,2,3,4,5]  
    * It can copy array
    * It can marge array
    * It can copy object
    * It can create a array slicing a string.    

----------------------------------------------------------------------------------
---------------- 3. Difference between map(), filter(), and forEach() ------------
----------------------------------------------------------------------------------
| map() -> 
         * It creates a new array applying a condition on each element of a array.
         *** For Example: 
                        const numbers = [1,2,3];

                        const doubled = numbers.map(num => num * 2);

                        console.log(doubled);
                        Output: [2,4,6]    
        * Here the conditon 'num*2' apply on each element of 'number' array.                

| filter() -> 
         * It creates a new array with the elements of an array, which elements of
           the array satisfy the given condition.
         *** For Example: 
                        const numbers = [1,2,3,4,5];

                        const even = numbers.filter(num => num % 2 === 0);

                        console.log(even);
                        Output: [2,4]          
        * Here the condition 'num % 2 === 0' satisfy only the two 
          elements '2, 4'.So the filter() method creates a new array with the elements.

| forEach() ->
        * It is used for looping on an array.It not create a new array
          it just return element of an array one by one.
        *** For Example: 
                        const numbers = [1,2,3];

                        numbers.forEach(num => {
                          console.log(num);
                        });      
                        Output: 1
                                2
                                3
        * Here the forEach() method only returns the
          element of the array one by one.  

------------------------------------------------------------------------
------------------- 4. What is an arrow function? ----------------------
------------------------------------------------------------------------
| An arrow function is a shorter and modern way to write functions in
  JavaScript.        
  *** For Example: 
                function add(a,b){
                return a + b;
                }   

                * the function canbe written as-

                const add = (a,b) => {
                return a + b;
                }     

                * It has a shorter form which is used to write function when the return
                  statement are a single line statement.

                  const add = (a,b) => a + b;         

------------------------------------------------------------------------------------------------------------
------------------------------------ 5. What are template literals? ----------------------------------------
------------------------------------------------------------------------------------------------------------    
| Template literals are a feature in JavaScript used to create strings more easily and dynamically. They use
  backticks (``) instead of single' 'or double" " quotes. 
  * It is a most powerfull feature of JS in ES6. 
  * By using the template literals it is posible to write multiline string.
  * Template literals allow to change data dynamically. to show data dynamically ${} is used.
  *** For Example: 
                const name = "Shakib";
                const age = 20;

                console.log(`My name is ${name} and I am ${age} years old`);

                Output: My name is Shakib and I am 20 years old

  * Here the name 'shakib' and the age '20' changed dynamically!                

