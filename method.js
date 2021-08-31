const student = {
    id: 101,
    name: 'mahmud',
    money: 3000,
    bestFriend: {
        name: 'abul',
        age: 20,
        money: 4000,
        subject: ['english', 'math', 'zoology']
    },
    homeCity: 'dinajpur',
    treatDey: function (treat) {
       this.bestFriend.money = this.bestFriend.money - treat;
       console.log(this.bestFriend.money);
    }
}
student.treatDey(500);
