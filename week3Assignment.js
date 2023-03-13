// 1.  Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
var ages = [3, 9, 23, 64, 2, 8, 28, 93];
// 1a.Programmatically subtract the value of the first element in the array from the value in the last element of the array.   
// Do not use numbers to reference the last element, find it programmatically.
// ages[7] – ages[0] is not allowed!
            console.log (ages[ages.length - 1]-ages[0]) 
// 1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
        ages.push(100);
            console.log(ages);
            console.log (ages[ages.length - 1]-ages[0]);
// 1c. Use a loop to iterate through the array and calculate the average age. 
let agesSum = 0
for(let i = 0; i < ages.length;i++){
            console.log("each age: ", ages[i]);
                agesSum += ages[i];}
                let agesAvg = agesSum / ages.length;
            console.log("printing ages average: ", agesAvg);    
// 2.  Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
// 2a. Use a loop to iterate through the array and calculate the average number of letters per name. 
let nameChar = 0
for (let i = 0; i < names.length; i++){
            console.log("Each name: ", names[i]);
            console.log("Each name length : ", names[i].length);
    nameChar += names[i].length;
            console.log("running total length: ", nameChar);
}           console.log("Name char average: ", nameChar / names.length);
// 2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
for (let i = 0; i < names.length; i++){
    ( names[i]);
    let list = names.join(" ");
    console.log(list)
}

// 3.  How do you access the last element of any array?
let array = [1,2,3,4,5];

const lastElement = array.findLast((element) = element => 6);

            console.log(lastElement);

// 4.  How do you access the first element of any array?
            console.log(array[0]);
// 5.  Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

// For example:

// let names = ["Kelly", "Sam", "Kate"];    // starting with this array
// let nameLengths = [5, 3, 4];             // create a new array
let nameLengths = [];
// 6.  Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
for (let i = 0; i < names.length; i++){
            console.log(names[i].length);
    nameLengths.push(names[i].length);
            console.log(nameLengths)
}

// 7.  Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
 function repeatWord(word,n){
            console.log(word.repeat(n));
}   repeatWord("Me", 5)



// 8.  Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the first and the last name separated by a space.
function returnFullName(firstName,lastName){
            console.log(firstName + " " + lastName);
}
returnFullName("Kuhrell", "Brown");
returnFullName("John", "Doe");
// 9.  Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
let array2 = [120, 145, 22, 500]
function greaterThan100(array){
    let total = 0
            console.log(array);
    for(let i = 0; i < array.length; i++){
            console.log(array[i]);
        total = total + array[i];
            console.log("printing running sum: ", total);
    }   
    let avg = total / array.length;
            console.log("Printing average: ", avg); 
    if (avg > 100){
            console.log("true");
    }
}   greaterThan100(array2);
    

// 10.  Write a function that takes an array of numbers and returns the average of all the elements in the array.
function findAvg(array2){
    let array2Sum = 0
            console.log(array2);
    for(let i = 0; i < array2.length; i++){
            console.log(array2[i]);
        array2Sum = array2Sum + array2[i];
            console.log("printing array2 sum: ", array2Sum);
    }   
        let arrayAvg = array2Sum / array2.length;
            console.log("printing average: ", arrayAvg);
    }   
   findAvg(array2);
// 11.  Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
function checkArrayAvg(array,array2){
    let arraySum = 0
    let array2Sum = 0
for(let i = 0; i < array.length;i++){
            (array[i]);
                arraySum = arraySum + array[i];}
                let arrayAvg = arraySum / array.length;
            console.log("printing array average: ", arrayAvg);    
        for(let i = 0; i <array2.length; i++){
            (array2[i]);
                array2Sum = array2Sum + array2[i];}
                let array2Avg = array2Sum / array2.length;
            console.log("printing array2 average: ", array2Avg);
    
            if (arrayAvg > array2Avg){
            console.log("true");
        }else{ 
            console.log("Array 2 has a larger average.")
}
    }checkArrayAvg(array,array2)


// 12.  Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50. 
function willBuyDrink(isHotOutside,moneyInPocket){
    let drinkCost = [10.50];
     if ( isHotOutside == "true" && moneyInPocket > drinkCost ) {
            console.log("true");
     } else {
        
     }      console.log("I dont have enough money or it is not hot outside.")
} willBuyDrink("true",8);

// 13.  Create a function of your own that solves a problem. 
let food = ['eggs','bacon','cereal','waffles']
let foodSum = 0
function chooseBreafeast(breakfeast){
    for (let i = 0; i < food.length; i++){
        ( food[i]);
        let foodList = food.join(" ");
        console.log("The breakfeat options are: ", foodList)
    }    
            console.log("I want " + breakfeast +" for breakfeast.");
}
chooseBreafeast("bacon");
// In comments, write what the function does and why you created it.
// In my function i listed an array of breakfeast choices  and pushed out a statement choosing one of the items from the list to have for breakfeast.