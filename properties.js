const bag = {
    color: 'green',
    height: 4,
    price: 500,
    made: 'plastic'
}
const keys = Object.keys(bag);
console.log(keys);
const values = Object.values(bag);
console.log(values);
const entries = Object.entries(bag);
console.log(entries);
delete bag.made;
console.log(bag)