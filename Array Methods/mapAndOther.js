// this is map

let number = [10, 20, 30, 40, 50];
let a = number.map(function (el, index, array) {
    return el + 2;
})
console.log(a)

// this is filter

let num = [10, 12, 13, 16, 8, 5, 4];
let b = num.filter(function (el, index, array) {
    return el > 10;
})
console.log(b)

// this is reduce

let numerical = [10, 20, 30, 40, 50];
let c = numerical.reduce(function (acc, el, index, array) {
    return acc + el;
})
console.log(c)

// foreach

let numb = [10, 20, 30, 40, 50];
let d = numb.forEach(function (el,index, array) {
    console.log(el*10,el+10,el-10,el/10)
})
