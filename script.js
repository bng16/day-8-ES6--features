let name='Biswajit Nag';
let age= 25;
console.log(`hi Iam ${name} and Iam ${age} years old`);
console.log(`hi Iam ${name}\nIam ${age} years old`);

let arr=[1,2,3,4,5,6]
let [first, second]=arr;
console.log(`first no is ${first} and  second no is ${second}`);


let book={
    bookName: "ullumullu",
    author:"Biswajit Nag",
}

let {bookName, author}=book;
console.log(`${bookName} by ${author}`);

let arr2=[...arr];
arr2.push(...[7,8,9,10,11,12]);
console.log(arr);
console.log(arr2);

function sum(a,b,c,...d){
    let result=a+b+c;
    for(const arg of d){
        result+=arg;
    }
    return result;
}
console.log(sum(1,2,3,4,5,6,7,8,9,10,11))

function product(a,b=1){
    return a*b;
}
console.log(product(6,2));
console.log(product(6));

let name2='biswajit nag';
let age2=22;

let obj2={
    name2,
    age2,
    greet(){
        console.log(`Hi my name is ${this.name2} and my age is ${this.age2}`);
    }
}
console.log(obj2)
obj2.greet();

let name3="name";
let age3="age";

let obj4={

    [name3]:"biswajit nag",
    [age3]:23,
}
console.log(`my name is ${obj4.name} and my age is ${obj4.age}`);