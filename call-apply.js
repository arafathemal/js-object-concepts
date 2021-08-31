const mahamud = {
    id: 101,
    name: 'mahamud',
    money: 3000,
    homeCity: 'dinajpur',
    treatDey: function (treat, boksis, tax) {
        this.money = this.money - treat - boksis - tax;
        console.log(this);
    }
}
const heroKhan = {
    id: 102,
    name: 'hero khan',
    money: 6000,
    homeCity: 'dinajpur',
}
// using call
mahamud.treatDey.call(heroKhan, 500, 50, 50);
// using apply
mahamud.treatDey.apply(heroKhan, [1000, 100, 50]);
