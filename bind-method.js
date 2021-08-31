const mahamud = {
    id: 101,
    name: 'mahamud',
    money: 3000,
    homeCity: 'dinajpur',
    treatDey: function (treat) {
       this.money = this.money - treat;
       console.log(this);
    }
}
const heroKhan = {
    id: 102,
    name: 'hero khan',
    money: 6000,
    homeCity: 'dinajpur',
}
const heroTreatDey = mahamud.treatDey.bind(heroKhan);
heroTreatDey(5000);