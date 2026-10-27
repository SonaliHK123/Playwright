// call back

//function double (value){
//     let c=value*2;
//     return c
// }

// function triple (value){
//     let c=value*3;
//     return c
// }


// function triple (value){
//     let c=value*4;
//     return c
// }



//console.log(double(40));

//closure
function multipliar (multiplyvalue){
    let m=function multiply (value){
        let c=value*multiplyvalue;
        return c;
    }
    return m;
}


let double=multipliar(2)
let triple=multipliar(3)

console.log (triple(10))
//console.log (double(10))
