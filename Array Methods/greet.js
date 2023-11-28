let d = new Date();

let a = d.getHours();
let b = d.getMinutes();
let c = d.getSeconds();

console.log(a + ":" + b + ":" + c)

if (a > 0 && a < 12) {
    console.log("good morning 🕗 🌄  ")
}else

if (a > 12 && a < 16) {
    console.log("good afternoon 🕑   ")
}else

if (a > 16 && a < 23) {
    console.log("good evening 🌃 🌆  ")
}