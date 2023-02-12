const p=200, q=100;

function sum(a,b)
{
    return new Promise((resolve,reject)=>{

        if(a > b)
        {
            const sumResult = a + b;
            resolve(sumResult);
        }
        else
        {
            reject("value of a is smaller than b");
        }
    })
}

const promiseoutput = sum(p,q);

console.log(promiseoutput);

promiseoutput.then((data)=>{
    console.log(data);
     return data + 100;
}).then((addeddata)=>{
    console.log(addeddata)
    return addeddata + 200;
}).then((addeddata1)=>{
    console.log(addeddata1)
}).catch((reject)=>{
    console.log(reject)
})

// console.log(promiseoutput);


// getemployeeDetailsfromDb()

// addemployeeDetailsfromDb()
