function restEx(...a){

     arr =   a.filter( (v,i) => {
            return v >= 30
        })

        console.log(arr)
}
restEx(10,20,30)
 

function Vcolors(...colors){

  newColors =  colors.filter((colors , i) => {
         
            console.log(colors)
    })
}
Vcolors("Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red")