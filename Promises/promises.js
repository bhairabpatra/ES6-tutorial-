
    let promises = new Promise((resolve, reject) =>{
        var a=10

        if(a>=10){
                resolve("resolved")
        }
        else{
                reject("reject")
        }
    })

    promises.then((message) => {
        console.log(message)
    })
    .catch((message) => {
            console.log(message)
    })


    // let Api = new Promise((resolve, reject) => {

    //         const res = 'https://fakestoreapi.com/product'
    //         if(res){
    //                 resolve("scuess")
    //         }
    //         else{
    //                 reject("fail")
    //         }
    // })

    // Api.then((message) => {
    //         console.log(message)
    // })
    // .catch((message) => {
    //         console.log(message)
    // })