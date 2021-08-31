const bag = {
    color: 'green',
    height: 4,
    price: 500,
    made: 'plastic'
}
for (const bags in bag){
    console.log(bags,bag[bags]);
}