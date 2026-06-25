// console.log("Hello World");

// const name="sumon";
// console.log(name);

// function assignName(name){
//     return ("Hello This is" + name+
//         ". I'm a software engineer and I love to code."
//     );
// }


// for(let i=0; i<5; i++){
//     console.log("Hello World");
// }

// let text="This is a text";

// console.log(text);

// console.log(assignName(name));
//  let sumon="myName";
//  console.log(sumon);


const cars=["BMW","Lamborgini","Toyota"];
console.log(cars);

const updatedCars=[];


let x=5; 

function assignValue(){
    const x=10;
}
assignValue();
console.log(x);

var result=function(cars,x){
    return {
        cars,x
    }
}

const add=(a,b)=> a+b;
console.log(add(5,10));
console.log(result(cars,x));


const person={
    'name':'takiul',
    'age':25,
    printThis(){
        console.log("hello is this" +this.name+"and age is "+this.age);
    }
}

person.printThis();
