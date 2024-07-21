describe('Repository', () => {

    let properties = {
        name: "string",
        age: "number",
        birthday: "object"
    };

    let entity = {
        name: "Pesho",
        age: 22,
        birthday: new Date(1998, 0, 7)
    };

    let clonnedEntity = {
        name: "Pesho",
        age: 22,
        birthday: new Date(1998, 0, 7)
    };

    describe('Initialization', () => {
        it('Sould add props property on init', () => {

            let repository = new Repository(properties);

            expect(repository).to.have.property('props');
            expect(repository.props).to.deep.equal(properties); //check all propperties in the class
        });
        it('Should have propery data on init', () => {

            let repository = new Repository(properties);

            expect(repository).to.have.property('data');
            expect(typeof repository.data).is.equal('object');
            expect(repository.data).instanceOf(Map);
        });

        it('Should have nextId function on init', () => {

            let repository = new Repository(properties);

            expect(repository).to.have.property('nextId');
            expect(typeof repository.nextId).to.equal('function');

        });
    });

    describe('Add entity', () => {
        it('Sould return incremented id if valid entity is added', () => {
            let repository = new Repository(properties);

            expect(repository.add(entity)).to.equal(0);
            expect(repository.add(entity)).to.equal(1);
        });

        it('Sould store valid entity in data map', () => {
            let repository = new Repository(properties);

            repository.add(entity);
            expect(repository.data.get(0)).not.to.be.undefined;
            expect(repository.data.get(0)).to.have.property('birthday');
            expect(repository.data.get(0)).to.have.property('age').that.equals(22);
            expect(repository.data.get(0)).to.have.property('name').that.equals('Pesho');
        });

        it('Sould throw error if property is missing', () => {
            let entity = {
                name: "Pesho",
                age: 22,
            };

            let entity1 = {
                name: "Pesho",
                birthday: new Date(1998, 0, 7)
            };

            let entity2 = {
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            let repository = new Repository(properties);

            expect(() => repository.add(entity)).to.throw(Error, `Property birthday is missing from the entity!`);
            expect(() => repository.add(entity1)).to.throw(Error, `Property age is missing from the entity!`);
            expect(() => repository.add(entity2)).to.throw(Error, `Property name is missing from the entity!`);
        });

        it('Sould throw error if property has other type', () => {
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: '1998-01-06T22:00:00:000Z'
            };

            let entity1 = {
                name: [],
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            let repository = new Repository(properties);
            expect(() => repository.add(entity)).to.throw(Error, `Property birthday is not of correct type!`);
            expect(() => repository.add(entity1)).to.throw(Error, `Property name is not of correct type!`);
        });
    });

    describe('Get count', () => {

        it('Sould return number of added valid entities', () => {

            let repository = new Repository(properties);
            repository.add(entity);
            repository.add(entity);
            repository.add(entity);

            expect(repository.count).to.equal(3);
        });

        it('Sould return zero if no added entries', () => {

            let repository = new Repository(properties);
            expect(repository.count).to.equal(0);

        });
    });

    describe('Get Id', () => {
        it('Sould return entity by ID', () => {
            let repository = new Repository(properties);
            repository.add(entity);

            expect(repository.getId(0)).to.deep.equal(clonnedEntity);

        });

        it('Sould throw error when no ID is found', () => {
            let repository = new Repository(properties);

            expect(() => repository.getId(1)).to.throw(Error, `Entity with id: 1 does not exist!`);

        });
    });

    describe('Update', () => {
        it('Sould update one valid entity with another', () => {
            let newEntity = {
                name: "Gosho",
                age: 32,
                birthday: new Date(1999, 0, 7)
            };

            let repo = new Repository(properties);
            repo.add(entity);
            repo.update(0, newEntity);

            expect(repo.getId(0).name).to.equal('Gosho');
        });

        it('Sould throw error when updating entity with invalid ID', () => {

            let repo = new Repository(properties);

            expect(() => repo.update(2, entity)).to.throw(Error, `Entity with id: 2 does not exist!`);
        });
    });

    describe('Delete', () => {
        it('Sould delete one valid entity', () => {

            let repo = new Repository(properties);
            repo.add(entity);
            repo.add(entity);
            repo.del(0);

            expect(repo.count).to.equal(1);
        });

        it('Sould throw error when deleting entity with invalid ID', () => {

            let repo = new Repository(properties);

            expect(() => repo.del(2)).to.throw(Error, `Entity with id: 2 does not exist!`);
        });
    });
});