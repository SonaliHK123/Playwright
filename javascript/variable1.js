// a =10: Impicit globle (globle scope)
// var a=10 var (functional scope)
// let a=10 (block scope)
// const a=10 (block scope but cannot change the value)

var a=10
{
    {
        {
            let a=5
            console.log(a)

        }
        console.log(a)
    }
    {
        {
            
        }

    }






}
