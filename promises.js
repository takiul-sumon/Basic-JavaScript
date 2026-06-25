setTimeout(() => {
    console.log("Time Time Time2")
}, 2);

setTimeout(() => {
    console.log("Time Time Time1")
}, 1);

const fetchData = callback => {
    setTimeout(() => {
        console.log("First");
    }, 1000);
}

setTimeout(() => {
    fetchData((text) => console.log(text)); console.log("Second");

}, 2000);

console.log('hello');
console.log('BD');