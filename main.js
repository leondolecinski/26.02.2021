const arr= new  Array( 1 , 15 , 150 , 1500 , "Jan" , 5525 , "Henryk" )

arr.forEach(teb  =>{
    console.log(teb)
})

const wiekszeOdJeden= arr.some(item => 1)
console.log(wiekszeOdJeden)

const znajdz = arr.findIndex(item => {
    if(item === "Jan"){
        return item 
}
})
console.log(znajdz)