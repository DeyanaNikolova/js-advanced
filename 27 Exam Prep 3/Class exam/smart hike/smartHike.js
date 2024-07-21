class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikers = [];
        this.resouces = 100;
    }

    addGoal(peak, altitude) {
        if (this.goals[peak] == undefined) {
            this.goals[peak] = Number(altitude);

            return `You have successfully added a new goal - ${peak}`;

        } else {
            return `${peak} has already been added to your goals`;
        }
    }

    hike(peak, time, difficultyLevel) {

        if (this.goals[peak] == undefined) {
            throw new Error(`${peak} is not in your current goals`);

        } else if (this.goals[peak] && this.resouces == 0) {
            throw new Error('You don\'t have enough resources to start the hike');
        }
        let currentResources = time * 10;
        let diffrence = this.resouces - currentResources;

        if (diffrence < 0) {
            return 'You don\'t have enough resources to complete the hike';
        } else {
            this.resouces -= currentResources;
            this.listOfHikers.push({ peak, time, difficultyLevel });
            return `You hiked ${peak} peak for ${time} hours and you have ${this.resouces}% resources left`
        }
    }

    rest(time) {

        this.resouces += time * 10;
        if (this.resouces >= 100) {
            this.resouces = 100;
            return 'Your resources are fully recharged. Time for hiking!';
        } else {
            return `You have rested for ${time} hours and gained ${time * 10}% resources`
        }
    }

    showRecord(criteria) {

        if (this.listOfHikers.length == 0) {
            return `${this.username} has not done any hiking yet`
        }

        if (criteria == 'hard' || criteria == 'easy') {

            let allHikes = this.listOfHikers.filter((hike) => hike.difficultyLevel === criteria);
            let sortedHikes = allHikes.sort((a, b) => a.time - b.time);
            let bestHike = sortedHikes[0];
            
            if(bestHike == undefined){
                return `${this.username} has not done any ${criteria} hiking yet`
            }

            return `${this.username}'s best ${criteria} hike is ${bestHike.peak} peak, for ${bestHike.time} hours`;
        }

        if(criteria == 'all'){
            let hikes = [`All hiking records:`];
            this.listOfHikers.forEach(hike =>{
                hikes.push(`${this.username} hiked ${hike.peak} for ${hike.time} hours`);
            })
            return hikes.join('\n');
        }
    }
}

// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.addGoal('Rui', 1706));
// console.log(user.addGoal('Musala', 2925));

// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.addGoal('Rui', 1706));
// console.log(user.hike('Musala', 8, 'hard'));
// console.log(user.hike('Rui', 3, 'easy'));
// console.log(user.hike('Everest', 12, 'hard'));

// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.hike('Musala', 8, 'hard'));
// console.log(user.rest(4));
// console.log(user.rest(5));

// const user = new SmartHike('Vili');
// console.log(user.showRecord('all'));

const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));
