class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequred) {
        if (this.spaceAvailable <= spaceRequred) {
            throw new Error('Not enough space in the garden.');
        }
        let plant = {
            plantName,
            spaceRequred,
            ripe: false,
            quantity: 0
        }
        this.plants.push(plant);
        this.spaceAvailable -= spaceRequred;

        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity) {
        let plant = this.plants.find(p => p.plantName == plantName);

        if (!plant) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if (plant.ripe == true) {
            throw new Error(`The ${plantName} is already ripe.`);
        }
        if (quantity <= 0) {
            throw new Error('The quantity cannot be zero or negative.');
        }

        plant.ripe = true;
        plant.quantity = quantity;
        if (plant.quantity == 1) {
            return `${quantity} ${plantName} has successfully ripened.`;
        } else {
            return `${quantity} ${plantName}s have successfully ripened.`;
        }
    }

    harvestPlant(plantName) {
        let plant = this.plants.find(p => p.plantName == plantName);
      
        if (!plant) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if (plant.ripe == false) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }
        this.spaceAvailable += plant.spaceRequred;

        this.storage.push({
            plantName: plant.plantName,
            quantity: plant.quantity
        });

        let index = this.plants.indexOf(plant);
        this.plants.splice(index, 1);

        return `The ${plantName} has been successfully harvested.`;
    }

    generateReport() {

        let sortedPlants = this.plants.map(p => p.plantName).sort((a, b) => a.localeCompare(b));
        let plantRow = `Plants in the garden: ${sortedPlants.join(', ')}`;

        let storageRow = 'Plants in storage: The storage is empty';

        if (this.storage.length > 0) {
            let storagePlants = this.storage.map(p => `${p.plantName} (${p.quantity})`);
            storageRow = `Plants in storage: ${storagePlants.join(', ')}`;
            
        }

        let result = [`The garden has ${this.spaceAvailable} free space left.`,
        plantRow,
        storageRow
        ];

        return result.join('\n');
    }
}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());
