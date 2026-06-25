const hobbies = ['Riding', 'Singing'];

console.log(hobbies.map(hobby=>"Hobbies are "+hobby));

const coppiedHobbies=[...hobbies];
console.log(coppiedHobbies);


const array= (...args)=>{
    return args;
}
console.log(array(1,2,3,4));