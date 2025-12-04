let data={
    name:"hari",
    age:19,
    department:"AIML",
    marks:[70,78,92]
};
//printing all values
console.log(data);

//changing the name
data.name="Gokul";
console.log(data);

//Adding new property
let updated={
    ...data,
    percentage:70

};
console.log(updated);

//printing highest mark
let highestmark=Math.max(...data.marks);
console.log("highest mark:",highestmark);