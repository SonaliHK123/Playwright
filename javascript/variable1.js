// a =10: Impicit globle (globle scope)
// var a=10 var if outside the function the scope is IG but if inside function then functional scope (functional scope)
// let a=10 (block scope)
// const a=10 (block scope but cannot change the value)

//we can do var parent and let child but we cannot 

// let a=10
// {
//     {
//         {
//             let a=5
//             console.log(a)

//         }
//         console.log(a)
//     }
//     {
//         {
//              a=20
//             console.log(a)
//         }

//     }
// console.log(a)





// }


{
    const a=10;
    {
        {

        }
    }

    {
        {
            //a=20;
        }

        console.log(a)
    }
}
