// finding items in an array fruits.slice(-1)- last item in an array
//
let fruits = ["mango", "Banana","Orange","KIwi", "Pawpaw"];

let arr = new Array(20,30);

console.log({fruits});
console.log({arr});

fruits[1]=2;
console.log({fruits});

console.log("last item", fruits.slice(-1));
console.log("several items", fruits.slice[0,4]);
// adding and removing items at the end of an array[.concat is adding two arrays]
let addLast= fruits.push("Apple");
console.log({fruits});
//add an item at the start of an array
let addStart= fruits.unshift("Pineapple");
console.log({fruits});
//remove the first item at the end of an array
let removeLast= fruits.pop();
console.log({fruits});
// remove item at the start of an array
let removeFirst=fruits.shift();
console.log({fruits});

let newFRuits=fruits.push(["Tomato", "pear"]);
console.log([fruits]);
// using reduce to do arithmetic operations
let items=[20,30,40,50,60];
let add = items.reduce((acc, cur)=> acc+cur);
console.log({add});

// mapping using arithmetic operations(*)
let multiply = items.map(item=>item*2);
console.log({multiply});

// * each items  by itself in an array using mmapping 
let square = [];
let total=0;

items.forEach(items=>{
   const multiple  = (items* items);
   console.log(multiple);
   square.push(multiple);
   total=+items
});
console.log({square});
console.log({total});

//destucturing ...-rest(spread operator)

let [num1, num2, num3,...rest]= items;
console.log({num1});
console.log({num2});
console.log({num3});
console.log({rest});

