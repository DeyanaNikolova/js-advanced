class Triathlon {
    constructor(competitionName) {
        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = [];
    }

    addParticipant(participantName, participantGender) {

        if (this.participants[participantName] == undefined) {
            this.participants[participantName] = participantGender;
            return `A new participant has been added - ${participantName}`;
        } else {
            
            return `${participantName} has already been added to the list`;
        }
    }

    completeness(participantName, condition) {
        if (!this.participants[participantName]) {
            return `${participantName} is not in the current participants list`;
        }

        if (condition < 30) {
            throw new Error(`${participantName} is not well prepared and cannot finish any discipline`);
        }

        let disciplines = Math.floor(condition / 30);

        if (disciplines > 0 && disciplines <= 2) {
            return `${participantName} could only complete ${disciplines} of the disciplines`;
        } else if (disciplines === 3) {

            let participantGender = this.participants[participantName];
           
            this.listOfFinalists.push({
                name: participantName,
                gender: participantGender
            });
            return `Congratulations, ${participantName} finished the whole competition`;
        }
    }

    rewarding(participantName) {
        let finalist = this.listOfFinalists.some(f => f.name == participantName);
        if (!finalist) {
            return `${participantName} is not in the current finalists list`;
        } else {
            return `${participantName} was rewarded with a trophy for his performance`;
        }
    }

    showRecord(criteria) {
        if (this.listOfFinalists.length == 0) {
            return 'There are no finalists in this competition';
        }

        if (criteria === 'male' || criteria === 'female') {

           
            let finalistByGender = this.listOfFinalists.filter(f => f.gender === criteria);
           
            if (finalistByGender.length === 0) {
                return `There are no ${criteria}'s that finished the competition`
            } else {
                return `${finalistByGender[0].name} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
            }
        } else if (criteria == 'all') {
            let sorted = this.listOfFinalists.sort((a, b) => a.name.localeCompare(b.name));

            let result = [`List of all ${this.competitionName} finalists:`];

            sorted.forEach(f => {
                result.push(`${f.name}`);
            })
            return result.join('\n');
        }
    }
}

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("Peter", "male"));

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("George", "male"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 70));
// console.log(contest.completeness("George", 20));

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 70));
// console.log(contest.rewarding("Peter"));
// console.log(contest.rewarding("Sasha"));

// const contest = new Triathlon("Dynamos");
// console.log(contest.showRecord("all"));



// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 90));
// console.log(contest.rewarding("Peter"));
// console.log(contest.rewarding("Sasha"));
// console.log(contest.showRecord("all"));

const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.addParticipant("George", "male"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.completeness("George", 95));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.rewarding("George"));
console.log(contest.showRecord("male"));




