//Task 1
/*
დაწერეთ ფუნქცია რომელსაც გადაეცემა მასივი და ეს ფუნქცია დაგვიბრუნებს
ამ მასივში ყველაზე ხშირად გამოერებად ელემენტს და გამეორების რაოდენობას
მაგალითად
arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
პროგრამამ უნდა დაგვიბრუნოს 'a - 5'
უმჯობესია გამოიყენოთ reduce მეთოდი
*/

/* reduce() - ით ვერ გავაკეთე */

arr1=[3,"a","a","a",2,3,"a",3,"a",2,4,9,3];

let firstReduce = arr1.reduce(
    (acc,ele) => {
    if(ele in acc){
        acc[ele]++
    }else{
        acc[ele] = 1
    }
    return acc 
},{})

console.log(firstReduce)

/*
Task 2 : 
დაწერეთ ფუნქცია რომელიც იღებს რაღაც ციფრების მიმდევრობას (სტრინგად ან რიცხვად) პარამეტრად , ჩასვით ტირეები (-) ყოველ ორ ლუწ რიცხვს შორის. 
მაგალითად 025468 უნდა დაგვიბრუნდეს როგორც 0-254-6-8
*/

let numArray = [0,2,5,4,6,8]

function usDash (arr){
    for(let i = 0 ; i < arr.length-1 ; i++){
        if(arr[i] % 2 == 0 && arr[i+1] % 2 == 0){
          arr[i] += "-";
        }
    }
    let dashedArray = arr.join("");
    return dashedArray;
}
console.log(usDash(numArray))

/*
Task 3 : 
დაწერეთ ფუნქცია რომელიც იღებს ორ მასივს და უნდა დაგვიბრუნოს 
ამ ორი მასივის დამერჯილი მასივი , გაერთიანებული , არადუბლირებული მნიშვნელობებით .
let array1 = [1, 2, 3];
let array2 = [2, 30, 1];
შედეგი უნდა იყოს : [1,2,3,30]
*/

let array1 = [1, 2, 3];
let array2 = [2, 30, 1];

function margeArrays (arr1,arr2){
    let arr = arr1.concat(arr2);
    let massive = [];
    for(let i = 0; i < arr.length ; i++){
        if(massive.indexOf(arr[i]) === -1){
            massive.push(arr[i])
        }
    }
    console.log(massive);
}

margeArrays(array1,array2)

/*
Task 4 : 
ფუნქციამ უნდა დააბრუნოს მასივი ისე როგორც კომენტარშია ნაჩვენები . 
გამოიყენეთ map
*/

function readyToPutInTheDOM(arr){
    return arr.map( (celebrity) => {
        return `<h1>${celebrity.name}</h1><h2>${celebrity.age}</h2>`
    })
  }

    const CELEBRITY =[
    {name: "Angelina Jolie", age: 80 },
    {name: "Eric Jones", age: 2 },
    {name: "Paris Hilton", age: 5 },
    {name: "Kayne West", age: 16 },
    {name: "Bob Ziroll", age: 100 }
    ]

  console.log(readyToPutInTheDOM(CELEBRITY)); 

/* Task 5 */
  /* 
  გვაქვს ფუნქცია sumOfDifferences(arr) , რომელიც იღებს მასივს . 
  პროგრამამ მასივი უნდა დაალაგოს კლებადობით და შემდეგ უნდა დაგვითვალოს
  მეზობელი ელემენტების სხვაობების ჯამი . 
  მაგ : [2, 1, 10]  -->  9 , რაც ნიშნავს დავალაგებდით [10,2,1] კლებადად
  შემდეგ  (10-2) + (2-1) = 8 + 1 = 9

  სორტირების ფუნქცია დაწეროთ თქვენით ან გამოიყენოთ Array.sort() მეთოდი რომელიც
  პარამეტრად იღებს compareFn ფუნქციას , შედარების ქოლბექს .
  */

let arr = [2, 1, 10 ,4,6];

function sumOfDifferences(arr) {
    let sortedArray =[];
    while(arr.length!==0){
        sortedArray.push(Math.max(...arr));
        arr.splice(arr.indexOf(Math.max(...arr)), 1);
    }
    sum = 0;
    for(let i = 0; i < sortedArray.length-1; i++) {
        sum += sortedArray[i] - sortedArray[i+1]
    }
    console.log(sum,sortedArray);
}
sumOfDifferences(arr);



let arr1 = [2, 1, 10 ,4,6];
const EASYWAY = (maxMinDifference) => Math.max(...maxMinDifference) - Math.min(...maxMinDifference);
console.log(EASYWAY(arr1))