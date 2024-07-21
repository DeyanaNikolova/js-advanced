class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {
            pairs: {}
        };
        this.listOfHikes = [];
        this.resources = 100;
    }
    addGoal(peak, altitude) {

        if (!this.goals.pairs.hasOwnProperty(peak)) {
            this.goals.pairs[peak] = altitude
            return `You have successfully added a new goal - ${peak}`
        }
        else {
            return `${peak} has already been added to your goals`
        }

    }

    hike(peak, time, difficultyLevel) {
        if (!this.goals.pairs.hasOwnProperty(peak)) {

            throw new Error(`${peak} is not in your current goals`);
        } else {
            if (this.resources = 0) {
                throw new Error('You don\'t have enough resources to start the hike');
            }
            let used = this.resources - time * 10;
            let diffrence = this.resources - used
            if (diffrence < 0) {
                return `You don't have enough resources to complete the hike`

            } else {

                this.resources -= used;
                this.listOfHikes.push({ peak, time, difficultyLevel })
                return `You hiked ${peak} peak for ${time} hours and you have ${resources}% resources left`;
            }
        }

    }

}
// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.addGoal('Rui', 1706));
// console.log(user.addGoal('Musala', 2925));

const user = new SmartHike('Vili');
console.log(user.addGoal('Musala', 2925));
console.log(user.addGoal('Rui', 1706));
console.log(user.hike('Musala', 8, 'hard'));
console.log(user.hike('Rui', 3, 'easy'));
console.log(user.hike('Everest', 12, 'hard'));

// You have successfully added a new goal - Musala
// You have successfully added a new goal - Rui
// You hiked Musala peak for 8 hours and you have 20% resources left
// You don’t have enough resources to complete this hike
// Uncaught Error: Everest is not in your current goals
