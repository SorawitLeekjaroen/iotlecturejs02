// control statement (loop/iteration/repetition) Ep.5
// ทำงานเดิมๆ ซ้ำ
//------------------------------
// forEach ใช้กับ array
let data1 = [10, 20, 30, 40, 50]

//(????) => {??????} เรียกว่า Arrow function

data1.forEach((iot)=>{
    console.log(iot * 100);
})

// for..of ใช้กับ array   
for (let iot of data1){
    console.log(iot * 100);
}

console.log('-------------------');

// for..in ใช้กับ Object หรือ array(ไม่แนะนำ)
let data2 = {
    name: "Sombat",
    age: 30,
    city: "Bangkok"
}
    console.log(wow);
    console.log(data2.wow);
    console.log(data2[wow]);
    console.log('++++++++++');
    for(let wow in data2){
    // console.log(wow); ได้ Key ของ Object
    // console.log(data2.wow); ได้ Undefined
    console.log(data2[wow]);
    }


