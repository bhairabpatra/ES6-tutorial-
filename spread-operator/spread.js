const odd = [1,3,5];
const combined = [2,4,6, ...odd];
console.log(combined);

obj1={
    "name":"bhairab",
    "age":30
}
obj2={
    "fee":200000,
    ...obj1
}
console.log(obj2)